/**
 * Landing Page Oficial — Minha Vila de Natal 3D
 * Estrutura adaptada da referência comercial de alta conversão
 */

import React, { useState, Suspense } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { HeroSection } from './components/HeroSection';
import { ResultSection } from './components/ResultSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { HousesCatalogSection } from './components/HousesCatalogSection';
import { BonusesSection } from './components/BonusesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { WarrantySection } from './components/WarrantySection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { FooterSection } from './components/FooterSection';
import { LANDING_CONFIG } from './config/landingConfig';

// Carregamento sob demanda dos modais para reduzir bundle inicial na primeira tela do celular
const UpgradeModal = React.lazy(() =>
  import('./components/UpgradeModal').then((m) => ({ default: m.UpgradeModal }))
);
const CheckoutNoticeModal = React.lazy(() =>
  import('./components/CheckoutNoticeModal').then((m) => ({ default: m.CheckoutNoticeModal }))
);

export default function App() {
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [activeCheckoutType, setActiveCheckoutType] = useState<'basico' | 'completo' | 'upgrade' | null>(null);

  // Ao clicar no Plano Básico (R$ 10,00), abre primeiro o Popup de Upgrade
  const handleSelectBasico = () => {
    setIsUpgradeModalOpen(true);
  };

  // Ao clicar no Plano Completo (R$ 29,90), vai direto para o checkout completo
  const handleSelectCompleto = () => {
    handleTriggerCheckout('completo');
  };

  // No popup, o usuário aceitou o upgrade para o Completo por R$ 19,90
  const handleAcceptUpgrade = () => {
    setIsUpgradeModalOpen(false);
    handleTriggerCheckout('upgrade');
  };

  // No popup, o usuário recusou o upgrade e prefere ficar com o Básico por R$ 10,00
  const handleDeclineUpgrade = () => {
    setIsUpgradeModalOpen(false);
    handleTriggerCheckout('basico');
  };

  // Disparo centralizado de checkouts
  const handleTriggerCheckout = (type: 'basico' | 'completo' | 'upgrade') => {
    setActiveCheckoutType(type);
  };

  const getCheckoutUrl = (type: 'basico' | 'completo' | 'upgrade' | null) => {
    if (!type) return '';
    switch (type) {
      case 'basico':
        return LANDING_CONFIG.checkouts.CHECKOUT_BASICO;
      case 'completo':
        return LANDING_CONFIG.checkouts.CHECKOUT_COMPLETO;
      case 'upgrade':
        return LANDING_CONFIG.checkouts.CHECKOUT_UPGRADE;
    }
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#FFF8EC] text-[#2D2A26] flex flex-col font-sans selection:bg-[#A92E32] selection:text-white">
      {/* Faixa Promocional Superior Discreta */}
      <AnnouncementBar />

      {/* 2. Hero Section com Player de Vídeo Responsivo e CTA Principal */}
      <main className="flex-1">
        <HeroSection />

        {/* 3. Seção 2 — O Resultado Visual */}
        <ResultSection />

        {/* 4. Seção 3 — Como Funciona (3 Etapas) */}
        <HowItWorksSection />

        {/* 5. Seção 4 — O que Você Recebe */}
        <HousesCatalogSection />

        {/* 6. Bônus Exclusivos do Plano Completo */}
        <BonusesSection />

        {/* 8. Seção 7 — Prova Social (Espaço Reservado para Clientes Reais) */}
        <TestimonialsSection />

        {/* 9. Seção 8 — Planos e Preços (Básico R$ 10 / Completo R$ 29,90) */}
        <PricingSection
          onSelectBasico={handleSelectBasico}
          onSelectCompleto={handleSelectCompleto}
        />

        {/* 10. Seção 9 — Garantia de Satisfação */}
        <WarrantySection />

        {/* 11. Seção 10 — Perguntas Frequentes (FAQ Expansível) */}
        <FaqSection />

        {/* 12. Seção 11 — CTA Final */}
        <FinalCtaSection />
      </main>

      {/* 13. Rodapé Oficial */}
      <FooterSection />

      {/* POPUP DE UPGRADE (R$ 19,90) & MODAL DE CHECKOUT (Carregados sob demanda) */}
      <Suspense fallback={null}>
        <UpgradeModal
          isOpen={isUpgradeModalOpen}
          onClose={() => setIsUpgradeModalOpen(false)}
          onAcceptUpgrade={handleAcceptUpgrade}
          onDeclineUpgrade={handleDeclineUpgrade}
        />

        <CheckoutNoticeModal
          isOpen={activeCheckoutType !== null}
          onClose={() => setActiveCheckoutType(null)}
          checkoutType={activeCheckoutType}
          url={getCheckoutUrl(activeCheckoutType)}
        />
      </Suspense>
    </div>
  );
}
