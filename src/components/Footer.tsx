import Image from "next/image";
import logo from "./../../public/imgs/logo.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#36322B] flex flex-col justify-center gap-10 py-10 px-6 max-w-[1138px] w-full mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start  gap-10">
        <div className="max-w-[300px] text-center md:text-left mx-auto md:mx-0">
          <Image
            src={logo}
            alt="Logo Guia Marquinhos"
            className="w-[180px] mb-4 mx-auto md:mx-0"
          />
          <p className="text-white/80 text-base leading-relaxed">
            Curta cada momento com quem leva sua experiência a sério.
          </p>
        </div>
        <div className="text-center md:text-left">
          <h4 className="text-white font-bold text-[20px] mb-3">Menu</h4>
          <ul className="space-y-2 text-white/80 text-base">
            <li>
              <Link href="/#sobre">Sobre mim</Link>
            </li>
            <li>
              <Link href="/#avaliacoes">Avaliações</Link>
            </li>
            <li>
              <Link href="/#destinos">Destinos</Link>
            </li>
            <li>
              <Link href="/#orcamento">Orçamento</Link>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h4 className="text-white font-bold text-[20px] mb-3">Contatos</h4>
          <ul className="space-y-2 text-white/80 text-base">
            <li>
              <a
                href="https://wa.me/5575998859612"
                target="_blank"
                rel="noreferrer"
              >
                Whatsapp
              </a>
            </li>
            <li>
              <a href="mailto:contato@guiamarquinhos.com">E-Mail</a>
            </li>
            <li>
              <a href="tel:+557599885-9612">Telefone</a>
            </li>
            <li>
              <a
                href="https://instagram.com/chapadadiamantinaguiamarcos"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h4 className="text-white font-bold text-[20px] mb-3">Destinos</h4>
          <ul className="space-y-2 text-white/80 text-base">
            <li>
              <Link href="/locais/ValeDoPati5Dias">Vale do Pati</Link>
            </li>
            <li>
              <Link href="/locais/CachoeiraFumacaRiachinho">Cachoeira da Fumaça</Link>
            </li>
            <li>
              <Link href="/locais/Grutas">Grutas</Link>
            </li>
            <li>
              <Link href="/locais/PantanalRoncador">Pantanal</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/30 w-full"></div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 max-w-[1138px] w-full mx-auto text-center md:text-left text-white/70 text-base">
        <p>©2025 Guia Marquinhos | Todos os direitos reservados</p>
        <p>
          Design by <span className="font-bold">IC4RUS.CO</span>
        </p>
      </div>
    </footer>
  );
}
