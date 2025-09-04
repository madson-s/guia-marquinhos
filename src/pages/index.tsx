import Image from "next/image";
import Background from "./../../public/imgs/bg-inicio.png";
import Navbar from "@/components/Navbar";
import Seta from "./../../public/imgs/seta-orcamento.svg";
import Link from "next/link";
import Dobra from "@/components/Dobra";
import Aceito from "./../../public/imgs/aceito.png";
import Marquinho1 from "./../../public/imgs/Marq1.svg";
import Marquinho2 from "./../../public/imgs/Marq2.svg";
import Marquinho3 from "./../../public/imgs/Marq3.svg";
import Carrousel from "@/components/Carrousel";
import PontosIniciais from "@/components/PontosIniciais";
import BgTrilha from "./../../public/imgs/bg-trilha.png";
import Bg1Descubra from "./../../public/imgs/bg-1-descubra.png";
import Bg2Descubra from "./../../public/imgs/bg-2-descubra.png";
import Form from "@/components/Form";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#f6f6ee]">
      <div
        className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-around"
        style={{ backgroundImage: `url(${Background.src})` }}
      >
        <Navbar />
        <div className="flex flex-col items-center justify-center mt-[120px] text-white text-center max-w-[1206px]">
          <h1 className="sm:text-[100px] text-[48px] sm:px-0 px-4 font-bold leading-tight">
            Entre Vales, Cachoeiras e trilhas únicas
          </h1>
          <p className="sm:text-[36px] text-2xl sm:px-6 px-8 sm:my-0 my-4">
            Trilhas personalizadas, acolhimento e histórias únicas guiadas por
            quem nasceu e vive a <strong>Chapada Diamantina</strong>
          </p>
          <Link
            className="bg-[#F2F1E0] h-[70px] sm:w-[484px] w-[350px] mt-10 rounded-[100px] flex items-center justify-center gap-4 sm:text-[28px] text-[20px] text-black hover:bg-[#FFC738]"
            href={"https://wa.me/5575999990090"}
          >
            <span className="underline">Solicite seu orçamento</span>
            <Image src={Seta} alt="Orçamento" />
          </Link>
        </div>
      </div>
      <Dobra />
      <div className="flex flex-col items-center justify-center py-20 min-h-screen px-6" id="sobre">
        <div className="max-w-[1141px] flex flex-col items-center justify-center gap-10 w-full">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full text-[#322F30] gap-10 lg:gap-20">
            <h2 className="text-[40px] sm:text-[50px] md:text-[65px] lg:text-[80px] font-bold leading-tight text-center lg:text-start max-w-[584px]">
              Prazer, sou <br /> o Marquinhos!
            </h2>
            <p className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] text-[#888888] text-center lg:text-left max-w-[469px] sm:pt-5">
              Guia há mais de 19 anos, vice-presidente da Brigada de Incêndio de
              Lençóis e certificado em resgate em montanha e resgate aquático.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-between w-full gap-5">
            <button className="bg-[#FFC737] h-[58px] flex items-center justify-center gap-3 w-full sm:w-[341px] text-[#322F30] text-[18px] md:text-[22px] rounded-[100px]">
              <Image src={Aceito} alt="Aceito" /> +19 anos de experiência
            </button>
            <button className="bg-[#FFC737] h-[58px] w-full sm:w-[341px] text-[#322F30] text-[18px] md:text-[22px] rounded-[100px]">
              🔥 Vice-presidente da Brigada
            </button>
            <button className="bg-[#FFC737] h-[58px] w-full sm:w-[341px] text-[#322F30] text-[18px] md:text-[22px] rounded-[100px]">
              🧭 Certificado em resgate
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-10 mt-6">
            <div className="flex items-center justify-center gap-5 flex-wrap lg:flex-nowrap">
              <Image
                src={Marquinho1}
                alt="Marquinho 1"
                className="w-[250px] sm:w-auto"
              />
              <Image
                src={Marquinho2}
                alt="Marquinho 2"
                className="w-[250px] sm:w-auto"
              />
              <Image
                src={Marquinho3}
                alt="Marquinho 3"
                className="w-[250px] sm:w-auto"
              />
            </div>
            <Link
              className="bg-[#F2F1E0] h-[60px] sm:h-[70px] w-full sm:w-[484px] mt-6 rounded-[100px] flex items-center justify-center gap-4 text-[20px] sm:text-[28px] text-black border-[3px] border-[#322F30] text-center hover:bg-[#FFC738]"
              href={"https://instagram.com/guiamarquinhos"}
            >
              <span className="underline">Conheça meu trabalho</span>
              <Image src={Seta} alt="Orçamento" />
            </Link>
          </div>
        </div>
      </div>

      <Carrousel />
      <div className="flex flex-col items-center lg:items-start justify-center min-h-screen w-full max-w-[1132px] py-20 px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start sm:justify-between gap-10 w-full">
          <div className="relative inline-block max-w-full lg:max-w-[389px] text-center lg:text-left">
            <h3 className="relative text-[42px] sm:text-[56px] md:text-[72px] lg:text-[88px] font-bold text-[#322F30] leading-[1.1] z-10">
              Escolha a sua
              <br />
              aventura
            </h3>
            <div className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-yellow-400 rounded-full top-[120px] sm:top-[150px] md:top-[180px] right-[20px] sm:right-[40px] md:right-[70px] -translate-y-1/2 z-0 sm:flex hidden"></div>
          </div>

          <div className="flex flex-col items-center lg:items-start justify-center gap-4 text-center lg:text-left">
            <p className="text-[#888888] max-w-full sm:max-w-[400px] md:max-w-[450px] lg:max-w-[491px] text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px]">
              Das trilhas clássicas às experiências exclusivas, encontre o
              roteiro que combina com você.
            </p>
            <Link
              className="bg-[#F2F1E0] h-[60px] sm:h-[65px] md:h-[70px] w-full sm:w-[360px] md:w-[420px] lg:w-[484px] mt-2 rounded-[100px] flex items-center justify-center gap-4 text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] text-black border-2 border-[#322F30]"
              href={"https://wa.me/5575999990090"}
            >
              <span className="underline">Solicite seu orçamento</span>
              <Image src={Seta} alt="Orçamento" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-12 md:mt-16 lg:mt-20 w-full" id="destinos">
          <PontosIniciais />
        </div>
      </div>

      <div
        className="relative w-full flex items-center justify-center min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]"
        style={{
          backgroundImage: `url(${BgTrilha.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
       
        <div className="absolute inset-0 bg-[#36322B]/70"></div>

        <div className="relative z-10 flex flex-col lg:flex-row justify-between sm:items-start items-center w-full max-w-[1200px] px-6 sm:px-10 lg:px-16 gap-10">

          <div className="flex flex-col sm:items-start items-center text-center sm:text-left">
            <div className="relative inline-block max-w-full sm:max-w-[579px] mt-7">
              <h3 className="relative text-4xl sm:w-[579px] sm:text-5xl md:text-6xl lg:text-[88px] font-bold text-white leading-[1.1] z-10">
                Descubra
                <br />
                a beleza
                <br />
                da Chapada
              </h3>
              <div className="absolute w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-yellow-400 rounded-full top-[140px] sm:top-[160px] lg:top-[180px] right-[20px] sm:right-[40px] lg:right-[170px] -translate-y-1/2 z-0 sm:flex hidden"></div>
            </div>

            <Link
              className="bg-[#F2F1E0] h-[45px] sm:h-[65px] lg:h-[70px] w-[320px] sm:w-[350px] lg:w-[484px] mt-6 rounded-[100px] flex items-center justify-center gap-3 sm:gap-4 text-[18px] sm:text-xl lg:text-[28px] text-black"
              href={"/#orcamento"}
            >
              <span className="underline">Monte seu roteiro ideal</span>
              <Image
                src={Seta}
                alt="Orçamento"
                className="w-8 sm:w-6 lg:w-auto"
              />
            </Link>
          </div>

          <div className="flex flex-col justify-end sm:mt-10 gap-6 sm:gap-10 w-full lg:w-auto">

            <p className="text-[#F7F7F7] text-lg sm:text-xl lg:text-[26px] text-center sm:text-start max-w-full sm:max-w-[400px]">
              Explore trilhas icônicas com roteiros personalizados, um guia
              local experiente e aventuras seguras em cada passo.
            </p>

            <div className="flex justify-between gap-3 sm:gap-4 h-[180px] sm:h-[220px] lg:ml-auto mb-2">
              <Image
                src={Bg1Descubra}
                alt="Trilha 1"
                className="rounded-[16px] sm:rounded-[20px] h-full sm:w-auto w-[150px] sm:object-cover"
              />
              <Image
                src={Bg2Descubra}
                alt="Trilha 2"
                className="rounded-[16px] sm:rounded-[20px] h-full sm:w-auto w-[150px] sm:object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex min-h-[700px] flex-col items-center justify-center py-20 w-full px-4" id="orcamento">
        <h3 className="font-bold text-4xl md:text-5xl text-[#322F30] max-w-[476px] text-center">
          Faça seu orçamento sem compromisso
        </h3>
        <Form />
      </div>

      <div className="bg-[#36322B] w-full flex items-center justify-center">
        <Footer />
      </div>
    </main>
  );
}
