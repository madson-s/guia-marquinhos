import Image from "next/image";
import Button from "./Button";

export default function PontosInicias() {
  return (
    <div className="flex flex-col items-center justify-center gap-20 px-4">
      {/* Vale do Pati 3 dias */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20 w-full max-w-[1200px]">
        <div className="flex flex-col sm:items-start items-center justify-center max-w-[463px] gap-6 text-center lg:text-left">
          <h3 className="text-[#322F30] font-bold text-3xl sm:text-4xl lg:text-5xl">
            Vale do Pati 3 dias
          </h3>
          <p className="text-[#888888] text-lg sm:text-xl lg:text-2xl font-normal">
            Considerado um dos trekkings mais bonitos do país, o Vale do Pati é uma travessia de vários dias por montanhas, cachoeiras e vilas escondidas. Roteiro completo com pernoites em casas de moradores locais e paisagens de tirar o fôlego.
          </p>
          <Button
            href="/aventuras/vale-do-pati-3-dias"
            variant="secondary"
            size="sm"
            className="mt-2 w-[200px] sm:w-[230px] h-[60px] sm:h-[70px] text-[15px] sm:text-lg lg:text-[20px]"
          >
            Saiba Mais
          </Button>
        </div>
        <Image
          src="/images/adventure_01.webp"
          alt="Vale do Pati 3 dias"
          width={600}
          height={400}
          className="w-full max-w-[600px] h-[250px] sm:h-[350px] lg:h-[400px] object-cover rounded-3xl"
          loading="lazy"
        />
      </div>

      {/* Vale do Pati 5 dias */}
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-10 lg:gap-20 w-full max-w-[1200px]">
        <div className="flex flex-col sm:items-start items-center justify-center max-w-[463px] gap-6 text-center lg:text-left">
          <h3 className="text-[#322F30] font-bold text-3xl sm:text-4xl lg:text-5xl">
            Vale do Pati 5 dias
          </h3>
          <p className="text-[#888888] text-lg sm:text-xl lg:text-2xl font-normal">
            Considerado um dos trekkings mais bonitos do país, o Vale do Pati é uma travessia de vários dias por montanhas, cachoeiras e vilas escondidas. Roteiro completo com pernoites em casas de moradores locais e paisagens de tirar o fôlego.
          </p>
          <Button
            href="/aventuras/vale-do-pati-5-dias"
            variant="secondary"
            size="sm"
            className="mt-2 w-[200px] sm:w-[230px] h-[60px] sm:h-[70px] text-[15px] sm:text-lg lg:text-[20px]"
          >
            Saiba Mais
          </Button>
        </div>
        <Image
          src="/images/adventure_02.webp"
          alt="Vale do Pati 5 dias"
          width={600}
          height={400}
          className="w-full max-w-[600px] h-[250px] sm:h-[350px] lg:h-[400px] object-cover rounded-3xl"
          loading="lazy"
        />
      </div>

      {/* Grutas */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20 w-full max-w-[1200px]">
        <div className="flex flex-col sm:items-start items-center justify-center max-w-[463px] gap-6 text-center lg:text-left">
          <h3 className="text-[#322F30] font-bold text-3xl sm:text-4xl lg:text-5xl">
            Grutas
          </h3>
          <p className="text-[#888888] text-lg sm:text-xl lg:text-2xl font-normal">
            Explore os cartões-postais da Chapada Diamantina em um único roteiro. Visite a Gruta da Lapa Doce, as águas cristalinas da Pratinha e Gruta Azul, e finalize com a vista deslumbrante do Morro do Pai Inácio.
          </p>
          <Button
            href="/aventuras/grutas"
            variant="secondary"
            size="sm"
            className="mt-2 w-[200px] sm:w-[230px] h-[60px] sm:h-[70px] text-[15px] sm:text-lg lg:text-[20px]"
          >
            Saiba Mais
          </Button>
        </div>
        <Image
          src="/images/adventure_03.webp"
          alt="Grutas"
          width={600}
          height={400}
          className="w-full max-w-[600px] h-[250px] sm:h-[350px] lg:h-[400px] object-cover rounded-3xl"
          loading="lazy"
        />
      </div>

      <Button
        href="/aventuras"
        variant="secondary"
        size="lg"
        className="mt-2 w-full sm:w-[530px] h-[60px] text-[15px] sm:text-2xl lg:text-[28px]"
      >
        Confira todos os destinos
      </Button>
    </div>
  );
}
