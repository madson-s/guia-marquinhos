"use client";

import { useState } from "react";
import logo from "./../../public/imgs/logo.svg";
import Insta from "./../../public/icons/instagram.svg";
import Gmail from "./../../public/icons/mail.svg";
import Whatsapp from "./../../public/icons/whatsapp.svg";
import Local from "./../../public/icons/location.svg";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/constants";
import { trackWhatsAppClick, trackInstagramClick } from "@/hooks/useGTMEvents";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-center h-[100px] md:h-[128px] absolute top-0 left-0 z-50 bg-transparent">
      <div className="max-w-[1138px] w-full flex items-center justify-between px-6">
      <Link href="/" className="relative z-[60]">
        <Image src={logo} alt="Logo" className="w-auto h-10" />
      </Link>

      <div className="hidden md:flex items-center gap-10 text-white font-medium">
        <div className="flex items-center gap-12 text-[18px]">
          <Link href="/#sobre" className="hover:underline">
            Sobre mim
          </Link>
          <Link href="/#avaliacoes" className="hover:underline">
            Avaliações
          </Link>
          <Link href="/#destinos" className="hover:underline">
            Destinos
          </Link>
          <Link href="/roteiro-personalizado" className="hover:underline">
            Orçamento
          </Link>
        </div>

        <div className="flex items-center gap-4 ms-10">
          <a 
            href="https://instagram.com/chapadadiamantinaguiamarcos" 
            target="_blank" 
            rel="noreferrer"
            onClick={() => trackInstagramClick("navbar_desktop")}
          >
            <Image src={Insta} alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="mailto:contato@guiamarquinhos.com">
            <Image src={Gmail} alt="Gmail" className="w-6 h-6" />
          </a>
        </div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white relative z-[60]"
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      <div
        className={`absolute top-0 left-0 w-full bg-[#36322B] flex flex-col items-center gap-4 pt-[100px] pb-8 px-6 text-white font-medium md:hidden overflow-hidden transition-all duration-500 ease-out z-40 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 w-full pt-8">
          <Link
            href="/#sobre"
            className="w-full px-6 py-4 rounded-full border border-white/30 bg-transparent text-center hover:bg-white/10 transition"
            onClick={() => setIsOpen(false)}
          >
            Sobre mim
          </Link>
        <Link
          href="/#avaliacoes"
          className="w-full px-6 py-4 rounded-full border border-white/30 bg-transparent text-center hover:bg-white/10 transition"
          onClick={() => setIsOpen(false)}
        >
          Experiencias reais
        </Link>
        <Link
          href="/#destinos"
          className="w-full px-6 py-4 rounded-full border border-white/30 bg-transparent text-center hover:bg-white/10 transition"
          onClick={() => setIsOpen(false)}
        >
          Nossos destinos
        </Link>
          <Link
            href="/roteiro-personalizado"
            className="w-full px-6 py-4 rounded-full border border-white/30 bg-transparent text-center hover:bg-white/10 transition"
            onClick={() => setIsOpen(false)}
          >
            Adquira seu roteiro personalizado
          </Link>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Link
            href="/#orcamento"
            className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition"
            onClick={() => setIsOpen(false)}
            aria-label="Localização"
          >
            <Image src={Local} alt="Localização" className="w-6 h-6" />
          </Link>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition"
            onClick={() => {
              setIsOpen(false);
              trackWhatsAppClick("navbar_mobile");
            }}
            aria-label="WhatsApp"
          >
            <Image src={Whatsapp} alt="WhatsApp" className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/chapadadiamantinaguiamarcos"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition"
            onClick={() => {
              setIsOpen(false);
              trackInstagramClick("navbar_mobile");
            }}
            aria-label="Instagram"
          >
            <Image src={Insta} alt="Instagram" className="w-6 h-6" />
          </a>
          <a
            href="mailto:contato@guiamarquinhos.com"
            className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition"
            onClick={() => setIsOpen(false)}
            aria-label="E-Mail"
          >
            <Image src={Gmail} alt="E-Mail" className="w-6 h-6" />
          </a>
        </div>
      </div>
      </div>
    </nav>
  );
}
