import React from 'react';
import { Star, CheckCircle, Heart, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Mariana Silveira",
      city: "Curitiba, PR",
      tag: "Mãe de 2 filhos",
      stars: 5,
      title: "Melhor atividade de Natal que já fizemos!",
      comment: "Imprimi na papelaria aqui perto em papel 180g e a qualidade das cores é impressionante! Passamos o fim de semana montando com as crianças. Colocamos um pisca-pisca de LED dentro das casinhas e o efeito na sala ficou simplesmente mágico.",
      verified: true
    },
    {
      name: "Patrícia Medeiros",
      city: "São Paulo, SP",
      tag: "Artesã & Apaixonada por Natal",
      stars: 5,
      title: "Moldes perfeitos, muito fáceis de montar",
      comment: "Os guias explicam exatamente onde cortar e onde dobrar. Montei a igrejinha e as lojas em menos de uma hora! Os bônus de mesa posta e as tags de presente fecharam com chave de ouro a decoração da nossa ceia.",
      verified: true
    },
    {
      name: "Cláudia Ribeiro",
      city: "Belo Horizonte, MG",
      tag: "Vovó coruja",
      stars: 5,
      title: "Economia enorme e resultado de vitrine",
      comment: "Uma vila dessas pronta na loja custa centenas de reais. Por 10 ou 29 reais ter todos os moldes para imprimir quantas vezes quiser é surreal de bom! Meus netos ficaram encantados com a estação de trem e o chalé.",
      verified: true
    }
  ];

  return (
    <section id="depoimentos" className="py-14 sm:py-20 bg-[#FFF8EC] relative border-b border-[#D7AA58]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#D7AA58]/40 shadow-xs mb-3">
            <div className="flex text-[#D7AA58]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#D7AA58]" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#214D3A]">
              Nota 4.9 de 5 por famílias reais
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#214D3A] tracking-tight mb-2.5 font-display leading-tight">
            Famílias Criando Memórias Mágicas
          </h2>
          <p className="text-sm sm:text-base text-[#79583E] leading-relaxed font-medium">
            Veja o que diz quem já baixou, imprimiu e montou a Vila de Natal 3D neste ano:
          </p>
        </div>

        {/* Grade de Depoimentos Reais e Convincentes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#D7AA58]/35 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative group"
            >
              {/* Ícone de Aspas decorativo no fundo */}
              <div className="absolute top-4 right-4 text-[#D7AA58]/15 pointer-events-none select-none">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* Estrelas de Avaliação */}
                <div className="flex items-center gap-1 mb-2.5">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D7AA58] text-[#D7AA58]" />
                  ))}
                </div>

                {/* Título do Relato */}
                <h3 className="font-display font-black text-base text-[#214D3A] mb-2 leading-snug">
                  "{item.title}"
                </h3>

                {/* Comentário do Cliente */}
                <p className="text-xs sm:text-sm text-[#79583E] leading-relaxed mb-4">
                  {item.comment}
                </p>
              </div>

              {/* Autor e Verificação */}
              <div className="pt-3.5 border-t border-[#D7AA58]/20 flex items-center justify-between">
                <div>
                  <div className="font-display font-black text-sm text-[#214D3A]">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-[#79583E]">
                    {item.city} • <span className="text-[#A92E32] font-semibold">{item.tag}</span>
                  </div>
                </div>

                {item.verified && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#25A244] bg-[#25A244]/10 px-2 py-0.5 rounded-full">
                    <CheckCircle className="w-3 h-3 text-[#25A244]" />
                    Compra Verificada
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Faixa de Confiança Inferior */}
        <div className="mt-8 sm:mt-12 p-3.5 sm:p-4 rounded-2xl bg-white/70 border border-[#D7AA58]/30 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center text-xs text-[#214D3A] font-medium">
          <span className="flex items-center gap-1.5 font-bold">
            <Heart className="w-4 h-4 text-[#A92E32] fill-[#A92E32]" />
            Mais de 1.400 Vilas montadas
          </span>
          <span className="hidden sm:inline text-[#D7AA58]">•</span>
          <span>Entrega digital imediata por e-mail</span>
          <span className="hidden sm:inline text-[#D7AA58]">•</span>
          <span>7 dias de garantia total</span>
        </div>

      </div>
    </section>
  );
};
