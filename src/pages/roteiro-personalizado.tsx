"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import SEO from "@/components/SEO";
import Button from "@/components/Button";
import { WHATSAPP_LINK } from "@/constants";
import { Circle, ChevronLeft, ChevronRight } from "lucide-react";

export default function RoteiroPersonalizado() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [nome, setNome] = useState("");
  const [celular, setCelular] = useState("");
  const [nivelExperiencia, setNivelExperiencia] = useState("");
  const [mesViagem, setMesViagem] = useState("");
  const [quantidadePessoas, setQuantidadePessoas] = useState("");
  const [destinosSelecionados, setDestinosSelecionados] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hasTrackedFormStart = useRef(false);
  const stepStartTimeRef = useRef<{ [key: number]: number }>({});

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
    const isAdding = !destinosSelecionados.includes(destino);
    if (isAdding) {
      setDestinosSelecionados([...destinosSelecionados, destino]);
    } else {
      setDestinosSelecionados(destinosSelecionados.filter((d) => d !== destino));
    }
  };

  const getExperienceLevelInEnglish = (level: string): string => {
    switch (level) {
      case "Iniciante":
        return "beginner";
      case "Médio":
        return "intermediate";
      case "Experiente":
        return "advanced";
      default:
        return level;
    }
  };

  const canProceedToNextStep = () => {
    switch (currentStep) {
      case 1:
        return nome.trim() !== "" && celular.trim() !== "";
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
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      stepStartTimeRef.current[nextStep] = Date.now();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      const previousStep = currentStep - 1;
      setCurrentStep(previousStep);
      stepStartTimeRef.current[previousStep] = Date.now();
    }
  };

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
          celular,
          page: window.location.pathname,
          nivelExperiencia,
          mesViagem,
          quantidadePessoas,
          destinosSelecionados,
          formType: "custom_itinerary",
        }),
      });

      await response.json();
    } catch (error) {
      // Continua mesmo se houver erro - não bloqueia o usuário
      console.error("Erro ao enviar formulário:", error);
    } finally {
      // Remove o overlay quando a requisição terminar (sucesso ou erro)
      setIsSubmitting(false);
    }

    let mensagem = `Olá! Gostaria de solicitar um roteiro personalizado.

*Dados do contato:*
*Nome:* ${nome}
*Celular:* ${celular}`;

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
    window.location.href = whatsappUrl;
    setIsSubmitted(true);
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
      
      <SEO
        title="Monte seu Roteiro Personalizado | Guia Marquinhos - Chapada Diamantina"
        description="Responda 5 perguntas rápidas para montarmos o roteiro ideal para seu nível físico e interesse na Chapada Diamantina. Roteiros 100% personalizados com guia experiente."
        url="/roteiro-personalizado"
        keywords="roteiro personalizado Chapada Diamantina, orçamento trilhas, planejamento viagem Chapada, roteiro sob medida Lençóis, guia personalizado Bahia"
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
                        onChange={(e) => {
                          setNome(e.target.value);
                          if (!hasTrackedFormStart.current && e.target.value.length > 0) {
                            hasTrackedFormStart.current = true;
                            stepStartTimeRef.current[1] = Date.now();
                          }
                        }}
                        placeholder="Seu nome completo"
                        className="w-full px-4 py-3 rounded-full border border-[#322F30] bg-transparent text-[#322F30] placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#322F30]/50"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="celular" className="text-[#322F30] text-base">
                        Celular
                      </label>
                      <input
                        type="tel"
                        id="celular"
                        value={celular}
                        onChange={(e) => setCelular(e.target.value)}
                        placeholder="(99) 9 9999-9999"
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
                <div className="flex flex-col gap-4 mt-4 sm:items-center">
                  <Button
                    type="submit"
                    as="button"
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto md:w-[420px] lg:w-[484px] !bg-[#FFC737] !text-[#322F30]"
                    disabled={!canProceedToNextStep() || isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Quero meu roteiro"}
                  </Button>
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="w-full sm:w-auto md:w-[420px] lg:w-[484px] h-[54px] flex items-center justify-center gap-2 px-6 rounded-full border border-[#322F30] bg-transparent text-[#322F30] hover:bg-[#322F30]/5 transition text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px]"
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
