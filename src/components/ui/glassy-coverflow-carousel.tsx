import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CleaningPhoto } from "@/components/ui/3d-carousel";

type GlassyCarouselProps = {
  items: CleaningPhoto[];
  layout?: "poster";
  autoPlay?: boolean;
};

export default function GlassyCarousel({ items, layout = "poster", autoPlay = false }: GlassyCarouselProps) {
  const [active, setActive] = useState(0);
  if (!items.length) return null;
  const shift = (direction: number) => setActive((current) => (current + direction + items.length) % items.length);

  return (
    <div className="mx-auto max-w-6xl">
      <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden px-2 sm:min-h-[520px]" aria-label="Cleaning project coverflow">
        {items.map((item, index) => {
          const delta = (index - active + items.length) % items.length;
          const offset = delta > items.length / 2 ? delta - items.length : delta;
          const activeSlide = offset === 0;
          return (
            <motion.article
              key={item.title}
              onClick={() => setActive(index)}
              className={`absolute ${layout === "poster" ? "aspect-[3/4] w-[66%] max-w-[310px]" : "aspect-[4/3] w-[68%]"} cursor-pointer overflow-hidden rounded-sm border border-ivory/60 shadow-2xl sm:w-[34%]`}
              animate={{
                x: `${offset * 82}%`,
                rotateY: offset * -26,
                scale: activeSlide ? 1 : Math.max(0.7, 0.82 - Math.abs(offset) * 0.05),
                opacity: Math.abs(offset) > 2 ? 0 : activeSlide ? 1 : 0.5,
                zIndex: 20 - Math.abs(offset),
              }}
              transition={{ type: "spring", stiffness: 130, damping: 22 }}
              style={{ transformStyle: "preserve-3d", pointerEvents: Math.abs(offset) > 2 ? "none" : "auto" }}
            >
              <img src={item.src} alt={item.alt} loading="lazy" className="h-full w-full object-cover" />
              <div className="glass-panel absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <p className="eyebrow text-rose-deep">{item.subtitle}</p>
                <h3 className="mt-1 font-display text-2xl leading-tight text-primary sm:text-3xl">{item.title}</h3>
              </div>
            </motion.article>
          );
        })}
        <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center gap-3">
          <Button className="pointer-events-auto rounded-full" variant="outline" size="icon" aria-label="Previous cleaning project" onClick={() => shift(-1)}>
            <ArrowLeft />
          </Button>
          <Button className="pointer-events-auto rounded-full" variant="outline" size="icon" aria-label="Next cleaning project" onClick={() => shift(1)}>
            <ArrowRight />
          </Button>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-muted-foreground">{active + 1} <span className="px-2 text-rose">/</span> {items.length}</p>
      <span className="sr-only">Automatic playback is {autoPlay ? "enabled" : "disabled"}.</span>
    </div>
  );
}