import Image from "next/image";

type LogoProps = {
  useLazy?: boolean;
  className?: string;
};

const Logo = ({ useLazy = false, className }: LogoProps) => {
  return (
    <div
      className={`relative w-[160px] aspect-[2/1] flex justify-center items-center ${className ?? ""}`}
    >
      <Image
        src="/img/logo.png"
        alt="Logotipo da empresa, link para a página inicial"
        fill
        loading={useLazy ? "lazy" : "eager"} // ✅ condicional correto
        style={{
          objectFit: "contain",
          borderRadius: "20%",
        }}
        priority={!useLazy} // ✅ garante carregamento prioritário se não for lazy
      />
    </div>
  );
};

export default Logo;
