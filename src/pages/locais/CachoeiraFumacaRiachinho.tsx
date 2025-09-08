import Navbar from "@/components/Navbar";
import Car from "./../../../public/imgs/car.png";
import Montain from "./../../../public/imgs/montain.png";
import Escalando from "./../../../public/imgs/escalando.png";
import Fumaca from "./../../../public/imgs/cachoeira-da-fumaca.png";
import Fumaca2 from "./../../../public/imgs/cachoeira-fumaca2.png";
import Riachinho from "./../../../public/imgs/riachinho2.png";
import Riachinho2 from "./../../../public/imgs/riachinho3.png";
import Seta from "./../../../public/imgs/seta-orcamento.svg";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CachoeiraFumacaRiachinho() {
  return (
    <div className="min-h-screen bg-[#f6f6ee]">
      <div className="flex flex-col h-full">
        <div className="w-full bg-[#36322B] h-[128px]">
          <Navbar />
        </div>

        <div className="flex flex-col items-center justify-center text-center mt-12 sm:mt-20 px-4 gap-6">
          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-bold text-[#322F30] leading-tight">
            Cachoeira da fumaça e cachoeira do riachinho.
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4">
            <div className="w-[173px] h-[61px] rounded-[100px] bg-[#FFC737] text-lg sm:text-[22px] text-[#322F30] flex items-center justify-center gap-3">
              <Image src={Montain} alt="Montain" /> Moderado
            </div>
            <div className="w-[173px] h-[61px] rounded-[100px] bg-[#FFC737] text-lg sm:text-[22px] text-[#322F30] flex items-center justify-center gap-3">
              <Image src={Car} alt="car" /> 140 km
            </div>
            <div className="w-[173px] h-[61px] rounded-[100px] bg-[#FFC737] text-lg sm:text-[22px] text-[#322F30] flex items-center justify-center gap-3">
              <Image src={Escalando} alt="Escalando" /> 12.0 km
            </div>
          </div>

          <div className="max-w-[1143px] w-full flex flex-col items-center justify-center gap-6 my-10">
            <div className="flex flex-col-reverse lg:flex-row sm:flex-row items-center lg:items-start justify-between w-full gap-8">
              <p className="text-[#4F4A4C] text-base sm:text-lg lg:text-[26px] leading-relaxed max-w-[600px] text-center lg:text-left">
                Saída da cidade de Lençóis sentido ao Vale do Capão, no início da caminhada teremos uma subida por 2 km, são quase 1 hora de subida depois mais 4 km no plano até chegar na Cachoeira da Fumaça com seus 380m de queda livre, a maior Cachoeiras do Brasil em queda livre. Durante a caminhada, teremos mirantes privilegiadas do Vale do Capão e do morrão. Após o lanche na cachoeira da fumaça faremos o retorno pelo mesmo caminho até o carro de onde iremos até início da trilha que da acesso a Cachoeira do Riachinho, a caminhada é bem leve e o banho é revigorante. Após a aventura, voltaremos para Lençóis.
              </p>
              <div className="w-full lg:w-[579px] aspect-[4/3] rounded-[42px] overflow-hidden">
                <Image
                  src={Fumaca}
                  alt="Fumaca"
                  className="w-full h-full object-cover rounded-[42px]"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center mt-10 w-full">
              <div className="w-full sm:flex-1 min-w-[250px] aspect-[16/10] rounded-[42px] overflow-hidden">
                <Image
                  src={Fumaca2}
                  alt="Fumaca2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full sm:flex-1 min-w-[250px] aspect-[16/10] rounded-[42px] overflow-hidden">
                <Image
                  src={Riachinho}
                  alt="Riachinho"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full sm:flex-1 min-w-[250px] aspect-[16/10] rounded-[42px] overflow-hidden">
                <Image
                  src={Riachinho2}
                  alt="Riachinho2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <Link
              className="bg-[#F2F1E0] h-[50px] sm:h-[65px] lg:h-[70px] w-[260px] sm:w-[350px] lg:w-[484px] my-10 rounded-[100px] flex items-center justify-center gap-3 sm:gap-4 text-base sm:text-xl lg:text-[28px] border-2 text-black"
              href={"/#orcamento"}
            >
              <span className="underline">Monte seu roteiro ideal</span>
              <Image
                src={Seta}
                alt="Orçamento"
                className="w-5 sm:w-6 lg:w-auto"
              />
            </Link>
          </div>
        </div>

        <div className="w-full bg-[#36322B]">
          <Footer />
        </div>
      </div>
    </div>
  );
}
