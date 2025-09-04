import EstrelaDobra from "./../../public/imgs/estrela-dobra.png";
import Image from "next/image";

export default function Dobra() {
  return (
    <div className="h-[63px] w-full bg-[#FFC737] flex items-center overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        <Content />
        <Content />
        <Content />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="flex items-center gap-4 text-black uppercase font-normal text-2xl  mx-8">
      <Image src={EstrelaDobra} alt="Estrela" className="w-4 h-4" />
      <span>Trilhas que marcam</span>
      <span>•</span>
      <span>Viva a Chapada Diamantina</span>
      <span>•</span>
      <span>Experiencie o Vale do Pati</span>
      <span>•</span>
    </div>
  );
}
