import Navbar from "@/components/Navbar";
import Car from "./../../../public/imgs/car.png";
import Montain from "./../../../public/imgs/montain.png";
import Escalando from "./../../../public/imgs/escalando.png";
import Grutas1 from "./../../../public/imgs/grutas.png";
import Grutas2 from "./../../../public/imgs/grutas2.png";
import Grutas3 from "./../../../public/imgs/grutas3.png";
import Grutas4 from "./../../../public/imgs/grutas4.png";
import Seta from "./../../../public/imgs/seta-orcamento.svg";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Grutas() {
  return (
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
                  src={Grutas1}
                  alt="Grutas1"
                  className="w-full h-full object-cover rounded-[42px]"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center mt-10 w-full">
              <div className="w-full sm:flex-1 min-w-[250px] aspect-[16/10] rounded-[42px] overflow-hidden">
                <Image
                  src={Grutas2}
                  alt="Grutas2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full sm:flex-1 min-w-[250px] aspect-[16/10] rounded-[42px] overflow-hidden">
                <Image
                  src={Grutas3}
                  alt="Grutas3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full sm:flex-1 min-w-[250px] aspect-[16/10] rounded-[42px] overflow-hidden">
                <Image
                  src={Grutas4}
                  alt="Grutas4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <Link
              className="bg-[#F2F1E0] h-[50px] sm:h-[65px] lg:h-[70px] w-[260px] sm:w-[350px] lg:w-[484px] my-10 rounded-[100px] flex items-center justify-center gap-3 sm:gap-4 text-base sm:text-xl lg:text-[28px] border-2 text-black"
              href={"/orcamento"}
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
