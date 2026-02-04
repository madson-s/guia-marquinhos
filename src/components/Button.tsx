import Link from "next/link";
import Image from "next/image";
import Seta from "./../../public/imgs/seta-orcamento.svg";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "with-border";
  size?: "sm" | "md" | "lg";
  className?: string;
  showArrow?: boolean;
  as?: "link" | "button";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "lg",
  className = "",
  showArrow = true,
  as = "link",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const sizeClasses = {
    sm: "h-[45px] sm:h-[50px] text-base sm:text-lg",
    md: "h-[50px] sm:h-[65px] lg:h-[70px] text-base sm:text-xl lg:text-[28px]",
    lg: "h-[54px] text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px]",
  };

  const widthClasses = {
    sm: "w-[200px] sm:w-[230px]",
    md: "w-[260px] sm:w-[350px] lg:w-[484px]",
    lg: "w-full sm:w-[360px] md:w-[420px] lg:w-[484px]",
  };

  const variantClasses = {
    primary: "bg-[#F2F1E0]",
    secondary: "bg-[#F2F1E0] border-2 border-[#322F30]",
    "with-border": "bg-[#F2F1E0] border-[3px] border-[#322F30]",
  };

  const baseClasses = `group ${variantClasses[variant]} ${sizeClasses[size]} ${widthClasses[size]} rounded-[100px] flex items-center justify-center gap-3 sm:gap-4 text-black overflow-hidden ${className}`;

  const handleClick = () => {
    onClick?.();
  };

  const content = (
    <>
      <span className="z-10 relative">{children}</span>
      {showArrow && (
        <div className="relative">
          <Image src={Seta} alt="Orçamento" className="z-10 relative" />
          <span className="text-black w-6 h-6 bg-[#f2f1e0] rounded-full absolute right-3 top-1/2 z-0 -translate-y-1/2 translate-x-1/2 transition-all duration-300 ease-in-out group-hover:w-220 group-hover:h-220"></span>
        </div>
      )}
    </>
  );

  if (as === "button" || !href) {
    return (
      <button type={type} className={baseClasses} onClick={handleClick} disabled={disabled}>
        {content}
      </button>
    );
  }

  return (
    <Link
      className={baseClasses}
      href={href}
      onClick={handleClick}
    >
      {content}
    </Link>
  );
}
