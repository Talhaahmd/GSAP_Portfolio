import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";

interface SwiperDynamicProps {
  children: React.ReactNode;
  className?: string;
  slidesPerView?: number | "auto";
  spaceBetween?: number;
  loop?: boolean;
  autoplay?: boolean | { delay: number; disableOnInteraction?: boolean };
  centeredSlides?: boolean;
  slidesPerGroup?: number;
  navigation?: boolean | object;
  pagination?: boolean | object;
  thumbs?: any;
  freeMode?: boolean;
  effect?: string;
  breakpoints?: {
    [key: number]: {
      slidesPerView?: number;
      spaceBetween?: number;
    };
  };
  onSlideChange?: (swiper: any) => void;
  onSwiper?: (swiper: any) => void;
  modules?: any[];
  speed?: number;
  grabCursor?: boolean;
  watchSlidesProgress?: boolean;
}

export default function SwiperDynamic(props: SwiperDynamicProps) {
  const {
    children,
    className = "swiper",
    slidesPerView,
    spaceBetween = 30,
    loop = true,
    autoplay = false,
    centeredSlides = false,
    slidesPerGroup = 1,
    navigation = false,
    pagination = false,
    thumbs,
    freeMode = false,
    effect,
    breakpoints,
    onSlideChange,
    onSwiper,
    modules: customModules,
    speed = 600,
    grabCursor = true,
    watchSlidesProgress = false,
  } = props;

  const getModules = () => {
    const modules = [];
    if (autoplay) modules.push(Autoplay);
    if (navigation) modules.push(Navigation);
    if (pagination) modules.push(Pagination);
    if (thumbs) modules.push(Thumbs);
    if (freeMode) modules.push(FreeMode);
    if (effect === "fade") modules.push(EffectFade);
    if (customModules) modules.push(...customModules);
    return modules;
  };

  const swiperProps: any = {
    className,
    modules: getModules(),
    spaceBetween,
    loop,
    centeredSlides,
    slidesPerGroup,
    speed,
    grabCursor,
    watchSlidesProgress,
    effect,
  };

  if (autoplay) {
    swiperProps.autoplay = typeof autoplay === "boolean" ? { delay: 3000, disableOnInteraction: false } : autoplay;
  }
  if (navigation) swiperProps.navigation = navigation;
  if (pagination) swiperProps.pagination = pagination;
  if (thumbs) swiperProps.thumbs = thumbs;
  if (freeMode) swiperProps.freeMode = freeMode;
  if (breakpoints) swiperProps.breakpoints = breakpoints;

  if (slidesPerView !== undefined) swiperProps.slidesPerView = slidesPerView;
  else if (breakpoints) {
    const minBreakpoint = Math.min(...Object.keys(breakpoints).map(Number));
    swiperProps.slidesPerView = breakpoints[minBreakpoint]?.slidesPerView || 1;
  } else swiperProps.slidesPerView = 1;

  if (onSlideChange) swiperProps.onSlideChange = onSlideChange;
  if (onSwiper) swiperProps.onSwiper = onSwiper;

  return (
    <Swiper {...swiperProps}>
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}

