import React from 'react';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  const handleScrollToCasinhas = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onCtaClick) {
      onCtaClick();
      return;
    }
    const casinhasSection = document.getElementById('casinhas');
    if (casinhasSection) {
      casinhasSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-4 sm:pt-6 md:pt-8 pb-8 sm:pb-12 md:pb-14 bg-[#FDF9EC] overflow-hidden">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 relative z-10 text-center">
        {/* 1. Título Principal Grande e Impactante */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#2D2A26] tracking-tight leading-[1.16] sm:leading-[1.14] mb-2 sm:mb-2.5 text-balance max-w-3xl mx-auto font-display">
          Construa Sua{' '}
          <span className="text-[#214D3A]">Vila Natalina 3D</span>{' '}
          com{' '}
          <span className="text-[#A92E32]">+30 Modelos</span>{' '}
          de Casinhas!
        </h1>

        {/* 2. Imagem Principal da Vila com SrcSet Responsivo (82KB no celular) */}
        <div className="w-full max-w-[340px] xs:max-w-[370px] sm:max-w-[430px] md:max-w-[480px] lg:max-w-[500px] mx-auto my-1 sm:my-2 flex items-center justify-center">
          <picture className="w-full h-auto block">
            <source
              type="image/webp"
              srcSet="/assets/hero-vila-natalina-420w.webp 420w, /assets/hero-vila-natalina-640w.webp 640w, /assets/hero-vila-natalina-900w.webp 900w"
              sizes="(max-width: 440px) 340px, (max-width: 640px) 430px, 500px"
            />
            <img
              src="/assets/hero-vila-natalina-420w.webp"
              alt="Vila natalina em miniatura com construções decoradas"
              width={1122}
              height={1402}
              loading="eager"
              decoding="async"
              // @ts-expect-error fetchpriority is supported in modern browsers
              fetchpriority="high"
              className="w-full h-auto aspect-[1122/1402] object-contain p-0 m-0 border-0 rounded-none shadow-none"
            />
          </picture>
        </div>

        {/* 3. Descrição Curta e Direta do Produto */}
        <p className="text-xs sm:text-sm md:text-base text-[#79583E] max-w-lg mx-auto leading-snug mt-1.5 sm:mt-2 mb-3.5 sm:mb-4 text-balance font-medium">
          Imprima, recorte e monte sua decoração natalina sem gastar uma fortuna!
        </p>

        {/* 4. Botão de Compra Verde Vibrante */}
        <div className="w-full max-w-md mx-auto">
          <a
            href="#casinhas"
            onClick={handleScrollToCasinhas}
            className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 sm:px-12 py-3.5 sm:py-4 text-base sm:text-lg font-black text-white bg-[#25A244] hover:bg-[#1E8A38] active:bg-[#16702D] rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 cursor-pointer"
          >
            <span>QUERO ACESSAR AGORA</span>
            <span className="text-xl leading-none group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
