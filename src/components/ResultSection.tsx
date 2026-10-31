import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import imagensCatalog from '../data/imagens.json';

export interface CarrosselImageItem {
  id: number;
  filename: string;
  src: string;
  localSrc?: string;
  titulo: string;
  tipo: string;
  categoria: 'corpo' | 'telhado' | 'guia';
  pagina: string;
  descricao: string;
}

export const ResultSection: React.FC = () => {
  const images = imagensCatalog as CarrosselImageItem[];
  const [selectedItem, setSelectedItem] = useState<CarrosselImageItem | null>(null);

  // Divide as 20 imagens fornecidas em duas fileiras de 10
  const row1 = images.slice(0, 10);
  const row2 = images.slice(10, 20);

  // Duplicação exata (2x) para criar o loop contínuo infinito e sem saltos
  const row1Items = [...row1, ...row1];
  const row2Items = [...row2, ...row2];

  // Refs para controle direto de animação contínua e sem qualquer pausa
  const track1Ref = useRef<HTMLDivElement | null>(null);
  const track2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animId: number;
    let pos1 = 0;
    let pos2 = 0;
    const speed = 0.9; // Velocidade suave e contínua sem interrupções

    const animate = () => {
      // Fileira 1: desliza para a esquerda continuamente sem interrupção
      if (track1Ref.current) {
        pos1 += speed;
        const half1 = track1Ref.current.scrollWidth / 2;
        if (half1 > 0 && pos1 >= half1) {
          pos1 -= half1;
        }
        track1Ref.current.style.transform = `translate3d(-${pos1}px, 0, 0)`;
      }

      // Fileira 2: desliza para a DIREITA continuamente sem interrupção
      if (track2Ref.current) {
        pos2 += speed;
        const half2 = track2Ref.current.scrollWidth / 2;
        if (half2 > 0 && pos2 >= half2) {
          pos2 -= half2;
        }
        track2Ref.current.style.transform = `translate3d(-${half2 - pos2}px, 0, 0)`;
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Fechar modal ao pressionar ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedItem) {
        setSelectedItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  return (
    <section id="resultado" className="py-[36px] sm:py-10 md:py-12 bg-[#FFFDF8] border-y border-black/15 relative overflow-hidden w-full max-w-full transition-colors duration-300">
      {/* 1. Título e Subtítulo Preservados com Espaçamento Compacto */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-[20px] text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#214D3A] tracking-tight mb-2 sm:mb-2.5 font-display">
          Veja o Material por Dentro!
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#79583E] max-w-2xl mx-auto leading-relaxed text-balance font-medium">
          Conheça alguns dos moldes que você vai receber para imprimir e montar sua própria Vilinha Natalina 3D.
        </p>
      </div>

      {/* 2. Mosaico Animado Contínuo: Folhas A4 Ampliadas (160px mobile / 190px desktop) */}
      <div className="relative w-full overflow-hidden select-none py-1">
        {/* Degradês sutis nas extremidades para suavizar a entrada e saída (fundo #FFFDF8) */}
        <div className="absolute left-0 inset-y-0 w-8 sm:w-28 bg-gradient-to-r from-[#FFFDF8] via-[#FFFDF8]/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-8 sm:w-28 bg-gradient-to-l from-[#FFFDF8] via-[#FFFDF8]/90 to-transparent z-20 pointer-events-none" />

        {/* Fileira Superior (Moldes 01 a 10): Desliza da DIREITA para a ESQUERDA */}
        <div className="mb-[12px] overflow-hidden w-full">
          <div 
            ref={track1Ref}
            className="flex gap-[10px] w-max will-change-transform"
          >
            {row1Items.map((item, index) => (
              <button
                key={`r1-${item.id}-${index}`}
                type="button"
                onClick={() => setSelectedItem(item)}
                aria-label={`Ampliar ${item.titulo} - ${item.tipo}`}
                className="w-[160px] sm:w-[190px] aspect-[760/1075] shrink-0 rounded-xs sm:rounded-sm shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-200 cursor-pointer overflow-hidden p-0 bg-white border border-black/30 hover:border-black/60 focus:outline-none"
              >
                <img
                  src={item.src}
                  alt={`${item.titulo} - ${item.tipo}`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  width={190}
                  height={269}
                  className="w-full h-full object-contain pointer-events-none"
                  onError={(e) => {
                    if (item.localSrc && e.currentTarget.src !== window.location.origin + item.localSrc) {
                      e.currentTarget.src = item.localSrc;
                    }
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Fileira Inferior (Moldes 11 a 20): Desliza para a DIREITA continuamente */}
        <div className="overflow-hidden w-full">
          <div 
            ref={track2Ref}
            className="flex gap-[10px] w-max will-change-transform"
          >
            {row2Items.map((item, index) => (
              <button
                key={`r2-${item.id}-${index}`}
                type="button"
                onClick={() => setSelectedItem(item)}
                aria-label={`Ampliar ${item.titulo} - ${item.tipo}`}
                className="w-[160px] sm:w-[190px] aspect-[760/1075] shrink-0 rounded-xs sm:rounded-sm shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-200 cursor-pointer overflow-hidden p-0 bg-white border border-black/30 hover:border-black/60 focus:outline-none"
              >
                <img
                  src={item.src}
                  alt={`${item.titulo} - ${item.tipo}`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  width={190}
                  height={269}
                  className="w-full h-full object-contain pointer-events-none"
                  onError={(e) => {
                    if (item.localSrc && e.currentTarget.src !== window.location.origin + item.localSrc) {
                      e.currentTarget.src = item.localSrc;
                    }
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Modal de Visualização Ampliada ao Clicar na Folha */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border-2 border-[#D7AA58] overflow-hidden my-6 transform animate-in zoom-in-95 duration-200 p-5 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão de Fechar */}
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 text-[#214D3A] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Fechar visualização"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cabeçalho do Modal */}
            <div className="mb-3 pr-8">
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-[#214D3A] text-white">
                {selectedItem.tipo} · Página {selectedItem.pagina}
              </span>
              <h3 className="font-display font-black text-xl text-[#214D3A] mt-2 leading-tight">
                {selectedItem.titulo}
              </h3>
              <p className="text-xs text-[#79583E] mt-0.5">
                {selectedItem.descricao}
              </p>
            </div>

            {/* Visualização Completa da Página A4 sem Cortes */}
            <div className="aspect-[760/1075] w-full max-w-[360px] mx-auto rounded-xl border border-black/30 bg-[#FFFDF8] p-2 shadow-inner overflow-hidden flex items-center justify-center">
              <img
                src={selectedItem.src}
                alt={selectedItem.titulo}
                referrerPolicy="no-referrer"
                decoding="async"
                width={360}
                height={509}
                className="w-full h-full object-contain drop-shadow-xs"
                onError={(e) => {
                  if (selectedItem.localSrc && e.currentTarget.src !== window.location.origin + selectedItem.localSrc) {
                    e.currentTarget.src = selectedItem.localSrc;
                  }
                }}
              />
            </div>

            {/* Rodapé com Botão */}
            <div className="mt-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 text-[11px] text-[#214D3A] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#214D3A]" />
                <span>Arquivo A4 Pronto para Impressão</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="py-2 px-5 rounded-xl text-xs font-bold bg-[#214D3A] text-white hover:bg-[#173829] transition-colors cursor-pointer shadow-sm"
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
