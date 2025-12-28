import React, { useState, useEffect } from "react";
import Image from "next/image";
import Aspas from "./../../public/imgs/aspas.png";
import Tripadvisor from "./../../public/imgs/tripadvisor.png";
import { pushGTMEvent } from "./GTM";

const testimonials = [
  {
    text: "O melhor da Chapada! Gente ele é maravilhoso, atencioso, respeitoso, conhece tuuuudo! Fora que é da brigada de lá! Super seguro e divertido!",
    author: "Barbara V.",
    rating: 4.9,
  },
  {
    text: "Uma experiência emocionante e inesquecível de aventura, superação, emoção e de uma beleza inigualável! Marcos Paulo é muito atencioso...",
    author: "Patrícia P.",
    rating: 4.9,
  },
  {
    text: "O melhor guia da Chapada! Marcos é um profissional incrível, Experiente, paciente, cuidadoso e divertido. Além de possuir um enorme conhecimento da chapada, o que...",
    author: "Mariana D.",
    rating: 4.9,
  },
  {
    text: "Incrível! Superou todas as expectativas e fez tudo com muito cuidado.",
    author: "Lucas M.",
    rating: 4.8,
  },
  {
    text: "Aventura e segurança! Recomendo muito para quem quer explorar com tranquilidade.",
    author: "Fernanda S.",
    rating: 5,
  },
  {
    text: "Experiência única e maravilhosa, com atenção aos detalhes e diversão garantida!",
    author: "Thiago R.",
    rating: 5,
  },
  {
    text: "Guia atencioso e experiente, tudo perfeito!",
    author: "Carla P.",
    rating: 4.9,
  },
  {
    text: "Diversão garantida! Cada detalhe pensado para a melhor experiência.",
    author: "Rafael T.",
    rating: 5,
  },
  {
    text: "Paisagens incríveis, passeio inesquecível!",
    author: "Juliana A.",
    rating: 5,
  },
  {
    text: "Profissionalismo e diversão, combinação perfeita!",
    author: "Bruno C.",
    rating: 5,
  },
  {
    text: "Superou expectativas, quero voltar!",
    author: "Ana L.",
    rating: 4.9,
  },
  {
    text: "Recomendo a todos que amam aventura e segurança!",
    author: "Marcos V.",
    rating: 5,
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  // Responsividade: ajusta quantidade de cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(1); // mobile
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2); // tablet
      } else {
        setCardsPerPage(3); // desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + cardsPerPage) % testimonials.length);
    pushGTMEvent("carousel_interaction", {
      action: "next",
      current_index: (currentIndex + cardsPerPage) % testimonials.length,
    });
  };

  const prev = () => {
    const newIndex = (currentIndex - cardsPerPage + testimonials.length) % testimonials.length;
    setCurrentIndex(newIndex);
    pushGTMEvent("carousel_interaction", {
      action: "prev",
      current_index: newIndex,
    });
  };

  const visibleTestimonials = [];
  for (let i = 0; i < cardsPerPage; i++) {
    visibleTestimonials.push(
      testimonials[(currentIndex + i) % testimonials.length]
    );
  }

  return (
    <div
      className="w-full max-h-[490px] !h-full relative flex flex-col items-center justify-center px-4 py-10 sm:py-14"
      id="avaliacoes"
    >
      <Image
        src="/images/testimonials_background.webp"
        alt="Background"
        fill
        className="object-cover"
        loading="lazy"
        priority={false}
      />
      <h2 className="relative text-white text-[32px] sm:text-[42px] lg:text-[56px] font-bold mb-6 sm:mb-8 text-center z-10">
        Experiências reais
      </h2>

      <div className="relative w-full max-w-6xl flex items-center justify-center z-10">
        {/* Botão Prev */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-0 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition cursor-pointer z-10"
        >
          ‹
        </button>

        {/* Cards */}
        <div className="flex space-x-4 sm:space-x-6 overflow-hidden px-6 sm:px-0">
          {visibleTestimonials.map((t, index) => (
            <div
              key={index}
              className="min-w-[260px] sm:min-w-[280px] max-w-[300px] bg-white rounded-2xl p-5 sm:p-6 shadow-lg relative flex flex-col justify-between"
            >
              <Image src={Aspas} alt="Aspas" className="w-10 h-10 sm:w-14 sm:h-14 mb-4" />

              <p className="text-gray-800 mb-2 text-[14px] sm:text-[16px] text-start">
                <span className="font-bold">{t.text.split("!")[0]}!</span>
                <br />
                <span>{t.text.substring(t.text.indexOf("!") + 1)}</span>
              </p>

              <div className="flex items-center mt-auto">
                <Image
                  src={Tripadvisor}
                  alt="Tripadvisor"
                  className="w-10 h-10 sm:w-14 sm:h-14 mr-2"
                />
                <div className="flex flex-col items-start">
                  <span className="font-bold text-gray-900 text-sm sm:text-base">
                    {t.author}
                  </span>
                  <div className="flex space-x-1 items-center">
                    <p className="text-[#333333] mr-2 text-xs sm:text-sm">
                      {t.rating}
                    </p>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${
                          i < Math.round(t.rating)
                            ? "bg-[#00852F]"
                            : "bg-gray-300"
                        }`}
                      ></span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão Next */}
        <button
          onClick={next}
          className="absolute right-2 sm:right-0 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition cursor-pointer z-10"
        >
          ›
        </button>
      </div>

      {/* Indicadores */}
      <div className="relative flex mt-6 space-x-2 z-10">
        {Array.from({
          length: Math.ceil(testimonials.length / cardsPerPage),
        }).map((_, index) => (
          <span
            key={index}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${
              index === Math.floor(currentIndex / cardsPerPage)
                ? "bg-white"
                : "bg-white/50"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
