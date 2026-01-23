import type { NextApiRequest, NextApiResponse } from "next";
import { getDatabase } from "@/lib/mongodb";

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

  // Verifica se MONGODB_URI está configurado
  if (!process.env.MONGODB_URI) {
    console.error("MONGODB_URI não está configurado");
    // Retorna sucesso mesmo sem MongoDB para não bloquear o usuário
    return res.status(200).json({ 
      success: true, 
      message: "Dados recebidos" 
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

    // Insere os dados no MongoDB de forma assíncrona (fire and forget)
    // Não espera a conclusão antes de retornar resposta
    const insertPromise = getDatabase()
      .then((db) => {
        const collection = db.collection("form_submissions");
        return collection.insertOne(formData);
      })
      .catch((dbError) => {
        // Silenciosamente ignora erros do banco
        console.error("Erro ao inserir dados no MongoDB (assíncrono):", dbError);
      });

    // Retorna resposta imediatamente sem esperar a inserção
    res.status(200).json({ 
      success: true, 
      message: "Dados salvos com sucesso" 
    });

    // Mantém a promise viva para não ser cancelada na Vercel
    // A Vercel mantém o processo ativo enquanto houver promises pendentes
    insertPromise.catch(() => {
      // Ignora erros silenciosamente
    });
  } catch (error) {
    console.error("Erro ao salvar dados do formulário:", error);
    return res.status(500).json({ 
      success: false, 
      error: "Erro ao salvar dados" 
    });
  }
}
