import Navbar from "@/components/Navbar";
import Montain from "./../../../public/imgs/montain.png";
import Escalando from "./../../../public/imgs/escalando.png";
import Sossego from "./../../../public/imgs/sossego.png";
import Sossego2 from "./../../../public/imgs/sossego2.png";
import Ribeirao from "./../../../public/imgs/ribeirao-do-meio.png";
import Ribeirao2 from "./../../../public/imgs/ribeirao-do-meio2.png";
import Image from "next/image";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import SEO from "@/components/SEO";
import { TouristAttractionSchema, OrganizationSchema, BreadcrumbListSchema } from "@/components/Schema";
export default function CachoeiraSossegoRibeirao() {
  return (
    <>
      <SEO
        title="Cachoeira do Sossego e Ribeirão do Meio | Chapada Diamantina"
        description="Relaxe na tranquila Cachoeira do Sossego e explore o Ribeirão do Meio, conhecido como Tobogã Natural da Chapada. Trilha difícil de 14km a pé, sem necessidade de transporte."
        url="/aventuras/cachoeira-sossego-ribeirao"
        image="/imgs/sossego.png"
        keywords="Cachoeira do Sossego, Ribeirão do Meio, Tobogã Natural, Chapada Diamantina, Lençóis, Bahia"
      />
      <OrganizationSchema />
      <TouristAttractionSchema
        name="Cachoeira do Sossego e Ribeirão do Meio"
        description="Relaxe na tranquila Cachoeira do Sossego, um refúgio escondido na Chapada Diamantina, perfeito para momentos de paz e banho em águas frescas rodeadas pela natureza. Explore o Ribeirão do Meio, um paraíso natural com águas cristalinas, poços tranquilos e uma paisagem preservada que convida ao banho e à contemplação."
        image="https://guiamarquinhos.com/imgs/sossego.png"
        url="https://guiamarquinhos.com/aventuras/cachoeira-sossego-ribeirao"
      />
      <BreadcrumbListSchema
        items={[
          { name: "Início", url: "https://guiamarquinhos.com" },
          { name: "Aventuras", url: "https://guiamarquinhos.com/aventuras" },
          { name: "Cachoeira do Sossego e Ribeirão do Meio", url: "https://guiamarquinhos.com/aventuras/cachoeira-sossego-ribeirao" },
        ]}
      />
      <div className="min-h-screen bg-[#f6f6ee]">
      <div className="flex flex-col h-full">
        <div className="w-full bg-[#36322B] h-[128px]">
          <Navbar />
        </div>

        <div className="flex flex-col items-center justify-center text-center mt-12 sm:mt-20 px-4 gap-6">
          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-bold text-[#322F30] leading-tight">
            Cachoeira do sossego e Ribeirão do meio 
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4">
            <div className="w-[173px] h-[61px] rounded-[100px] bg-[#FFC737] text-lg sm:text-[22px] text-[#322F30] flex items-center justify-center gap-3">
              <Image src={Montain} alt="Montain" /> Difícil
            </div>
            <div className="w-[173px] h-[61px] rounded-[100px] bg-[#FFC737] text-lg sm:text-[22px] text-[#322F30] flex items-center justify-center gap-3">
              <Image src={Escalando} alt="Escalando" /> 14.0 km
            </div>
          </div>

          <div className="max-w-[1143px] w-full flex flex-col items-center justify-center gap-6 my-10">
            <div className="flex flex-col-reverse lg:flex-row sm:flex-row items-center lg:items-start justify-between w-full gap-8">
              <p className="text-[#4F4A4C] text-base sm:text-lg lg:text-[32px] leading-relaxed max-w-[600px] text-center lg:text-left">
                A Cachoeira do Sossego é uma cachoeira localizada em Lençóis de nível difícil com obstáculos quando caminhamos na parte de leito de rio, na volta do sossego passamos no Ribeirão do Meio conhecido também, como Tobogã Natural da Chapada. O passeio é feito a pé, não precisa de transporte.
              </p>
              <div className="w-full lg:w-[579px] aspect-[4/3] rounded-[42px] overflow-hidden">
                <Image
                  src={Sossego}
                  alt="Sossego"
                  className="w-full h-full object-cover rounded-[42px]"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center mt-10 w-full">
              <div className="w-full sm:flex-1 min-w-[250px] aspect-[16/10] rounded-[42px] overflow-hidden">
                <Image
                  src={Sossego2}
                  alt="Sossego2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full sm:flex-1 min-w-[250px] aspect-[16/10] rounded-[42px] overflow-hidden">
                <Image
                  src={Ribeirao}
                  alt="Ribeirao"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full sm:flex-1 min-w-[250px] aspect-[16/10] rounded-[42px] overflow-hidden">
                <Image
                  src={Ribeirao2}
                  alt="Ribeirao2"
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
