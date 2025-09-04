"use client";

import { useState } from "react";
import logo from "./../../public/imgs/logo.svg";
import Insta from "./../../public/imgs/insta-logo.svg";
import Gmail from "./../../public/imgs/gmail-logo.svg";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-20 h-[128px] absolute top-0 left-0 z-50 bg-transparent">
      <Link href="/">
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
          <Link href="/#orcamento" className="hover:underline">
            Orçamento
          </Link>
        </div>

        <div className="flex items-center gap-4 ms-10">
          <a href="https://instagram.com/guiamarquinhos" target="_blank" rel="noreferrer">
            <Image src={Insta} alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="mailto:contato@guiamarquinhos.com">
            <Image src={Gmail} alt="Gmail" className="w-6 h-6" />
          </a>
        </div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white"
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {isOpen && (
        <div className="absolute top-[96px] left-0 w-full bg-[#36322B] flex flex-col items-center gap-6 py-8 text-white font-medium md:hidden">
          <a
            href="#sobre"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Sobre mim
          </a>
          <a
            href="#avaliacoes"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Avaliações
          </a>
          <a
            href="#destinos"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Destinos
          </a>
          <a
            href="#orcamento"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Orçamento
          </a>

          <div className="flex items-center gap-6 mt-4">
            <a
              href="https://instagram.com/guiamarquinhos"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={Insta} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="mailto:contato@guiamarquinhos.com">
              <Image src={Gmail} alt="Gmail" className="w-6 h-6" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
