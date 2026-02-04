import Whatsapp from "./../../public/imgs/whatsapp.png";
import Local from "./../../public/imgs/local.png";
import Insta from "./../../public/imgs/insta-guia.png";
import Gmail from "./../../public/imgs/contato-gmail.png";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import { WHATSAPP_LINK } from "@/constants";
import { getGclid } from "@/lib/gclid";
import { setWhatsAppRedirectUrl } from "@/lib/whatsapp-redirect";

export default function Form() {
  const iconesContato = [
    { src: Local, alt: "Rua José Florêncio, 230 - Lençóis / BA" },
    { src: Whatsapp, alt: "75 9 9885-9612" },
    { src: Insta, alt: "@chapadadiamantinaguiamarcos" },
    { src: Gmail, alt: "contato@guiamarquinhos.com" },
  ];

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email,
          celular,
          page: window.location.pathname,
          gclid: getGclid() || undefined,
        }),
      });

      await response.json();
    } catch (error) {
      // Continua mesmo se houver erro - não bloqueia o usuário
      console.error("Erro ao enviar formulário:", error);
    } finally {
      setIsSubmitting(false);
    }

    // Formata a mensagem para o WhatsApp
    let mensagem = `Olá! Gostaria de solicitar um orçamento.

*Dados do contato:*
*Nome:* ${nome}`;

    if (email) {
      mensagem += `\n*E-mail:* ${email}`;
    }
    if (celular) {
      mensagem += `\n*Celular:* ${celular}`;
    }
    mensagem += `\n\nAguardo retorno!`;

    const mensagemEncoded = encodeURIComponent(mensagem);
    const whatsappUrl = WHATSAPP_LINK.replace(/text=[^&]*/, `text=${mensagemEncoded}`);
    setWhatsAppRedirectUrl(whatsappUrl);
    window.location.href = "/obrigado";
  };

  return (
    <>
      {/* Overlay de loading */}
      {isSubmitting && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-[#322F30] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-[#322F30] text-lg font-medium">Enviando...</p>
          </div>
        </div>
      )}
      
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-12 w-full max-w-[1138px] gap-10">
      <div className="flex-col flex items-start justify-center gap-4 w-full md:w-1/2">
        {iconesContato.map((icone, index) => (
          <div key={index} className="flex items-center gap-5">
            <div className="w-12 h-12 bg-[#F2F1E0] rounded-full flex items-center justify-center">
              <Image src={icone.src} alt={icone.alt} />
            </div>
            <span className="text-[18px] md:text-[20px] text-[#322F30] break-words">
              {icone.alt}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 w-full md:w-1/2 max-w-[380px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <div className="flex flex-col text-[#322F30]">
            <label
              htmlFor="nome"
              className="text-[18px] md:text-[20px] font-normal"
            >
              Nome Completo
            </label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome completo"
              className="mt-1 px-4 py-2 border-2 border-[#322F30] rounded-full text-[#322F30]"
              required
            />
          </div>

          <div className="flex flex-col text-[#322F30]">
            <label
              htmlFor="email"
              className="text-[18px] md:text-[20px] font-normal"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu_melhor@email.com"
              className="mt-1 px-4 py-2 border-2 border-[#322F30] rounded-full text-[#322F30]"
            />
          </div>

          <div className="flex flex-col text-[#322F30]">
            <label
              htmlFor="celular"
              className="text-[18px] md:text-[20px] font-normal"
            >
              Celular
            </label>
            <input
              type="tel"
              id="celular"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
              placeholder="(99) 9 9999-9999"
              className="mt-1 px-4 py-2 border-2 border-[#322F30] rounded-full text-[#322F30]"
            />
          </div>

          <Button
            as="button"
            type="submit"
            variant="secondary"
            size="sm"
            className="mt-6 w-[173px] h-[42px] text-[18px] md:text-[20px] self-center md:self-start"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </div>
    </div>
    </>
  );
}
