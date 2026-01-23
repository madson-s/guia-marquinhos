import type { NextApiRequest, NextApiResponse } from "next";
import { put } from "@vercel/blob";

type FormData = {
  name: string;
  email?: string;
  phone?: string;
  timestamp: Date;
  page?: string;
  source?: string;
  form_type?: "simple" | "custom_itinerary";
  form_location?: string;
  has_email?: boolean;
  has_phone?: boolean;
  // Campos específicos do roteiro personalizado
  experience_level?: string;
  travel_month?: string;
  people_count?: string;
  destinations?: string[];
};

type ResponseData = {
  success: boolean;
  message?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Apenas aceita requisições POST
  if (req.method !== "POST") {
    return res.status(405).json({ 
      success: false, 
      error: "Método não permitido" 
    });
  }

  try {
    const { 
      nome, 
      email, 
      celular, 
      page,
      nivelExperiencia,
      mesViagem,
      quantidadePessoas,
      destinosSelecionados,
      formType = "simple"
    } = req.body;

    // Validação básica
    if (!nome || nome.trim() === "") {
      return res.status(400).json({ 
        success: false, 
        error: "Nome é obrigatório" 
      });
    }

    // Função helper para converter nível de experiência para inglês
    const getExperienceLevelInEnglish = (level: string): string => {
      switch (level) {
        case "Iniciante":
          return "beginner";
        case "Médio":
          return "intermediate";
        case "Experiente":
          return "advanced";
        default:
          return level?.toLowerCase() || level;
      }
    };

    // Prepara os dados do formulário seguindo o padrão dos eventos GTM (snake_case em inglês)
    const formData: FormData = {
      name: nome.trim(),
      email: email?.trim() || undefined,
      phone: celular?.trim() || undefined,
      timestamp: new Date(),
      page: page || "unknown",
      source: formType === "custom_itinerary" ? "custom_itinerary_page" : "form",
      form_type: formType,
      form_location: formType === "custom_itinerary" ? "custom_itinerary_page" : "home",
      has_email: !!email,
      has_phone: !!celular,
      // Campos do roteiro personalizado
      experience_level: nivelExperiencia ? getExperienceLevelInEnglish(nivelExperiencia.trim()) : undefined,
      travel_month: mesViagem?.trim() || undefined,
      people_count: quantidadePessoas?.trim() || undefined,
      destinations: destinosSelecionados || undefined,
    };

    // Salva os dados no Vercel Blob Storage de forma síncrona
    // Cria um nome de arquivo único baseado no timestamp
    const timestamp = Date.now();
    const fileName = `form-submissions/${formType}/${timestamp}-${nome.trim().replace(/\s+/g, '-').toLowerCase()}.json`;
    const fileContent = JSON.stringify(formData, null, 2);

    try {
      await put(fileName, fileContent, { access: 'public' });
      
      // Retorna resposta após salvar com sucesso
      return res.status(200).json({ 
        success: true, 
        message: "Dados salvos com sucesso" 
      });
    } catch (blobError) {
      console.error("Erro ao salvar dados no Vercel Blob:", blobError);
      // Retorna sucesso mesmo com erro para não bloquear o usuário
      return res.status(200).json({ 
        success: true, 
        message: "Dados recebidos" 
      });
    }
  } catch (error) {
    console.error("Erro ao salvar dados do formulário:", error);
    return res.status(500).json({ 
      success: false, 
      error: "Erro ao salvar dados" 
    });
  }
}
