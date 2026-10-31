import React from 'react';
import { Download, Palette, BookOpen, Sparkles, Users, RefreshCw } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Download,
      title: "Arquivos Digitais Prontos para Impressão",
      description: "Acesse os moldes em PDF de alta qualidade e imprima onde preferir: na impressora de casa ou em qualquer papelaria."
    },
    {
      icon: Palette,
      title: "Casinhas 100% Coloridas e Ilustradas",
      description: "Arte rica em texturas, sombras e detalhes natalinos. Não precisa pintar: basta imprimir para ter cores vivas e vibrantes."
    },
    {
      icon: BookOpen,
      title: "Montagem Guiada e Intuitiva",
      description: "Cada edificação conta com seu próprio guia ilustrado de montagem passo a passo, facilitando o corte, dobra e colagem."
    },
    {
      icon: Sparkles,
      title: "Decoração Natalina Personalizada",
      description: "Um elemento decorativo artesanal que traz calor e personalidade para a sua casa por uma fração do custo de enfeites comerciais."
    },
    {
      icon: Users,
      title: "Atividade Criativa para Toda a Família",
      description: "Desconecte as crianças das telas e crie uma tradição inesquecível de trabalho manual, cooperação e encanto natalino."
    },
    {
      icon: RefreshCw,
      title: "Reutilização Conforme a Licença",
      description: "Errou um corte ou quer montar mais vilas para presentear? Imprima os moldes quantas vezes precisar para seu uso pessoal."
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#FFF8EC] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[#A92E32] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 block">
            Por que escolher a Minha Vila de Natal 3D
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#214D3A] tracking-tight mb-4">
            Vantagens que Fazem Deste Natal o Mais Especial
          </h2>
          <p className="text-[#79583E] text-base sm:text-lg">
            Muito mais do que folhas de papel: uma experiência de afeto, celebração e arte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#D7AA58]/30 shadow-xs hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-[#214D3A]/10 text-[#214D3A] flex items-center justify-center mb-5 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[#214D3A] text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#79583E] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
