import Navbar from "@/components/Navbar";
import ValeDoPati from "./../../public/imgs/vale-do-pati.png";
import Grutas from "./../../public/imgs/gruta-da-lapa-doce-att.jpeg";
import PocoAzul from "./../../public/imgs/poco-azul.png";
import CachoeiraFumaca from "./../../public/imgs/cachoeira-da-fumaca-att.jpeg";
import Riachinho from "./../../public/imgs/riachinho.png";
import Mosquito from "./../../public/imgs/mosquito.png";
import PocoDoDiabo from "./../../public/imgs/poco-do-diabo-att.jpeg";
import Sossego from "./../../public/imgs/sossego.png";
import RibeiraoDoMeio from "./../../public/imgs/ribeirao-do-meio.png";
import Pantanal from "./../../public/imgs/pantanal.png";
import Roncador from "./../../public/imgs/cachoeira-do-roncador-att.jpeg";
import Button from "@/components/Button";
import BgTrilha from "./../../public/imgs/bg-trilha.png";
import Bg1Descubra from "./../../public/imgs/bg-1-descubra.png";
import Bg2Descubra from "./../../public/imgs/bg-2-descubra.png";
import Image from "next/image";
import Link from "next/link";
import Dobra from "@/components/Dobra";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { OrganizationSchema, BreadcrumbListSchema } from "@/components/Schema";
export default function Aventuras() {
  const destinos = [
    {
      img: ValeDoPati,
      title: "Vale do Pati 3 dias",
      description:
        "Considerado um dos trekkings mais bonitos do país, o Vale do Pati é uma travessia de vários dias por montanhas, cachoeiras e vilas escondidas. Roteiro completo com pernoites em casas de moradores locais e paisagens de tirar o fôlego.",
      href: "/aventuras/vale-do-pati-3-dias",
    },
    {
      img: ValeDoPati,
      title: "Vale do Pati 5 dias",
      description:
        "Considerado um dos trekkings mais bonitos do país, o Vale do Pati é uma travessia de vários dias por montanhas, cachoeiras e vilas escondidas. Roteiro completo com pernoites em casas de moradores locais e paisagens de tirar o fôlego.",
      href: "/aventuras/vale-do-pati-5-dias",
    },
    {
      img: Grutas,
      title: "Grutas",
      description:
        "Trilhas que revelam as maravilhas da Chapada Diamantina, passando pela imensa Gruta da Lapa Doce, as águas cristalinas da Pratinha, o encanto da Gruta Azul e o visual inesquecível do Morro do Pai Inácio.",
      href: "/aventuras/grutas",
    },
    {
      img: PocoAzul,
      title: "Poço encantado e Poço azul",
      description:
        "Poço Encantado e Poço Azul revelam águas cristalinas em tons de azul surreal, grutas impressionantes e um espetáculo de luz único na Chapada Diamantina.",
      href: "/aventuras/poco-azul-encantado"
    },
    {
      img: CachoeiraFumaca,
      title: "Cachoeira da fumaça",
      description:
        "Descubra a imponente Cachoeira da Fumaça, com quase 400 metros de altura e um visual de tirar o fôlego, cercada pela natureza exuberante. ",
      href: "/aventuras/cachoeira-fumaca-riachinho"
    },
    {
      img: Riachinho,
      title: "Cachoeira do Riachinho",
      description:
        "Relaxe na Cachoeira do Riachinho, com quedas d’água suaves e poços perfeitos para um banho refrescante em meio à natureza.",
      href: "/aventuras/cachoeira-fumaca-riachinho"
    },
    {
      img: Mosquito,
      title: "Cachoeira do mosquito",
      description:
        "Viva a experiência da Cachoeira do Mosquito, uma queda d’água imponente cercada por paredões rochosos e vegetação exuberante, perfeita para um banho revigorante ",
      href: "/aventuras/cachoeira-mosquito-poco"
    },
    {
      img: PocoDoDiabo,
      title: "Poço do diabo",
      description:
        "Mergulhe na aventura do Poço do Diabo, com suas águas escuras e fortes corredeiras, rodeado por formações rochosas impressionantes e cenários selvagens da Chapada Diamantina.",
      href: "/aventuras/cachoeira-mosquito-poco"
    },
    {
      img: Sossego,
      title: "Cachoeira do sossego",
      description:
        "Relaxe na tranquila Cachoeira do Sossego, um refúgio escondido na Chapada Diamantina, perfeito para momentos de paz e banho em águas frescas rodeadas pela natureza.",
      href: "/aventuras/cachoeira-sossego-ribeirao"
    },
    {
      img: RibeiraoDoMeio,
      title: "Ribeirão do meio",
      description:
        "Explore o Ribeirão do Meio, um paraíso natural com águas cristalinas, poços tranquilos e uma paisagem preservada que convida ao banho e à contemplação na Chapada Diamantina.",
      href: "/aventuras/cachoeira-sossego-ribeirao"
    },
    {
      img: Pantanal,
      title: "Mini pantanal",
      description:
        "Descubra o Mini Pantanal, um recanto único na Chapada Diamantina, onde lagoas, rios e vegetação exuberante criam um cenário perfeito para quem ama a natureza e a tranquilidade.",
      href: "/aventuras/pantanal-roncador"
    },
    {
      img: Roncador,
      title: "Cachoeira do roncador",
      description:
        "Encante-se com a Cachoeira do Roncador, onde águas cristalinas caem em meio a cânions, oferecendo um cenário selvagem e perfeito para quem busca aventura.",
      href: "/aventuras/pantanal-roncador"
    },
  ];

  return (
    <>
      <SEO
        title="Aventuras na Chapada Diamantina | Guia Marquinhos"
        description="Descubra todas as aventuras disponíveis na Chapada Diamantina: Vale do Pati, cachoeiras, grutas e muito mais. Escolha sua próxima experiência com guia experiente há mais de 19 anos!"
        url="/aventuras"
        image="/images/adventure_01.webp"
        keywords="Chapada Diamantina aventuras, Vale do Pati, cachoeiras Chapada, grutas Lençóis, trekking Bahia, ecoturismo, guia turístico Chapada Diamantina, trilhas guiadas"
      />
      <OrganizationSchema />
      <BreadcrumbListSchema
        items={[
          { name: "Início", url: "https://guiamarquinhos.com" },
          { name: "Aventuras", url: "https://guiamarquinhos.com/aventuras" },
        ]}
      />
      <div className="min-h-screen bg-[#f6f6ee]">
        <div className="flex flex-col h-full">
          <div className="w-full bg-[#36322B] h-[128px]">
            <Navbar />
          </div>
          <div className="flex flex-col items-center justify-center text-center mt-20 mb-10 px-4">
            <h1 className="text-4xl sm:text-6xl lg:text-[88px] font-bold text-[#322F30] leading-tight">
              Escolha a sua aventura
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-[1200px] mt-12 sm:mt-20">
            {destinos.map((dest, index) => (
              <Link
                href={dest.href}
                key={index}
                className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[350px] p-4 sm:p-6">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden">
                    <Image
                      src={dest.img}
                      alt={dest.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-3xl"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 p-6">
                  <h3 className="text-[#322F30] font-bold text-2xl sm:text-3xl lg:text-4xl">
                    {dest.title}
                  </h3>
                  <p className="text-[#888888] text-base sm:text-lg lg:text-xl font-normal line-clamp-3">
                    {dest.description}
                  </p>
                </div>
              </Link>
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

              <Button
                href="/roteiro-personalizado"
                variant="primary"
                size="md"
                className="mt-6 w-[320px] sm:w-[350px] lg:w-[484px]"
              >
                Monte seu roteiro ideal
              </Button>
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
    </>
  );
}
