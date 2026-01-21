import Image from "next/image";
import logo from "./../../public/imgs/logo.svg";
import Insta from "./../../public/icons/instagram.svg";
import Gmail from "./../../public/icons/mail.svg";
import Whatsapp from "./../../public/icons/whatsapp.svg";
import PhoneIcon from "./../../public/icons/location.svg";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/constants";
import { trackWhatsAppClick, trackInstagramClick } from "@/hooks/useGTMEvents";

export default function Footer() {
  return (
    <footer className="bg-[#36322B] flex flex-col justify-center gap-10 py-10 px-6 max-w-[1138px] w-full mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
        {/* Logo e descrição */}
        <div className="flex flex-col items-center lg:items-start gap-4 lg:max-w-[300px]">
          <Image
            src={logo}
            alt="Logo Guia Marquinhos"
            className="w-[180px]"
          />
          <p className="text-white text-base leading-relaxed text-center lg:text-left max-w-[400px]">
            Curta cada momento com quem leva sua experiência a sério.
          </p>
        </div>

        {/* Menu, Destinos e Contatos em colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 flex-1">
          {/* Menu */}
          <div className="text-center lg:text-left">
            <h4 className="text-white font-bold text-[24px] mb-4">Menu</h4>
            <ul className="flex flex-col space-y-3 text-white text-base">
              <li>
                <Link href="/#sobre" className="block w-full sm:inline border border-white rounded-full px-6 py-3 sm:border-0 sm:px-0 sm:py-0 sm:rounded-none text-center lg:text-left hover:text-white/80 transition">
                  Sobre mim
                </Link>
              </li>
              <li>
                <Link href="/#avaliacoes" className="block w-full sm:inline border border-white rounded-full px-6 py-3 sm:border-0 sm:px-0 sm:py-0 sm:rounded-none text-center lg:text-left hover:text-white/80 transition">
                  Experiencias reais
                </Link>
              </li>
              <li>
                <Link href="/#destinos" className="block w-full sm:inline border border-white rounded-full px-6 py-3 sm:border-0 sm:px-0 sm:py-0 sm:rounded-none text-center lg:text-left hover:text-white/80 transition">
                  Nossos destinos
                </Link>
              </li>
              <li>
                <Link href="/roteiro-personalizado" className="block w-full sm:inline border border-white rounded-full px-6 py-3 sm:border-0 sm:px-0 sm:py-0 sm:rounded-none text-center lg:text-left hover:text-white/80 transition">
                  Adquira seu roteiro personalizado
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinos */}
          <div className="text-center lg:text-left">
            <h4 className="text-white font-bold text-[24px] mb-4">Destinos</h4>
            <ul className="flex flex-col space-y-3 text-white text-base">
              <li>
                <Link href="/aventuras/vale-do-pati-5-dias" className="block w-full sm:inline border border-white rounded-full px-6 py-3 sm:border-0 sm:px-0 sm:py-0 sm:rounded-none text-center lg:text-left hover:text-white/80 transition">
                  Vale do Pati
                </Link>
              </li>
              <li>
                <Link href="/aventuras/cachoeira-fumaca-riachinho" className="block w-full sm:inline border border-white rounded-full px-6 py-3 sm:border-0 sm:px-0 sm:py-0 sm:rounded-none text-center lg:text-left hover:text-white/80 transition">
                  Cachoeira da Fumaça
                </Link>
              </li>
              <li>
                <Link href="/aventuras/grutas" className="block w-full sm:inline border border-white rounded-full px-6 py-3 sm:border-0 sm:px-0 sm:py-0 sm:rounded-none text-center lg:text-left hover:text-white/80 transition">
                  Grutas
                </Link>
              </li>
              <li>
                <Link href="/aventuras/pantanal-roncador" className="block w-full sm:inline border border-white rounded-full px-6 py-3 sm:border-0 sm:px-0 sm:py-0 sm:rounded-none text-center lg:text-left hover:text-white/80 transition">
                  Pantanal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contatos */}
          <div className="text-center lg:text-left">
            <h4 className="text-white font-bold text-[24px] mb-4">Contatos</h4>
            {/* Ícones apenas no mobile */}
            <div className="flex items-center justify-center gap-4 sm:hidden">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition"
                aria-label="WhatsApp"
                onClick={() => trackWhatsAppClick("footer")}
              >
                <Image src={Whatsapp} alt="WhatsApp" className="w-6 h-6" />
              </a>
              <a
                href="mailto:contato@guiamarquinhos.com"
                className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition"
                aria-label="E-Mail"
              >
                <Image src={Gmail} alt="E-Mail" className="w-6 h-6" />
              </a>
              <a
                href="tel:+5575998859612"
                className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition"
                aria-label="Telefone"
              >
                <Image src={PhoneIcon} alt="Telefone" className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/chapadadiamantinaguiamarcos"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition"
                aria-label="Instagram"
                onClick={() => trackInstagramClick("footer")}
              >
                <Image src={Insta} alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
            {/* Texto no tablet e desktop */}
            <ul className="hidden sm:flex flex-col space-y-3 text-white text-base">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white/80 transition"
                  onClick={() => trackWhatsAppClick("footer")}
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/chapadadiamantinaguiamarcos"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white/80 transition"
                  onClick={() => trackInstagramClick("footer")}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="tel:+5575998859612"
                  className="hover:text-white/80 transition"
                >
                  Telefone
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@guiamarquinhos.com"
                  className="hover:text-white/80 transition"
                >
                  E-mail
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/30 w-full"></div>

      <div className="flex flex-col items-center gap-2 text-center text-white/70 text-base">
        <p>©2025 Guia Marquinhos | Todos os direitos reservados</p>
        <p>
          Design by <span className="font-bold">IC4RUS.CO</span>
        </p>
      </div>
    </footer>
  );
}
