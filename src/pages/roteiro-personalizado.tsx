"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import SEO from "@/components/SEO";
import Button from "@/components/Button";
import { WHATSAPP_LINK } from "@/constants";
import { pushGTMEvent } from "@/components/GTM";
import { Circle, ChevronLeft, ChevronRight } from "lucide-react";

export default function RoteiroPersonalizado() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [nivelExperiencia, setNivelExperiencia] = useState("");
  const [mesViagem, setMesViagem] = useState("");
  const [quantidadePessoas, setQuantidadePessoas] = useState("");
  const [destinosSelecionados, setDestinosSelecionados] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 4;

  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const destinosDisponiveis = [
    "Vale do Pati",
    "Cachoeiras",
    "Grutas",
    "Pantanal",
    "Outras",
  ];

  const toggleDestino = (destino: string) => {
    if (destinosSelecionados.includes(destino)) {
      setDestinosSelecionados(destinosSelecionados.filter((d) => d !== destino));
    } else {
      setDestinosSelecionados([...destinosSelecionados, destino]);
    }
  };

  const canProceedToNextStep = () => {
    switch (currentStep) {
      case 1:
        return nome.trim() !== "" && email.trim() !== "";
      case 2:
        return mesViagem !== "" && quantidadePessoas !== "";
      case 3:
        return nivelExperiencia !== "";
      case 4:
        return destinosSelecionados.length > 0;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (canProceedToNextStep() && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let mensagem = `Olá! Gostaria de solicitar um roteiro personalizado.

*Dados do contato:*
*Nome:* ${nome}
*E-mail:* ${email}`;

    if (nivelExperiencia) {
      mensagem += `\n*Nível de experiência em trilhas:* ${nivelExperiencia}`;
    }

    if (mesViagem) {
      mensagem += `\n*Mês previsto para a viagem:* ${mesViagem}`;
    }

    if (quantidadePessoas) {
      mensagem += `\n*Quantidade de pessoas:* ${quantidadePessoas}`;
    }

    if (destinosSelecionados.length > 0) {
      mensagem += `\n*Destinos de interesse:* ${destinosSelecionados.join(", ")}`;
    }

    mensagem += `\n\nAguardo retorno!`;

    const mensagemEncoded = encodeURIComponent(mensagem);
    const whatsappUrl = WHATSAPP_LINK.replace(/text=[^&]*/, `text=${mensagemEncoded}`);

    pushGTMEvent("roteiro_form_submit", {
      source: "roteiro_personalizado_page",
      nivel_experiencia: nivelExperiencia,
      mes_viagem: mesViagem,
      quantidade_pessoas: quantidadePessoas,
      destinos: destinosSelecionados,
    });

    window.open(whatsappUrl, "_blank");
    setIsSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Monte seu Roteiro Personalizado | Guia Marquinhos - Chapada Diamantina"
        description="Responda 5 perguntas rápidas para montarmos o roteiro ideal para seu nível físico e interesse na Chapada Diamantina."
        url="/roteiro-personalizado"
      />
      <main className="min-h-screen bg-[#F6F6EE] flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center py-20 px-6">
          <div className="w-full max-w-[600px]">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center gap-8 text-center">
                <div className="w-20 h-20 bg-[#FFC737] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-[#322F30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h1 className="text-[#322F30] text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                  Obrigado!
                </h1>
                <p className="text-[#888888] text-lg sm:text-xl mb-8">
                  Recebi suas informações e vou preparar o roteiro ideal para você. Em breve entrarei em contato pelo WhatsApp!
                </p>
                <Button
                  href="/"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-[484px] !bg-[#FFC737] !text-[#322F30]"
                >
                  Continuar Navegando
                </Button>
              </div>
            ) : (
              <>
                <h1 className="text-[#322F30] text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
                  Vamos planejar sua aventura na Chapada?
                </h1>
                <p className="text-[#888888] text-base sm:text-lg mb-10 text-center">
                  Responda 5 perguntas rápidas para eu montar o roteiro ideal para seu nível físico e Interesse.
                </p>

                {/* Indicador de Steps */}
                <div className="flex items-center justify-center gap-2 mb-10">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition ${
                          currentStep === step
                            ? "bg-[#FFC737] text-[#322F30]"
                            : currentStep > step
                            ? "bg-[#322F30] text-[#F6F6EE]"
                            : "bg-transparent border-2 border-[#322F30] text-[#322F30]"
                        }`}
                      >
                        {step}
                      </div>
                      {step < totalSteps && (
                        <div
                          className={`w-8 h-0.5 mx-1 transition ${
                            currentStep > step ? "bg-[#322F30]" : "bg-[#322F30]/20"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {/* Step 1: Dados de Contato */}
              {currentStep === 1 && (
                <div className="flex flex-col gap-6">
                  <h2 className="text-[#322F30] text-xl font-bold">Dados de contato</h2>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="nome" className="text-[#322F30] text-base">
                        Seu nome
                      </label>
                      <input
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Seu nome completo"
                        className="w-full px-4 py-3 rounded-full border border-[#322F30] bg-transparent text-[#322F30] placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#322F30]/50"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[#322F30] text-base">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu_melhor@email.com"
                        className="w-full px-4 py-3 rounded-full border border-[#322F30] bg-transparent text-[#322F30] placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#322F30]/50"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Sobre sua viagem */}
              {currentStep === 2 && (
                <div className="flex flex-col gap-6">
                  <h2 className="text-[#322F30] text-xl font-bold">Sobre sua viagem</h2>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="mes" className="text-[#322F30] text-base">
                        Mês previsto para a viagem:
                      </label>
                      <div className="relative">
                        <select
                          id="mes"
                          value={mesViagem}
                          onChange={(e) => setMesViagem(e.target.value)}
                          className="w-full px-4 py-3 rounded-full border border-[#322F30] bg-transparent text-[#322F30] focus:outline-none focus:ring-2 focus:ring-[#322F30]/50 appearance-none cursor-pointer pr-10"
                          required
                        >
                          <option value="" className="bg-[#F6F6EE] text-[#322F30]">
                            Selecione o mês.
                          </option>
                          {meses.map((mes) => (
                            <option key={mes} value={mes} className="bg-[#F6F6EE] text-[#322F30]">
                              {mes}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg
                            className="w-5 h-5 text-[#322F30]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="quantidade" className="text-[#322F30] text-base">
                        Quantidade de pessoas:
                      </label>
                      <input
                        type="number"
                        id="quantidade"
                        value={quantidadePessoas}
                        onChange={(e) => setQuantidadePessoas(e.target.value)}
                        placeholder="Ex: 2"
                        min="1"
                        className="w-full px-4 py-3 rounded-full border border-[#322F30] bg-transparent text-[#322F30] placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#322F30]/50"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Sobre você */}
              {currentStep === 3 && (
                <div className="flex flex-col gap-6">
                  <h2 className="text-[#322F30] text-xl font-bold">Sobre você</h2>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-[#322F30] text-base">
                        Qual seu nível de experiência em trilhas?
                      </label>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          type="button"
                          onClick={() => setNivelExperiencia("Iniciante")}
                          className={`flex items-center gap-2 px-4 py-3 rounded-full border text-[#322F30] transition ${
                            nivelExperiencia === "Iniciante"
                              ? "bg-[#FFC737]/50 border-[#FFC737]"
                              : "bg-transparent border-[#322F30] hover:bg-[#322F30]/5"
                          }`}
                        >
                          <Circle className="w-4 h-4 fill-green-500 text-green-500" />
                          <span>Iniciante</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setNivelExperiencia("Médio")}
                          className={`flex items-center gap-2 px-4 py-3 rounded-full border text-[#322F30] transition ${
                            nivelExperiencia === "Médio"
                              ? "bg-[#FFC737]/50 border-[#FFC737]"
                              : "bg-transparent border-[#322F30] hover:bg-[#322F30]/5"
                          }`}
                        >
                          <Circle className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                          <span>Médio</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setNivelExperiencia("Experiente")}
                          className={`flex items-center gap-2 px-4 py-3 rounded-full border text-[#322F30] transition ${
                            nivelExperiencia === "Experiente"
                              ? "bg-[#FFC737]/50 border-[#FFC737]"
                              : "bg-transparent border-[#322F30] hover:bg-[#322F30]/5"
                          }`}
                        >
                          <Circle className="w-4 h-4 fill-red-500 text-red-500" />
                          <span>Experiente</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Aventuras */}
              {currentStep === 4 && (
                <div className="flex flex-col gap-6">
                  <h2 className="text-[#322F30] text-xl font-bold">Aventuras</h2>
                  <div className="flex flex-col gap-2">
                    <label className="text-[#322F30] text-base">
                      Selecione as aventuras do seu interesse:
                    </label>
                    <div className="flex flex-col gap-3">
                      {destinosDisponiveis.map((destino) => (
                        <button
                          key={destino}
                          type="button"
                          onClick={() => toggleDestino(destino)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-full border transition text-left ${
                            destinosSelecionados.includes(destino)
                              ? "bg-[#FFC737]/50 border-[#FFC737] text-[#322F30]"
                              : "border-[#322F30] bg-transparent text-[#322F30] hover:bg-[#322F30]/5"
                          }`}
                        >
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                            destinosSelecionados.includes(destino)
                              ? "bg-[#322F30] border-[#322F30]"
                              : "border-[#322F30]"
                          }`}>
                            {destinosSelecionados.includes(destino) && (
                              <svg className="w-3 h-3 text-[#F6F6EE]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          <span className="font-medium">{destino}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Botões de navegação */}
              {currentStep === totalSteps ? (
                <div className="flex flex-col gap-4 mt-4">
                  <Button
                    type="submit"
                    as="button"
                    variant="primary"
                    size="lg"
                    className="w-full !bg-[#FFC737] !text-[#322F30]"
                    disabled={!canProceedToNextStep()}
                  >
                    Quero meu roteiro
                  </Button>
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#322F30] bg-transparent text-[#322F30] hover:bg-[#322F30]/5 transition"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span>Voltar</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between gap-4 mt-4">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrevious}
                      className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#322F30] bg-transparent text-[#322F30] hover:bg-[#322F30]/5 transition"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      <span>Voltar</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => router.back()}
                      className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#322F30] bg-transparent text-[#322F30] hover:bg-[#322F30]/5 transition"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      <span>Voltar</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!canProceedToNextStep()}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full border transition ${
                      canProceedToNextStep()
                        ? "bg-[#FFC737] border-[#FFC737] text-[#322F30] hover:bg-[#FFC737]/90"
                        : "bg-transparent border-[#322F30]/30 text-[#322F30]/30 cursor-not-allowed"
                    }`}
                  >
                    <span>Próximo</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
                </form>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
