import Navbar from "@/components/Navbar";
import ValeDoPati from "./../../public/imgs/vale-do-pati.png";
import Grutas from "./../../public/imgs/grutas.png";
import PocoAzul from "./../../public/imgs/poco-azul.png";
import CachoeiraFumaca from "./../../public/imgs/cachoeira-da-fumaca.png";
import Riachinho from "./../../public/imgs/riachinho.png";
import Mosquito from "./../../public/imgs/mosquito.png";
import PocoDoDiabo from "./../../public/imgs/poco-do-diabo.png";
import Sossego from "./../../public/imgs/sossego.png";
import RibeiraoDoMeio from "./../../public/imgs/ribeirao-do-meio.png";
import Pantanal from "./../../public/imgs/pantanal.png";
import Roncador from "./../../public/imgs/roncador.png";
import Link from "next/link";
import Seta from "./../../public/imgs/seta-orcamento.svg";
import BgTrilha from "./../../public/imgs/bg-trilha.png";
import Bg1Descubra from "./../../public/imgs/bg-1-descubra.png";
import Bg2Descubra from "./../../public/imgs/bg-2-descubra.png";
import Image from "next/image";
import Dobra from "@/components/Dobra";
import Footer from "@/components/Footer";

export default function Aventuras() {
  const destinos = [
    {
      img: ValeDoPati,
      title: "Vale do Pati 3 dias",
      description:
        "Considerado um dos trekkings mais bonitos do país, o Vale do Pati é uma travessia de vários dias por montanhas, cachoeiras e vilas escondidas. Roteiro completo com pernoites em casas de moradores locais e paisagens de tirar o fôlego.",
      href: "/locais/ValeDoPati3Dias",
    },
    {
      img: ValeDoPati,
      title: "Vale do Pati 5 dias",
      description:
        "Considerado um dos trekkings mais bonitos do país, o Vale do Pati é uma travessia de vários dias por montanhas, cachoeiras e vilas escondidas. Roteiro completo com pernoites em casas de moradores locais e paisagens de tirar o fôlego.",
      href: "/locais/ValeDoPati5Dias",
    },
    {
      img: Grutas,
      title: "Grutas",
      description:
        "Trilhas que revelam as maravilhas da Chapada Diamantina, passando pela imensa Gruta da Lapa Doce, as águas cristalinas da Pratinha, o encanto da Gruta Azul e o visual inesquecível do Morro do Pai Inácio.",
      href: "/locais/Grutas",
    },
    {
      img: PocoAzul,
      title: "Poço encantado e Poço azul",
      description:
        "Poço Encantado e Poço Azul revelam águas cristalinas em tons de azul surreal, grutas impressionantes e um espetáculo de luz único na Chapada Diamantina.",
      href: "/locais/PocoAzulEncantado"
    },
    {
      img: CachoeiraFumaca,
      title: "Cachoeira da fumaça",
      description:
        "Descubra a imponente Cachoeira da Fumaça, com quase 400 metros de altura e um visual de tirar o fôlego, cercada pela natureza exuberante. ",
      href: "/locais/CachoeiraFumacaRiachinho"
    },
    {
      img: Riachinho,
      title: "Cachoeira do Riachinho",
      description:
        "Relaxe na Cachoeira do Riachinho, com quedas d’água suaves e poços perfeitos para um banho refrescante em meio à natureza.",
      href: "/locais/CachoeiraFumacaRiachinho"
    },
    {
      img: Mosquito,
      title: "Cachoeira do mosquito",
      description:
        "Viva a experiência da Cachoeira do Mosquito, uma queda d’água imponente cercada por paredões rochosos e vegetação exuberante, perfeita para um banho revigorante ",
      href: "/locais/CachoeiraMosquitoPoco"
    },
    {
      img: PocoDoDiabo,
      title: "Poço do diabo",
      description:
        "Mergulhe na aventura do Poço do Diabo, com suas águas escuras e fortes corredeiras, rodeado por formações rochosas impressionantes e cenários selvagens da Chapada Diamantina.",
      href: "/locais/CachoeiraMosquitoPoco"
    },
    {
      img: Sossego,
      title: "Cachoeira do sossego",
      description:
        "Relaxe na tranquila Cachoeira do Sossego, um refúgio escondido na Chapada Diamantina, perfeito para momentos de paz e banho em águas frescas rodeadas pela natureza.",
      href: "/locais/CachoeiraSossegoRibeirao"
    },
    {
      img: RibeiraoDoMeio,
      title: "Ribeirão do meio",
      description:
        "Explore o Ribeirão do Meio, um paraíso natural com águas cristalinas, poços tranquilos e uma paisagem preservada que convida ao banho e à contemplação na Chapada Diamantina.",
      href: "/locais/CachoeiraSossegoRibeirao"
    },
    {
      img: Pantanal,
      title: "Mini pantanal",
      description:
        "Descubra o Mini Pantanal, um recanto único na Chapada Diamantina, onde lagoas, rios e vegetação exuberante criam um cenário perfeito para quem ama a natureza e a tranquilidade.",
      href: "/locais/PantanalRoncador"
    },
    {
      img: Roncador,
      title: "Cachoeira do roncador",
      description:
        "Encante-se com a Cachoeira do Roncador, onde águas cristalinas caem em meio a cânions, oferecendo um cenário selvagem e perfeito para quem busca aventura.",
      href: "/locais/PantanalRoncador"
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f6ee]">
      <div className="flex flex-col h-full">
        <div className="w-full bg-[#36322B] h-[128px]">
          <Navbar />
        </div>
        <div className="flex flex-col items-center justify-center text-center mt-20 mb-10 px-4">
          <h1 className="text-4xl sm:text-6xl lg:text-[88px] font-bold text-[#322F30] leading-tight">
            Escolha a sua aventura
          </h1>

          <div className="flex flex-col items-center justify-center max-w-[1138px] w-full mt-12 sm:mt-20 sm:gap-16 gap-8">
            {destinos.map((dest, index) => (
              <div
                className="flex flex-col-reverse sm:flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start w-full"
                key={index}
              >

                <div className="flex flex-col items-center lg:items-start sm:h-[400px] justify-between gap-4 max-w-[463px] text-center lg:text-left">
                  <h3 className="text-[#322F30] text-3xl sm:text-4xl lg:text-5xl font-bold">
                    {dest.title}
                  </h3>
                  <p className="text-lg sm:text-xl lg:text-2xl text-[#888888]">
                    {dest.description}
                  </p>

                  <Link
                    className="bg-[#F2F1E0] h-[48px] sm:h-[50px] w-[200px] sm:w-[230px] sm:mt-6 mt-4 rounded-[100px] border-2 border-[#322F30] flex items-center justify-center gap-3 sm:gap-4 text-lg sm:text-[20px] text-black"
                    href={`${dest.href}`}
                  >
                    <span className="underline">Saiba mais</span>
                    <Image
                      src={Seta}
                      alt="Orçamento"
                      className="w-5 sm:w-6 lg:w-auto"
                    />
                  </Link>
                </div>

                <div className="w-full lg:w-[650px] flex justify-center">
                  <div className="w-full h-[220px] sm:h-[300px] lg:h-[400px] rounded-3xl overflow-hidden">
                    <Image
                      src={dest.img}
                      alt={dest.title}
                      width={650}
                      height={400}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                </div>
              </div>
            ))}
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
                className="bg-[#F2F1E0] h-[45px] sm:h-[65px] lg:h-[70px] w-[320px] sm:w-[350px] lg:w-[484px] mt-6 rounded-[100px] flex items-center justify-center gap-3 sm:gap-4 text-[14px] sm:text-xl lg:text-[28px] text-black"
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

            <div className="flex flex-col justify-end sm:mt-10 gap-6 sm:gap-10 w-full lg:w-auto">
              <p className="text-[#F7F7F7] text-lg sm:text-xl lg:text-[26px] text-center sm:text-start max-w-full sm:max-w-[400px]">
                Explore trilhas icônicas com roteiros personalizados, um guia
                local experiente e aventuras seguras em cada passo.
              </p>

              <div className="flex gap-3 sm:gap-4 h-[180px] sm:h-[220px] lg:ml-auto mb-2">
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
        <Dobra />
        <div className="w-full bg-[#36322B] pt-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}
