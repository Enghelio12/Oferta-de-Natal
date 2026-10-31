import React from 'react';
import { ExternalLink, X, AlertCircle, CheckCircle2, ShoppingBag } from 'lucide-react';

interface CheckoutNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  checkoutType: 'basico' | 'completo' | 'upgrade' | null;
  url: string;
}

export const CheckoutNoticeModal: React.FC<CheckoutNoticeModalProps> = ({
  isOpen,
  onClose,
  checkoutType,
  url,
}) => {
  if (!isOpen || !checkoutType) return null;

  const planDetails = {
    basico: {
      name: "Plano Básico",
      price: "R$ 10,00",
      description: "8 edificações completas da Minha Vila de Natal 3D (24 páginas A4)",
      badgeColor: "bg-[#214D3A] text-white"
    },
    completo: {
      name: "Plano Completo",
      price: "R$ 29,90",
      description: "8 edificações + 5 Kits de Bônus Natalinos Planejados",
      badgeColor: "bg-[#A92E32] text-white"
    },
    upgrade: {
      name: "Upgrade Especial do Plano Completo",
      price: "R$ 19,90",
      description: "Condição especial: Plano Completo com R$ 10,00 de desconto",
      badgeColor: "bg-[#D7AA58] text-[#173829]"
    }
  }[checkoutType];

  const handleProceed = () => {
    // Abre a URL configurada
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border-2 border-[#D7AA58] overflow-hidden my-6 transform animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <div className="bg-[#FFF8EC] p-5 sm:p-6 border-b border-[#D7AA58]/30 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#214D3A] text-[#D7AA58] flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-[#A92E32] tracking-wider block">
                Redirecionamento para Checkout
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#214D3A]">
                {planDetails.name}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 text-[#214D3A] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6 space-y-4">
          <div className="p-4 rounded-2xl bg-white border border-[#D7AA58]/40 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider ${planDetails.badgeColor}`}>
                {planDetails.name}
              </span>
              <span className="text-xl font-black text-[#214D3A] font-display">
                {planDetails.price}
              </span>
            </div>
            <p className="text-xs text-[#79583E]">
              {planDetails.description}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#FFF8EC] border border-[#D7AA58]/40 text-xs text-[#79583E] space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-[#214D3A]">
              <AlertCircle className="w-4 h-4 text-[#D7AA58] shrink-0" />
              <span>Configuração do Link de Checkout:</span>
            </div>
            <p>
              O sistema está apontando para: <code className="bg-white px-2 py-0.5 rounded text-[#A92E32] font-mono break-all">{url}</code>
            </p>
            <p className="text-[11px] text-[#79583E]/80">
              Para inserir seus links reais (Kiwify, Hotmart, Eduzz, etc.), basta editar o arquivo <code className="text-[#214D3A] font-mono">src/config/landingConfig.ts</code>.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleProceed}
              className="flex-1 py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-[#214D3A] hover:bg-[#173829] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Abrir Checkout Agora</span>
              <ExternalLink className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="py-3.5 px-4 rounded-xl font-medium text-sm text-[#79583E] hover:text-[#214D3A] hover:bg-[#FFF8EC] transition-colors cursor-pointer"
            >
              Voltar à Página
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
