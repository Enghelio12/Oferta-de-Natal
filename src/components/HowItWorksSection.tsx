import React from 'react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Passo 1 — Imprima os moldes",
      description: "Baixe os arquivos e imprima em folhas A4."
    },
    {
      number: "2",
      title: "Passo 2 — Recorte e dobre",
      description: "Recorte as peças e dobre nas linhas indicadas."
    },
    {
      number: "3",
      title: "Passo 3 — Monte sua vilinha",
      description: "Cole as peças e crie sua decoração natalina 3D."
    }
  ];

  return (
    <section id="como-funciona" className="py-6 sm:py-10 md:py-12 bg-[#FFF8EC] relative overflow-hidden border-b border-[#D7AA58]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho Compacto com Textos Maiores e Legíveis */}
        <div className="text-center max-w-xl mx-auto mb-5 sm:mb-6">
          <span className="text-[#A92E32] font-bold text-xs sm:text-sm tracking-widest uppercase mb-1 block">
            Simples e Rápido
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#214D3A] tracking-tight mb-1.5 font-display leading-tight">
            Como Funciona em 3 Passos Fáceis
          </h2>
          <p className="text-sm sm:text-base text-[#79583E] leading-snug">
            Você não precisa de ferramentas especiais. Qualquer pessoa consegue montar!
          </p>
        </div>

        {/* Três Blocos Horizontais Compactos (8px de espaçamento no mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3.5 max-w-3xl md:max-w-none mx-auto">
          {steps.map((step) => (
            <div 
              key={step.number}
              className="bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border border-[#D7AA58]/35 shadow-xs flex items-center gap-3.5 sm:gap-4 transition-shadow hover:shadow-sm"
            >
              {/* Número do Passo à Esquerda com Fundo Vermelho Natalino */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#A92E32] text-white font-display font-black text-lg sm:text-xl flex items-center justify-center shrink-0 shadow-xs border-2 border-[#D7AA58]/70">
                {step.number}
              </div>

              {/* Título e Descrição com Tamanhos Maiores */}
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-black text-sm sm:text-base text-[#214D3A] leading-snug mb-0.5">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#79583E] leading-snug">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
