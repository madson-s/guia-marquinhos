import Link from "next/link";
import Grutas from "./../../public/imgs/grutas.png";
import ValeDoPati from "./../../public/imgs/vale-do-pati.png";
import Seta from "./../../public/imgs/seta-orcamento.svg";
import Image from "next/image";

export default function PontosInicias() {
  const pontos = [
    {
      title: "Vale do Pati 3 dias",
      description:
        "Considerado um dos trekkings mais bonitos do país, o Vale do Pati é uma travessia de vários dias por montanhas, cachoeiras e vilas escondidas. Roteiro completo com pernoites em casas de moradores locais e paisagens de tirar o fôlego.",
      image: ValeDoPati,
      href: "/locais/ValeDoPati3Dias",
    },
    {
      title: "Vale do Pati 5 dias",
      description:
        "Considerado um dos trekkings mais bonitos do país, o Vale do Pati é uma travessia de vários dias por montanhas, cachoeiras e vilas escondidas. Roteiro completo com pernoites em casas de moradores locais e paisagens de tirar o fôlego.",
      image: ValeDoPati,
      href: "/locais/ValeDoPati5Dias",
    },
    {
      title: "Grutas",
      description:
        "Explore os cartões-postais da Chapada Diamantina em um único roteiro. Visite a Gruta da Lapa Doce, as águas cristalinas da Pratinha e Gruta Azul, e finalize com a vista deslumbrante do Morro do Pai Inácio.",
      image: Grutas,
      href: "/locais/Grutas",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-20 px-4">
      {pontos.map((ponto, index) => (
        <div
          key={index}
          className={`flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20 w-full max-w-[1200px] ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="flex flex-col sm:items-start items-center justify-center max-w-[463px] gap-6 text-center lg:text-left">
            <h3 className="text-[#322F30] font-bold text-3xl sm:text-4xl lg:text-5xl">
              {ponto.title}
            </h3>
            <p className="text-[#888888] text-lg sm:text-xl lg:text-2xl font-normal">
              {ponto.description}
            </p>
            <Link
              className="bg-[#F2F1E0] h-[60px] w-[200px] sm:h-[70px] sm:w-[230px] mt-2 rounded-[100px] flex items-center justify-center gap-4 text-[15px] sm:text-lg lg:text-[20px] text-black border-2 border-[#322F30]"
              href={`${ponto.href}`}
            >
              <span className="underline">Saiba Mais</span>
              <Image src={Seta} alt="Orçamento" className="sm:w-auto w-8"/>
            </Link>
          </div>

          <Image
            src={ponto.image}
            alt={ponto.title}
            className="w-full max-w-[600px] h-[250px] sm:h-[350px] lg:h-[400px] object-cover rounded-3xl"
          />
        </div>
      ))}

      <Link
        className="bg-[#F2F1E0] h-[60px] w-full sm:w-[530px] mt-2 rounded-[100px] flex items-center justify-center gap-4 text-[15px] sm:text-2xl lg:text-[28px] text-black border-2 border-[#322F30]"
        href={"/aventuras"}
      >
        <span className="underline">Confira todos os destinos</span>
        <Image src={Seta} alt="Orçamento" className="sm:w-auto w-9"/>
      </Link>
    </div>
  );
}
