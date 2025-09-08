import Navbar from "@/components/Navbar";
import Montain from "./../../../public/imgs/mountain-hard.png";
import Escalando from "./../../../public/imgs/escalando.png";
import Pati1 from "./../../../public/imgs/pati1.png";
import Pati2 from "./../../../public/imgs/pati2.png";
import Pati3 from "./../../../public/imgs/pati3.png";
import Pati4 from "./../../../public/imgs/pati4.png";
import Pati5 from "./../../../public/imgs/pati5.png";
import Seta from "./../../../public/imgs/seta-orcamento.svg";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ValeDoPati3Dias() {
  const dias = [
    {
      dia: "1º dia de trekking",
      text: "Subida do Aleixo, gerais do rio preto, mirante da rampa e pernoite.",
      km: "8 km",
    },
    {
      dia: "2º dia de trekking",
      text: "Gruta da lapinha, mirante do morro do castelo, cachoeira das bananeiras, cachoeira do funil, cachoeira das lajes e pernoite.",
      km: "12 km",
    },
    {
      dia: "3º dia de trekking",
      text: "Mirante do cachoeirão e saída do Vale do Pati.",
      km: "18 km",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f6ee]">
      <div className="flex flex-col h-full">

        <div className="w-full bg-[#36322B] h-[128px]">
          <Navbar />
        </div>

        <div className="flex flex-col items-center justify-center text-center mt-12 sm:mt-20 px-4 gap-6">
          <h1 className="text-4xl sm:text-6xl lg:text-[88px] font-bold text-[#322F30] leading-tight">
            Vale do Pati em 3 dias
          </h1>
          <p className="text-lg sm:text-2xl lg:text-[28px] text-[#888888]">
            A trilha mais bonita do Brasil, com paisagens surreais e trilhas
            encantadoras.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4">
            <div className="px-6 h-[61px] rounded-[100px] bg-[#FFC737] text-lg sm:text-[22px] text-[#322F30] flex items-center justify-center gap-3">
              <Image src={Montain} alt="Montain" /> Difícil
            </div>
            <div className="px-6 h-[61px] rounded-[100px] bg-[#FFC737] text-lg sm:text-[22px] text-[#322F30] flex items-center justify-center gap-3">
              <Image src={Escalando} alt="Escalando" /> 38 km
            </div>
          </div>

          <div className="max-w-[1143px] w-full flex flex-col items-center justify-center gap-6 my-10">
            <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between w-full gap-8">
              <div className="text-[#4F4A4C] text-base sm:text-lg lg:text-[26px] leading-relaxed max-w-[600px] text-center lg:text-left">
                <p>
                  O Vale do Pati é considerado como o segundo trekking mais
                  lindo do mundo e mais procurado do Brasil, um trekking de
                  muita imersão e conexão com a natureza. Saindo de Lençóis em
                  direção à Vila do Guiné, ponto de partida do trekking mais
                  lindo do Brasil.
                </p>
                <p className="py-3 underline">
                  O Pati é um trekking que o visitante deve ter um preparo maior
                  ou pelo menos praticar alguma atividade física, não só pela
                  trilha mas porque levamos o mínimo de peso possível.
                </p>
                <p className="py-3">
                  Na trilha temos bastante subidas e descidas, mas como é um
                  passeio de contemplação e conexão com a natureza, fazemos
                  paradas para fotos, lanches e muita contemplação.{" "}
                  <span className="underline">
                    Vale ressaltar que cada um tem o seu ritmo.
                  </span>
                </p>
              </div>
              <div className="w-full flex flex-col gap-6">
                <Image
                  src={Pati1}
                  alt="Pati1"
                  className="w-full h-auto rounded-[42px]"
                />
                <Image
                  src={Pati2}
                  alt="Pati2"
                  className="w-full h-auto rounded-[42px]"
                />
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 w-full">
              {dias.map((dia, index) => (
                <div
                  key={index}
                  className="bg-[#e8e8de] flex-1 min-w-[280px] max-w-[367px] min-h-[400px] rounded-[40px] flex flex-col items-start justify-start gap-6 p-8 shadow-2xl"
                >
                  <h3 className="text-[#322F30] text-2xl sm:text-[32px] font-bold">
                    {dia.dia}
                  </h3>
                  <div className="px-6 h-[61px] rounded-[100px] bg-[#FFC737] text-lg sm:text-[22px] text-[#322F30] flex items-center justify-center gap-3">
                    <Image src={Escalando} alt="Escalando" /> {dia.km}
                  </div>
                  <p className="text-start text-[#888888] text-lg sm:text-[22px]">
                    {dia.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-6 mt-10 w-full">
              {[Pati3, Pati4, Pati5].map((img, i) => (
                <div
                  key={i}
                  className="flex-1 min-w-[250px] aspect-[16/10] rounded-[42px] overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={`Pati${i + 3}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
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

        {/* Footer */}
        <div className="w-full bg-[#36322B]">
          <Footer />
        </div>
      </div>
    </div>
  );
}
