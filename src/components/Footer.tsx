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
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <Image
            src={logo}
            alt="Logo Guia Marquinhos"
            className="w-[180px]"
          />
          <p className="text-white text-base leading-relaxed text-center max-w-[400px]">
            Curta cada momento com quem leva sua experiência a sério.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 w-full">
          <div className="text-center w-full">
            <h4 className="text-white font-bold text-[24px] mb-4">Menu</h4>
            <ul className="flex flex-col sm:block space-y-3 text-white text-base w-full">
              <li className="w-full">
                <Link href="/#sobre" className="block w-full sm:inline border border-white rounded-full px-6 py-3 sm:border-0 sm:px-0 sm:py-0 sm:rounded-none text-center">
                  Sobre mim
                </Link>
              </li>
              <li className="w-full">
                <Link href="/#avaliacoes" className="block w-full sm:inline border border-white rounded-full px-6 py-3 sm:border-0 sm:px-0 sm:py-0 sm:rounded-none text-center">
                  Experiencias reais
                </Link>
              </li>
              <li className="w-full">
                <Link href="/#destinos" className="block w-full sm:inline border border-white rounded-full px-6 py-3 sm:border-0 sm:px-0 sm:py-0 sm:rounded-none text-center">
                  Nossos destinos
                </Link>
              </li>
              <li className="w-full">
                <Link href="/roteiro-personalizado" className="block w-full sm:inline border border-white rounded-full px-6 py-3 sm:border-0 sm:px-0 sm:py-0 sm:rounded-none text-center">
                  Adquira seu roteiro personalizado
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center w-full">
            <h4 className="text-white font-bold text-[24px] mb-4">Destinos</h4>
            <ul className="flex flex-col sm:block space-y-3 text-white text-base w-full">
              <li className="w-full">
                <Link href="/aventuras/vale-do-pati-5-dias" className="block w-full sm:inline border border-white rounded-full px-6 py-3 sm:border-0 sm:px-0 sm:py-0 sm:rounded-none text-center">
                  Vale do Pati
                </Link>
              </li>
              <li className="w-full">
                <Link href="/aventuras/cachoeira-fumaca-riachinho" className="block w-full sm:inline border border-white rounded-full px-6 py-3 sm:border-0 sm:px-0 sm:py-0 sm:rounded-none text-center">
                  Cachoeira da Fumaça
                </Link>
              </li>
              <li className="w-full">
                <Link href="/aventuras/grutas" className="block w-full sm:inline border border-white rounded-full px-6 py-3 sm:border-0 sm:px-0 sm:py-0 sm:rounded-none text-center">
                  Grutas
                </Link>
              </li>
              <li className="w-full">
                <Link href="/aventuras/pantanal-roncador" className="block w-full sm:inline border border-white rounded-full px-6 py-3 sm:border-0 sm:px-0 sm:py-0 sm:rounded-none text-center">
                  Pantanal
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center w-full">
            <h4 className="text-white font-bold text-[24px] mb-4">Contatos</h4>
            <div className="flex items-center justify-center gap-4">
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
