import { useLocation } from "react-router-dom";
import { useDataBackground } from "@/shared/hooks/useDataBackground";
import useCollapse from "@/shared/hooks/useCollapse";
import useImageHoverEffects from "@/shared/utils/ImageHoverEffects";
import ParallaxEffect from "@/shared/effects/ParallaxEffect";
import ParallaxSceneEffect from "@/shared/effects/ParallaxSceneEffect";
import RevealTextEffect from "@/shared/effects/RevealTextEffect";
import AboutSvgEffect from "@/shared/effects/AboutSvgEffect";
import PanelPinEffect from "@/shared/effects/PanelPinEffect";
import ScrollMoveUpEffect from "@/shared/effects/ScrollMoveUpEffect";
import ScrollSectionEffects from "@/shared/effects/ScrollSectionEffects";
import ScrollRotateMoveEffect from "@/shared/effects/ScrollRotateMoveEffect";
import ScrollRotateIdleEffect from "@/shared/effects/ScrollRotateIdleEffect";
import AtBrandScrollEffect from "@/shared/effects/AtBrandScrollEffect";
import CardAwardPreviewEffect from "@/shared/effects/CardAwardPreviewEffect";
import AtItemAnimeEffect from "@/shared/effects/AtItemAnimeEffect";
import FadeAnimEffect from "@/shared/effects/FadeAnimEffect";
import CharAnimEffect from "@/shared/effects/CharAnimEffect";
import ScaleImageScrollEffect from "@/shared/effects/ScaleImageScrollEffect";
import ThrowableEffect from "@/shared/effects/ThrowableEffect";
import CarouselTickerEffect from "@/shared/effects/CarouselTickerEffect";
import Home8Sec8PinEffect from "@/shared/effects/Home8Sec8PinEffect";
import TextScrambleEffect from "@/shared/effects/TextScrambleEffect";
import AnimZoominEffect from "@/shared/effects/AnimZoominEffect";
import Home10Sec5PinEffect from "@/shared/effects/Home10Sec5PinEffect";
import Home10Sec4PinEffect from "@/shared/effects/Home10Sec4PinEffect";
import Home10Sec6PinEffect from "@/shared/effects/Home10Sec6PinEffect";
import Home12Sec2StackEffect from "@/shared/effects/Home12Sec2StackEffect";
import Home15Sec6FlipEffect from "@/shared/effects/Home15Sec6FlipEffect";
import MagnificPopupEffect from "@/shared/effects/MagnificPopupEffect";
import CursorTrailEffect from "@/shared/effects/CursorTrailEffect";

/**
 * Remount effects on route change so new page DOM is initialized.
 * Mirrors Next.js `components/layout/ClientEffects.tsx`.
 * SPA navigation doesn't remount MainLayout like Next App Router does, so we key by pathname.
 */
export default function GlobalEffects() {
  const location = useLocation();
  const key = location.pathname;

  // Hook-based effects: bind document-level handlers fresh on each route.
  useDataBackground();
  useCollapse();
  useImageHoverEffects();

  return (
    <>
      <ParallaxSceneEffect key={`scene-${key}`} />
      <ParallaxEffect key={`parallax-${key}`} />
      <RevealTextEffect key={`reveal-${key}`} />
      <AboutSvgEffect key={`about-svg-${key}`} />
      <PanelPinEffect key={`panel-pin-${key}`} />
      <ScrollMoveUpEffect key={`move-${key}`} />
      <ScrollSectionEffects key={`scroll-sections-${key}`} />
      <ScrollRotateMoveEffect key={`rotate-move-${key}`} />
      <ScrollRotateIdleEffect key={`rotate-idle-${key}`} />
      <AtBrandScrollEffect key={`brand-scroll-${key}`} />
      <CardAwardPreviewEffect key={`card-award-${key}`} />
      <AtItemAnimeEffect key={`at-item-anime-${key}`} />
      <FadeAnimEffect key={`fade-${key}`} />
      <ScaleImageScrollEffect key={`scale-img-${key}`} />
      <CharAnimEffect key={`char-anim-${key}`} />
      <ThrowableEffect key={`throwable-${key}`} />
      <CarouselTickerEffect key={`carousel-ticker-${key}`} />
      <Home8Sec8PinEffect key={`h8s8pin-${key}`} />
      <TextScrambleEffect key={`text-scramble-${key}`} />
      <AnimZoominEffect key={`anim-zoomin-${key}`} />
      <Home10Sec4PinEffect key={`h10s4pin-${key}`} />
      <Home10Sec5PinEffect key={`h10s5pin-${key}`} />
      <Home10Sec6PinEffect key={`h10s6pin-${key}`} />
      <Home12Sec2StackEffect key={`h12s2stack-${key}`} />
      <Home15Sec6FlipEffect key={`h15s6flip-${key}`} />
      <MagnificPopupEffect key={`magnific-${key}`} />
      <CursorTrailEffect key={`cursor-trail-${key}`} />
    </>
  );
}
