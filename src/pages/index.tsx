import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Dobra from "@/components/Dobra";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { LocalBusinessSchema, PersonSchema, OrganizationSchema, WebSiteSchema } from "@/components/Schema";
import { useScrollDepth, useTimeOnPage, trackWhatsAppClick, trackInstagramClick } from "@/hooks/useGTMEvents";
import Button from "@/components/Button";
import { WHATSAPP_LINK } from "@/constants";
import { Check, Flame, Mountain, Route } from "lucide-react";
import Whatsapp from "./../../public/icons/whatsapp.svg";
import Insta from "./../../public/icons/instagram.svg";
import Gmail from "./../../public/icons/mail.svg";
import Local from "./../../public/icons/location.svg";
import Shield from "./../../public/icons/shield.svg";

export default function Home() {
  useScrollDepth();
  useTimeOnPage();
  const [showWhatsAppButton, setShowWhatsAppButton] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Se nenhuma parte da hero section estiver visível, mostra o botão
          setShowWhatsAppButton(!entry.isIntersecting);
        });
      },
      {
        threshold: 0.0, // Detecta quando qualquer parte da hero sai da viewport
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  return (
    <>
      <SEO
        title="Guia Marquinhos | Chapada Diamantina - Trilhas e Aventuras"
        description="Trilhas personalizadas na Chapada Diamantina com guia experiente há mais de 19 anos. Vale do Pati, cachoeiras, grutas e aventuras únicas. Vice-presidente da Brigada, certificado em resgate. Solicite seu orçamento!"
        url="/"
        image="/images/main_background.webp"
        keywords="Guia Chapada Diamantina, trilhas guiadas Lençóis, Vale do Pati guia, cachoeiras Chapada, guia nativo Bahia, trekking Chapada Diamantina, ecoturismo Bahia, guia turístico Lençóis"
      />
      <OrganizationSchema />
      <WebSiteSchema />
      <LocalBusinessSchema />
      <PersonSchema />
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#f6f6ee]">
        <div ref={heroRef} id="hero-section" className="w-full h-[calc(100vh-32px)] relative flex flex-col items-center justify-around">
          <Image
            src="/images/main_background.webp"
            alt="Background"
            fill
            className="object-cover"
            priority={true}
          />
          <div className="absolute inset-0 bg-[#1E1919] opacity-80 z-0"></div>
          <Navbar />
          <div className="relative flex flex-col items-center justify-center mt-[100px] md:mt-[120px] -top-5 text-white text-center max-w-[1206px] px-4 sm:px-6 gap-6">
            <h1 className="sm:text-[60px] lg:text-[85px] text-[48px] font-bold leading-tight">
              <span className="md:hidden">
                A Chapada
                <br />
                que só um
                <br />
                guia nativo
                <br />
                conhece.
              </span>
              <span className="hidden md:block">
                A Chapada que só um
                <br />
                guia nativo conhece.
              </span>
            </h1>
            <p className="sm:text-[20px] lg:text-[28px] text-lg sm:px-6 px-4 max-w-[800px]">
              Especialista em resgate e trilhas da Chapada. A experiência local que você quer, com a tranquilidade que sua família precisa.
            </p>
            <Button
              href="/roteiro-personalizado"
              variant="primary"
              size="lg"
              className="sm:w-[484px] w-full max-w-[350px] !bg-[#FFC737] !text-[#322F30]"
              gtmEvent={{
                eventName: "cta_click",
                eventData: { 
                  source: "hero",
                  destination: "roteiro_personalizado",
                  button_text: "Quero meu roteiro"
                },
              }}
            >
              Quero meu roteiro
            </Button>
            <p className="text-white text-[10px] sm:text-sm opacity-90">
              * Resposta rápida no WhatsApp • Roteiros 100% Personalizados
            </p>
          </div>
        </div>
        <Dobra />
        <div className="relative flex flex-col items-center justify-center py-12 min-h-screen w-full bg-[#F6F6EE]" id="sobre">
          <div className="relative z-10 max-w-[1141px] flex flex-col items-center justify-center gap-8 w-full px-6">
            <h2 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[72px] font-bold leading-tight text-left text-[#322F30] w-fit">
              Prazer, sou o<br></br> Marquinhos!
            </h2>

            <div className="flex flex-col sm:flex-row items-start justify-start gap-4 sm:gap-5 w-full max-w-[280px] sm:max-w-none">
              <div className="flex items-center gap-3 w-full">
                <div className="w-8 h-8 bg-[#FFC737] rounded-full flex items-center justify-center flex-shrink-0">
                  <Flame className="w-4 h-4 text-[#322F30]" />
                </div>
                <span className="text-[#322F30] text-[16px] sm:text-[18px] md:text-[18px] font-medium">
                  Vice-presidente da Brigada
                </span>
              </div>
              <div className="flex items-center gap-3 w-full">
                <div className="w-8 h-8 bg-[#FFC737] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-[#322F30]" />
                </div>
                <span className="text-[#322F30] text-[16px] sm:text-[18px] md:text-[18px] font-medium">
                  +19 anos de experiência
                </span>
              </div>
              <div className="flex items-center gap-3 w-full">
                <div className="w-8 h-8 bg-[#FFC737] rounded-full flex items-center justify-center flex-shrink-0">
                  <Image src={Shield} alt="Certificado em resgate" className="w-4 h-4" />
                </div>
                <span className="text-[#322F30] text-[16px] sm:text-[18px] md:text-[18px] font-medium">
                  Certificado em resgate
                </span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-6 w-fit lg:w-full lg:max-w-none">
              <div className="w-full lg:flex-shrink-0 lg:max-w-[500px]">
                <Image
                  src="/images/about_01_mobile.webp"
                  alt="Marquinhos"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover rounded-3xl"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col gap-8 lg:flex-1 lg:items-start lg:justify-center">
                <div className="bg-[#D9D9D9] rounded-3xl p-6 sm:p-8 w-full sm:w-[360px] md:w-[420px] lg:w-[484px]">
                  <div className="flex items-start gap-4">
                    <p className="text-[#707070] text-[16px] sm:text-[18px] md:text-[18px] leading-relaxed text-left">
                      <b>✅ Conhecer a Chapada Diamantina com um nativo muda tudo</b>. Eu ofereço a vivência completa e personalizada: a aventura que você sonha, com a estrutura profissional e a segurança que você merece.
                    </p>
                  </div>
                </div>

                <Button
                  href="/roteiro-personalizado"
                  variant="primary"
                  size="lg"
                  className="w-fit !bg-[#FFC737] !text-[#322F30]"
                >
                  Garantir meu roteiro
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full relative flex flex-col items-center justify-center px-4 py-12"
          id="avaliacoes"
        >
          <Image
            src="/images/testimonials_background.webp"
            alt="Background"
            fill
            className="object-cover"
            loading="lazy"
            priority={false}
          />
          <div className="absolute inset-0 bg-[#1E1919] opacity-80 z-0"></div>
          <h2 className="relative text-white text-[32px] sm:text-[42px] lg:text-[48px] font-bold mb-6 sm:mb-8 text-center z-10">
            Experiências reais
          </h2>

          <div className="relative w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-6 z-10 justify-items-center">
            {/* Card 1 - Barbara V. */}
            <div className="w-full max-w-[400px] bg-white rounded-2xl p-5 sm:p-6 shadow-lg min-h-[220px]">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/testimonial_01.png"
                    alt="Barbara V."
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">Barbara V.</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-[#333333] text-[12px]">4.9</span>
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#00852F]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#00852F]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#00852F]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#00852F]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#00852F]"></span>
                      </div>
                    </div>
                  </div>
                  <Image
                    src="/icons/tripadvisor.svg"
                    alt="Tripadvisor"
                    width={96}
                    height={20}
                    className="w-24 h-6 flex-shrink-0"
                  />
                </div>
              </div>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                O melhor da Chapada! Gente ele é maravilhoso, atencioso, respeitoso, conhece tuuuudo! Fora que é da brigada de lá! Super seguro e divertido!
              </p>
            </div>

            {/* Card 2 - Mariana D. */}
            <div className="w-full max-w-[400px] bg-white rounded-2xl p-5 sm:p-6 shadow-lg min-h-[220px]">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/testimonial_02.png"
                    alt="Mariana D."
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">Mariana D.</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-[#333333] text-[12px]">5.0</span>
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#00852F]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#00852F]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#00852F]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#00852F]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#00852F]"></span>
                      </div>
                    </div>
                  </div>
                  <Image
                    src="/icons/tripadvisor.svg"
                    alt="Tripadvisor"
                    width={96}
                    height={20}
                    className="w-24 h-6 flex-shrink-0"
                  />
                </div>
              </div>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                Marcos é um profissional incrível! Experiente, paciente, cuidadoso e divertido. Além de possuir um enorme conhecimento da chapada, o que nos passou muita segurança...
              </p>
            </div>

            {/* Card 3 - Patrícia P. */}
            <div className="w-full max-w-[400px] bg-white rounded-2xl p-5 sm:p-6 shadow-lg min-h-[220px]">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/testimonial_03.png"
                    alt="Patrícia P."
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">Patrícia P.</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-[#333333] text-[12px]">4.9</span>
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#00852F]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#00852F]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#00852F]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#00852F]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#00852F]"></span>
                      </div>
                    </div>
                  </div>
                  <Image
                    src="/icons/tripadvisor.svg"
                    alt="Tripadvisor"
                    width={96}
                    height={20}
                    className="w-24 h-6 flex-shrink-0"
                  />
                </div>
              </div>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                Uma experiência emocionante e inesquecível de aventura, superação, emoção e de uma beleza inigualável! Marcos Paulo é muito atencioso...
              </p>
            </div>

            {/* Card 4 - Lucas M. */}
            <div className="w-full max-w-[400px] bg-white rounded-2xl p-5 sm:p-6 shadow-lg min-h-[220px]">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex-shrink-0"></div>
                <div className="flex-1 flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">Alinemarch</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-[#333333] text-[12px]">4.8</span>
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#00852F]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#00852F]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#00852F]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#00852F]"></span>
                        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                      </div>
                    </div>
                  </div>
                  <Image
                    src="/icons/tripadvisor.svg"
                    alt="Tripadvisor"
                    width={96}
                    height={20}
                    className="w-24 h-6 flex-shrink-0"
                  />
                </div>
              </div>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                Tive o prazer de fazer um trekking de 3 dias no Vale do Pati com esse guia maravilhoso que é o Marquinhos. Um cara super experiente e atencioso que fez deste trekking um...
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen w-full max-w-[1132px] py-12 px-6" id="destinos">
          <div className="flex flex-col items-center justify-center gap-8 w-full max-w-[1200px]">
            <div className="flex flex-col items-center justify-center gap-6 text-center w-full">
              <h3 className="text-[42px] sm:text-[56px] md:text-[65px] lg:text-[72px] font-bold text-[#322F30] leading-tight">
                Personalize a sua aventura!
              </h3>
              <p className="text-[#888888] max-w-full sm:max-w-[600px] text-[18px] sm:text-[22px] md:text-[22px] lg:text-[24px]">
                Das trilhas clássicas às experiências exclusivas, encontre o roteiro que combina com você e sua família.
              </p>
              <Button
                href="/roteiro-personalizado"
                variant="primary"
                size="lg"
                className="w-full sm:w-[484px] !bg-[#FFC737] !text-[#322F30]"
              >
                Garantir meu roteiro
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full max-w-[1200px] justify-items-center">
              {/* Vale do Pati 3 dias */}
              <Link
                href="/aventuras/vale-do-pati-3-dias"
                className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group w-full max-w-[400px]"
              >
                <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[350px] p-4 sm:p-6">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden">
                    <Image
                      src="/images/adventure_01.webp"
                      alt="Vale do Pati 3 dias"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-3xl"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 p-6">
                  <h3 className="text-[#322F30] font-bold text-2xl sm:text-3xl lg:text-3xl">
                    Vale do Pati 3 dias
                  </h3>
                  <p className="text-[#888888] text-base sm:text-lg lg:text-lg font-normal line-clamp-3">
                    Um dos trekkings mais bonitos do país, o Vale do Pati é uma travessia de vários dias por montanhas, cachoeiras e vilas escondidas.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFC737]/50 text-[#322F30]">
                      <Mountain className="w-4 h-4 fill-red-500 text-red-500" />
                      <span className="font-medium">Difícil</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFC737]/50 text-[#322F30]">
                      <Route className="w-4 h-4 fill-green-500 text-green-500" />
                      <span className="font-medium">38 km</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Vale do Pati 5 dias */}
              <Link
                href="/aventuras/vale-do-pati-5-dias"
                className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group w-full max-w-[400px]"
              >
                <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[350px] p-4 sm:p-6">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden">
                    <Image
                      src="/images/adventure_02.webp"
                      alt="Vale do Pati 5 dias"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-3xl"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 p-6">
                  <h3 className="text-[#322F30] font-bold text-2xl sm:text-3xl lg:text-3xl">
                    Vale do Pati 5 dias
                  </h3>
                  <p className="text-[#888888] text-base sm:text-lg lg:text-lg font-normal line-clamp-3">
                    Considerado um dos trekkings mais bonitos do país, o Vale do Pati é uma travessia de vários dias por montanhas, cachoeiras e vilas escondidas.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFC737]/50 text-[#322F30]">
                      <Mountain className="w-4 h-4 fill-red-500 text-red-500" />
                      <span className="font-medium">Difícil</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFC737]/50 text-[#322F30]">
                      <Route className="w-4 h-4 fill-green-500 text-green-500" />
                      <span className="font-medium">60 km</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Grutas */}
              <Link
                href="/aventuras/grutas"
                className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group w-full max-w-[400px]"
              >
                <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[350px] p-4 sm:p-6">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden">
                    <Image
                      src="/images/adventure_03.webp"
                      alt="Grutas"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-3xl"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 p-6">
                  <h3 className="text-[#322F30] font-bold text-2xl sm:text-3xl lg:text-3xl">
                    Grutas
                  </h3>
                  <p className="text-[#888888] text-base sm:text-lg lg:text-lg font-normal line-clamp-3">
                    Explore os cartões-postais da Chapada Diamantina em um único roteiro. Visite a Gruta da Lapa Doce, as águas cristalinas da Pratinha e Gruta Azul.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFC737]/50 text-[#322F30]">
                      <Mountain className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      <span className="font-medium">Médio</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFC737]/50 text-[#322F30]">
                      <Route className="w-4 h-4 fill-green-500 text-green-500" />
                      <span className="font-medium">3.5 km</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Poço Encantado e Poço Azul */}
              <Link
                href="/aventuras/poco-azul-encantado"
                className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group w-full max-w-[400px]"
              >
                <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[350px] p-4 sm:p-6">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden">
                    <Image
                      src="/images/poco_encantado_e_poco_azul/poco_encantado_e_poco_azul_01.webp"
                      alt="Poço Encantado e Poço Azul"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-3xl"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 p-6">
                  <h3 className="text-[#322F30] font-bold text-2xl sm:text-3xl lg:text-3xl">
                    Poço Encantado e Poço Azul
                  </h3>
                  <p className="text-[#888888] text-base sm:text-lg lg:text-lg font-normal line-clamp-3">
                    Poço Encantado e Poço Azul revelam águas cristalinas em tons de azul surreal, grutas impressionantes e um espetáculo de luz único na Chapada Diamantina.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFC737]/50 text-[#322F30]">
                      <Mountain className="w-4 h-4 fill-green-500 text-green-500" />
                      <span className="font-medium">Fácil</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFC737]/50 text-[#322F30]">
                      <Route className="w-4 h-4 fill-green-500 text-green-500" />
                      <span className="font-medium">1.0 km</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="flex flex-col items-center justify-center mt-12 w-full">
              <Button
                href="/aventuras"
                variant="secondary"
                size="lg"
                className="w-full sm:w-[530px] !bg-[#FFC737]/50"
              >
                Confira todos os destinos
              </Button>
            </div>
          </div>
        </div>

        <div className="relative w-full flex items-center justify-center py-12 min-h-screen">
          <Image
            src="/images/discover_background.webp"
            alt="Background"
            fill
            className="object-cover"
            loading="lazy"
            priority={false}
          />
          <div className="absolute inset-0 bg-[#1E1919] opacity-80 z-0"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-[1200px] px-6 gap-8 lg:gap-12">
            <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start flex-1 lg:order-1">
              <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-white leading-tight text-center lg:text-left">
                Descubra
                <br />
                a beleza
                <br />
                da Chapada
              </h3>

              <p className="text-white text-lg sm:text-xl lg:text-[22px] text-center lg:text-left max-w-full sm:max-w-[600px] lg:max-w-none mt-4 lg:mt-6">
                Muito mais do que mostrar o caminho, eu garanto a qualidade da jornada. Explore vales e cachoeiras com o olhar privilegiado de um nativo e a segurança técnica de um brigadista.
              </p>

              <div className="hidden lg:block mt-6 lg:mt-8">
                <Button
                  href="/roteiro-personalizado"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-[484px] !bg-[#FFC737] !text-[#322F30]"
                >
                  Monte seu roteiro ideal
                </Button>
              </div>
            </div>

            <div className="w-full max-w-[600px] lg:max-w-[500px] flex-shrink-0 lg:order-2">
              <Image
                src="/images/discover_01_mobile.webp"
                alt="Guia e turistas na Chapada"
                width={600}
                height={800}
                className="w-full h-auto object-cover rounded-3xl"
                loading="lazy"
              />
            </div>

            <div className="lg:hidden w-full max-w-[600px]">
              <Button
                href="/roteiro-personalizado"
                variant="primary"
                size="lg"
                className="w-full sm:w-[484px] !bg-[#FFC737] !text-[#322F30]"
              >
                Monte seu roteiro ideal
              </Button>
            </div>
          </div>
        </div>

        <div className="flex min-h-[700px] flex-col items-center justify-center py-12 w-full px-4 bg-[#F6F6EE]" id="orcamento">
          <h3 className="font-bold text-4xl md:text-4xl text-[#322F30] mb-12 text-center">
            Fale com o Guia Marquinhos
          </h3>
          <div className="flex flex-col items-center justify-center gap-4 w-full max-w-[600px]">
            <div className="flex items-center gap-5 w-full">
              <div className="w-12 h-12 bg-[#F2F1E0] rounded-full flex items-center justify-center flex-shrink-0">
                <Image src={Local} alt="Localização" className="w-6 h-6 brightness-0" style={{ filter: 'brightness(0) saturate(100%) invert(15%) sepia(4%) saturate(1000%) hue-rotate(315deg) brightness(95%) contrast(90%)' }} />
              </div>
              <span className="text-[18px] md:text-[18px] text-[#322F30]">
                Rua José Florêncio, 230 - Lençóis / BA
              </span>
            </div>
            <a 
              href={WHATSAPP_LINK} 
              className="flex items-center gap-5 w-full"
              onClick={() => trackWhatsAppClick("contact_section")}
            >
              <div className="w-12 h-12 bg-[#F2F1E0] rounded-full flex items-center justify-center flex-shrink-0">
                <Image src={Whatsapp} alt="WhatsApp" className="w-6 h-6" style={{ filter: 'brightness(0) saturate(100%) invert(15%) sepia(4%) saturate(1000%) hue-rotate(315deg) brightness(95%) contrast(90%)' }} />
              </div>
              <span className="text-[18px] md:text-[18px] text-[#322F30]">
                75 9 9885-9612
              </span>
            </a>
            <a 
              href="https://instagram.com/chapadadiamantinaguiamarcos" 
              className="flex items-center gap-5 w-full"
              onClick={() => trackInstagramClick("contact_section")}
            >
              <div className="w-12 h-12 bg-[#F2F1E0] rounded-full flex items-center justify-center flex-shrink-0">
                <Image src={Insta} alt="Instagram" className="w-6 h-6" style={{ filter: 'brightness(0) saturate(100%) invert(15%) sepia(4%) saturate(1000%) hue-rotate(315deg) brightness(95%) contrast(90%)' }} />
              </div>
              <span className="text-[16px] md:text-[18px] text-[#322F30]">
                @chapadadiamantinaguiamarcos
              </span>
            </a>
            <a href="mailto:contato@guiamarquinhos.com" className="flex items-center gap-5 w-full">
              <div className="w-12 h-12 bg-[#F2F1E0] rounded-full flex items-center justify-center flex-shrink-0">
                <Image src={Gmail} alt="E-Mail" className="w-6 h-6" style={{ filter: 'brightness(0) saturate(100%) invert(15%) sepia(4%) saturate(1000%) hue-rotate(315deg) brightness(95%) contrast(90%)' }} />
              </div>
              <span className="text-[18px] md:text-[18px] text-[#322F30]">
                contato@guiamarquinhos.com
              </span>
            </a>
          </div>
        </div>

        <div className="bg-[#36322B] w-full flex items-center justify-center">
          <Footer />
        </div>

        {/* Botão flutuante do WhatsApp */}
        {showWhatsAppButton && (
          <a
            href={`https://api.whatsapp.com/send?phone=557598859612&text=${encodeURIComponent("Olá! Gostaria de solicitar um roteiro personalizado.\n\nAguardo retorno!")}`}
            className="fixed bottom-6 right-6 z-50 transition-all duration-300 hover:scale-110"
            aria-label="Fale conosco no WhatsApp"
            onClick={() => trackWhatsAppClick("floating_button")}
          >
            <Image
              src="/images/whatsapp.webp"
              alt="WhatsApp"
              width={60}
              height={60}
              className="w-[60px] h-[60px] rounded-full"
            />
          </a>
        )}
      </main>
    </>
  );
}
