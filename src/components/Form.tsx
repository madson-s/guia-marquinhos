import Whatsapp from "./../../public/imgs/whatsapp.png";
import Local from "./../../public/imgs/local.png";
import Insta from "./../../public/imgs/insta-guia.png";
import Gmail from "./../../public/imgs/contato-gmail.png";
import Seta from "./../../public/imgs/seta-orcamento.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Form() {
  const iconesContato = [
    { src: Local, alt: "Rua José Florêncio, 230 - Lençóis / BA" },
    { src: Whatsapp, alt: "75 9 9999-0090" },
    { src: Insta, alt: "@guiamarquinhos" },
    { src: Gmail, alt: "contato@guiamarquinhos.com" },
  ];

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ nome, email, celular });
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-12 w-full max-w-[1138px] gap-10">
      <div className="flex-col flex items-start justify-center gap-4 w-full md:w-1/2">
        {iconesContato.map((icone, index) => (
          <div key={index} className="flex items-center gap-5">
            <div className="w-12 h-12 bg-[#F2F1E0] rounded-full flex items-center justify-center">
              <Image src={icone.src} alt={icone.alt} />
            </div>
            <span className="text-[18px] md:text-[20px] text-[#322F30] break-words">
              {icone.alt}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 w-full md:w-1/2 max-w-[380px]">
        <div className="flex flex-col text-[#322F30]">
          <label
            htmlFor="nome"
            className="text-[18px] md:text-[20px] font-normal"
          >
            Nome Completo
          </label>
          <input
            type="text"
            id="nome"
            placeholder="Seu nome completo"
            className="mt-1 px-4 py-2 border-2 border-[#322F30] rounded-full text-[#322F30]"
          />
        </div>

        <div className="flex flex-col text-[#322F30]">
          <label
            htmlFor="email"
            className="text-[18px] md:text-[20px] font-normal"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            placeholder="seu_melhor@email.com"
            className="mt-1 px-4 py-2 border-2 border-[#322F30] rounded-full text-[#322F30]"
          />
        </div>

        <div className="flex flex-col text-[#322F30]">
          <label
            htmlFor="celular"
            className="text-[18px] md:text-[20px] font-normal"
          >
            Celular
          </label>
          <input
            type="tel"
            id="celular"
            placeholder="(99) 9 9999-9999"
            className="mt-1 px-4 py-2 border-2 border-[#322F30] rounded-full text-[#322F30]"
          />
        </div>

        <Link
          className="bg-[#F2F1E0] h-[42px] w-[173px] mt-6 rounded-[100px] flex items-center justify-center gap-4 text-[18px] md:text-[20px] text-black border-2 border-[#322F30] self-center md:self-start"
          href={"/orcamento"}
        >
          <span className="underline">Enviar</span>
          <Image src={Seta} alt="Orçamento" className="w-8 sm:w-6 lg:w-auto" />
        </Link>
      </div>
    </div>
  );
}
