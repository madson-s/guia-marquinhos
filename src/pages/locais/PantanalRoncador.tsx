import Navbar from "@/components/Navbar";
import Montain from "./../../../public/imgs/montain.png";
import Escalando from "./../../../public/imgs/escalando.png";
import Car from "./../../../public/imgs/car.png";
import Pantanal from "./../../../public/imgs/pantanal.png";
import Pantanal2 from "./../../../public/imgs/pantanal2.png";
import Roncador from "./../../../public/imgs/roncador2.png";
import Roncador2 from "./../../../public/imgs/roncador3.png";
import Seta from "./../../../public/imgs/seta-orcamento.svg";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PantanalRoncador() {
  return (
    <div className="min-h-screen bg-[#f6f6ee]">
      <div className="flex flex-col h-full">
        <div className="w-full bg-[#36322B] h-[128px]">
          <Navbar />
        </div>

        <div className="flex flex-col items-center justify-center text-center mt-12 sm:mt-20 px-4 gap-6">
          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-bold text-[#322F30] leading-tight">
            Mini pantanal e cachoeira do roncador 
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4">
            <div className="w-[173px] h-[61px] rounded-[100px] bg-[#FFC737] text-lg sm:text-[22px] text-[#322F30] flex items-center justify-center gap-3">
              <Image src={Montain} alt="Montain" /> Fácil
            </div>
            <div className="w-[173px] h-[61px] rounded-[100px] bg-[#FFC737] text-lg sm:text-[22px] text-[#322F30] flex items-center justify-center gap-3">
              <Image src={Car} alt="car" /> 40 km
            </div>
            <div className="w-[173px] h-[61px] rounded-[100px] bg-[#FFC737] text-lg sm:text-[22px] text-[#322F30] flex items-center justify-center gap-3">
              <Image src={Escalando} alt="Escalando" /> 5.0 km
            </div>
          </div>

          <div className="max-w-[1143px] w-full flex flex-col items-center justify-center gap-6 my-10">
            <div className="flex flex-col-reverse lg:flex-row sm:flex-row items-center lg:items-start justify-between w-full gap-8">
              <p className="text-[#4F4A4C] text-base sm:text-lg lg:text-[32px] leading-relaxed max-w-[600px] text-center lg:text-left">
                Saindo de lençóis sentido Remanso, vila quilombola de onde iniciamos o passeio de 7 km de barco, no final do passeio de barco te uma caminhada até a cachoeira do roncador e suas piscinas naturais. No fim do passeio faremos uma caminhada até o carro e retornamos pra lençóis.
              </p>
              <div className="w-full lg:w-[579px] aspect-[4/3] rounded-[42px] overflow-hidden">
                <Image
                  src={Pantanal}
                  alt="Pantanal"
                  className="w-full h-full object-cover rounded-[42px]"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center mt-10 w-full">
              <div className="w-full sm:flex-1 min-w-[250px] aspect-[16/10] rounded-[42px] overflow-hidden">
                <Image
                  src={Pantanal2}
                  alt="Pantanal2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full sm:flex-1 min-w-[250px] aspect-[16/10] rounded-[42px] overflow-hidden">
                <Image
                  src={Roncador}
                  alt="Roncador"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full sm:flex-1 min-w-[250px] aspect-[16/10] rounded-[42px] overflow-hidden">
                <Image
                  src={Roncador2}
                  alt="Roncador2"
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
