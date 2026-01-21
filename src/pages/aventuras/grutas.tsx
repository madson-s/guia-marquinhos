import Navbar from "@/components/Navbar";
import Car from "./../../../public/imgs/car.png";
import Montain from "./../../../public/imgs/montain.png";
import Escalando from "./../../../public/imgs/escalando.png";
import Image from "next/image";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import SEO from "@/components/SEO";
import { TouristAttractionSchema, OrganizationSchema, BreadcrumbListSchema } from "@/components/Schema";
import { useScrollDepth, useTimeOnPage, trackDestinationView } from "@/hooks/useGTMEvents";
import { useEffect } from "react";

export default function Grutas() {
  useScrollDepth();
  useTimeOnPage();

  useEffect(() => {
    trackDestinationView("Grutas", "gruta");
  }, []);
  return (
    <>
      <SEO
        title="Roteiro das Grutas | Chapada Diamantina - Guia Marquinhos"
        description="Roteiro das grutas na Chapada Diamantina: Gruta da Lapa Doce, Pratinha, Gruta Azul e Morro do Pai Inácio. Passeio de 1 dia com guia experiente há mais de 19 anos."
        url="/aventuras/grutas"
        image="/images/grutas/grutas_01.webp"
        keywords="Grutas Chapada Diamantina, Gruta Lapa Doce, Pratinha, Gruta Azul, Morro Pai Inácio, Lençóis, Bahia, roteiro grutas, guia turístico grutas"
      />
      <OrganizationSchema />
      <TouristAttractionSchema
        name="Roteiro das Grutas - Chapada Diamantina"
        description="Explore os cartões-postais da Chapada Diamantina em um único roteiro. Visite a Gruta da Lapa Doce, as águas cristalinas da Pratinha e Gruta Azul, e finalize com a vista deslumbrante do Morro do Pai Inácio."
        image="https://guiamarquinhos.com/images/grutas/grutas_01.webp"
        url="https://guiamarquinhos.com/aventuras/grutas"
      />
      <BreadcrumbListSchema
        items={[
          { name: "Início", url: "https://guiamarquinhos.com" },
          { name: "Aventuras", url: "https://guiamarquinhos.com/aventuras" },
          { name: "Grutas", url: "https://guiamarquinhos.com/aventuras/grutas" },
        ]}
      />
      <div className="min-h-screen bg-[#f6f6ee]">
      <div className="flex flex-col h-full">
        <div className="w-full bg-[#36322B] h-[128px]">
          <Navbar />
        </div>

        <div className="flex flex-col items-center justify-center text-center mt-12 sm:mt-20 px-4 gap-6">
          <h1 className="text-4xl sm:text-6xl lg:text-[88px] font-bold text-[#322F30] leading-tight">
            Roteiro das grutas
          </h1>
          <p className="text-lg sm:text-2xl lg:text-[28px] text-[#888888] max-w-[900px]">
            Gruta da lapa doce, pratinha, gruta azul e morro do pai Inácio.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4">
            <div className="w-[173px] h-[61px] rounded-[100px] bg-[#FFC737] text-lg sm:text-[22px] text-[#322F30] flex items-center justify-center gap-3">
              <Image src={Montain} alt="Montain" /> Fácil
            </div>
            <div className="w-[173px] h-[61px] rounded-[100px] bg-[#FFC737] text-lg sm:text-[22px] text-[#322F30] flex items-center justify-center gap-3">
              <Image src={Car} alt="car" /> 150 km
            </div>
            <div className="w-[173px] h-[61px] rounded-[100px] bg-[#FFC737] text-lg sm:text-[22px] text-[#322F30] flex items-center justify-center gap-3">
              <Image src={Escalando} alt="Escalando" /> 3.5 km
            </div>
          </div>

          <div className="max-w-[1143px] w-full flex flex-col items-center justify-center gap-6 my-10">
            <div className="flex flex-col-reverse lg:flex-row sm:flex-row items-center lg:items-start justify-between w-full gap-8">
              <p className="text-[#4F4A4C] text-base sm:text-lg lg:text-[26px] leading-relaxed max-w-[600px] text-center lg:text-left">
                Saída da cidade de Lençóis às 8:30 em direção a Gruta Lapa Doce,
                conhecida, faremos a travessia de 1km de travessia dentro da
                gruta. Finalizando a gruta vamos para a Fazenda Pratinha onde
                tem um rio com águas cristalinas e a Gruta Azul. Na fazenda
                Pratinha tem alguns opcionais como flutuação dentro da gruta da
                pratinha e tirolesa. Pra finalizar nosso dia de passeio vamos
                para o Morro do pai Inácio onde vamos ter um vista de 360 graus
                da Chapada Diamantina e um lindo por do sol.
              </p>
              <div className="w-full lg:w-[579px] aspect-[4/3] rounded-[42px] overflow-hidden">
                <Image
                  src="/images/grutas/grutas_01.webp"
                  alt="Gruta da Lapa Doce"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-[42px]"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center mt-10 w-full">
              <div className="w-full sm:flex-1 min-w-[250px] aspect-[16/10] rounded-[42px] overflow-hidden">
                <Image
                  src="/images/grutas/grutas_02.webp"
                  alt="Grutas - Paisagem 2"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full sm:flex-1 min-w-[250px] aspect-[16/10] rounded-[42px] overflow-hidden">
                <Image
                  src="/images/grutas/grutas_03.webp"
                  alt="Grutas - Paisagem 3"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full sm:flex-1 min-w-[250px] aspect-[16/10] rounded-[42px] overflow-hidden">
                <Image
                  src="/images/grutas/grutas_04.webp"
                  alt="Grutas - Paisagem 4"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <Button
              href="/roteiro-personalizado"
              variant="secondary"
              size="md"
              className="my-10"
            >
              Monte seu roteiro ideal
            </Button>
          </div>
        </div>

        <div className="w-full bg-[#36322B]">
          <Footer />
        </div>
      </div>
    </div>
    </>
  );
}
