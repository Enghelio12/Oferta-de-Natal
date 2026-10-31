import React from 'react';

export const HousesCatalogSection: React.FC = () => {
  // Lista de modelos da coleção estruturada para fácil manutenção
  const modelos = [
    { emoji: '🏠', nome: 'Casinhas e Chalés Natalinos' },
    { emoji: '🍫', nome: 'Casas de Chocolate e Doces' },
    { emoji: '⛪', nome: 'Igrejas Natalinas' },
    { emoji: '🕰️', nome: 'Torres de Relógio' },
    { emoji: '🎅', nome: 'Casas do Papai Noel' },
    { emoji: '🧸', nome: 'Oficinas dos Duendes' },
    { emoji: '🎁', nome: 'Lojas de Presentes' },
    { emoji: '🥐', nome: 'Padarias Natalinas' },
    { emoji: '❄️', nome: 'Iglus de Inverno' },
    { emoji: '🚂', nome: 'Estação de Trem' },
  ];

  const mockupMobileUrl = "https://res.cloudinary.com/tefsrgce/image/upload/f_auto,q_auto:good,w_480/v1792258753/Vila_Natalina_em_Miniatura_Iluminada.png";
  const mockupTabletUrl = "https://res.cloudinary.com/tefsrgce/image/upload/f_auto,q_auto:good,w_800/v1792258753/Vila_Natalina_em_Miniatura_Iluminada.png";
  const mockupDesktopUrl = "https://res.cloudinary.com/tefsrgce/image/upload/f_auto,q_auto:good,w_1100/v1792258753/Vila_Natalina_em_Miniatura_Iluminada.png";

  return (
    <section id="casinhas" className="py-5 sm:py-8 md:py-10 bg-[#FFF8EC] relative overflow-hidden border-b border-[#D7AA58]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* 1. CABEÇALHO COMPACTO (espaçamento reduzido) */}
        <div className="text-center max-w-2xl mx-auto mb-2 sm:mb-3">
          <span className="text-[#A92E32] font-black text-[11px] sm:text-xs tracking-widest uppercase mb-0.5 block">
            O QUE VOCÊ VAI RECEBER?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#214D3A] tracking-tight mb-1 font-display leading-tight">
            Uma Coleção com{' '}
            <span className="text-[#A92E32]">+30 Edificações Natalinas 3D!</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#79583E] leading-snug text-balance font-medium">
            Casinhas, igrejas, lojas, escolas e muito mais, com moldes prontos para imprimir e guias de montagem.
          </p>
        </div>

        {/* 2. MOCKUP OFICIAL CLOUDINARY (Otimizado com WebP/AVIF e srcset responsivo) */}
        <div className="w-full max-w-4xl mx-auto mt-2.5 sm:mt-3.5 mb-3 sm:mb-4 flex items-center justify-center">
          <picture className="w-full h-auto block max-w-4xl">
            <source
              type="image/webp"
              srcSet={`${mockupMobileUrl} 480w, ${mockupTabletUrl} 800w, ${mockupDesktopUrl} 1100w`}
              sizes="(max-width: 640px) 100vw, 896px"
            />
            <img
              src={mockupTabletUrl}
              alt="Vila Natalina em Miniatura Iluminada com +30 Edificações"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              width={1024}
              height={576}
              className="w-full h-auto max-h-[480px] sm:max-h-[560px] object-contain drop-shadow-md transition-transform duration-300 hover:scale-[1.01]"
            />
          </picture>
        </div>

        {/* 3. LISTA DE MODELOS EM DUAS COLUNAS NO CELULAR */}
        <div className="max-w-2xl mx-auto text-center mt-3 sm:mt-4">
          <h3 className="font-display font-black text-base sm:text-lg text-[#214D3A] mb-0.5">
            Uma vila inteira para você montar!
          </h3>
          <p className="text-xs sm:text-sm text-[#79583E] mb-3">
            Conheça alguns dos modelos da coleção:
          </p>

          {/* Grade de 2 Colunas com Caixas Retangulares */}
          <div className="grid grid-cols-2 gap-2 sm:gap-2.5 max-w-xl mx-auto text-left">
            {modelos.map((item) => (
              <div 
                key={item.nome}
                className="bg-white rounded-[10px] border border-[#D7AA58]/40 p-2 sm:px-3 sm:py-2.5 min-h-[46px] sm:min-h-[48px] flex items-center justify-start gap-2 shadow-xs transition-colors hover:border-[#D7AA58]"
              >
                {/* Emoji à Esquerda */}
                <span className="text-lg sm:text-xl shrink-0 select-none">
                  {item.emoji}
                </span>
                {/* Nome em Verde-Escuro (Pelo menos 14px, sem corte) */}
                <span className="text-[14px] sm:text-[15px] font-semibold text-[#214D3A] leading-snug break-words">
                  {item.nome}
                </span>
              </div>
            ))}
          </div>

          {/* Fechamento com Destaque para Mais de 30 Modelos */}
          <p className="text-xs sm:text-sm text-[#214D3A] mt-3 sm:mt-4 tracking-normal">
            <strong className="font-black text-[#A92E32]">Mais de 30 modelos</strong> para combinar e criar uma vila do seu jeito!
          </p>
        </div>

      </div>
    </section>
  );
};
