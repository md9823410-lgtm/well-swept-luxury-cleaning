import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export type CleaningPhoto = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
};

type ThreeDPhotoCarouselProps = {
  photos: CleaningPhoto[];
};

export function ThreeDPhotoCarousel({ photos }: ThreeDPhotoCarouselProps) {
  const [active, setActive] = useState(0);
  if (photos.length === 0) return null;

  const move = (direction: number) => {
    setActive((current) => (current + direction + photos.length) % photos.length);
  };

  return (
    <div className="relative mx-auto w-full max-w-6xl" aria-label="Interactive cleaning photo gallery">
      <div className="relative flex h-[390px] items-center justify-center overflow-hidden sm:h-[500px]" style={{ perspective: "1400px" }}>
        {photos.map((photo, index) => {
          const delta = (index - active + photos.length) % photos.length;
          const offset = delta > photos.length / 2 ? delta - photos.length : delta;
          const visible = Math.abs(offset) <= 2;
          return (
            <motion.button
              key={photo.title}
              type="button"
              aria-label={`View ${photo.title}`}
              onClick={() => setActive(index)}
              className="absolute aspect-[4/3] w-[72%] max-w-[620px] overflow-hidden rounded-sm border border-ivory/70 text-left shadow-2xl sm:w-[58%]"
              animate={{
                x: `${offset * 54}%`,
                rotateY: offset * -32,
                scale: offset === 0 ? 1 : Math.max(0.7, 0.84 - Math.abs(offset) * 0.05),
                opacity: visible ? (offset === 0 ? 1 : 0.62) : 0,
                zIndex: 20 - Math.abs(offset),
              }}
              transition={{ type: "spring", stiffness: 150, damping: 24 }}
              style={{ transformStyle: "preserve-3d", pointerEvents: visible ? "auto" : "none" }}
            >
              <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover" loading="lazy" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 to-transparent px-5 pb-5 pt-16 text-primary-foreground sm:px-8 sm:pb-7">
                <span className="eyebrow block text-champagne">{photo.subtitle}</span>
                <span className="mt-1 block font-display text-3xl sm:text-4xl">{photo.title}</span>
              </span>
            </motion.button>
          );
        })}
      </div>
      <div className="mt-3 flex items-center justify-center gap-5">
        <Button variant="outline" size="icon" aria-label="Previous cleaning photo" onClick={() => move(-1)}>
          <ArrowLeft />
        </Button>
        <div className="flex gap-2" aria-label={`Photo ${active + 1} of ${photos.length}`}>
          {photos.map((photo, index) => (
            <button
              key={photo.title}
              type="button"
              aria-label={`Go to photo ${index + 1}: ${photo.title}`}
              onClick={() => setActive(index)}
              className={`h-1.5 transition-all ${index === active ? "w-8 bg-rose" : "w-3 bg-primary/20"}`}
            />
          ))}
        </div>
        <Button variant="outline" size="icon" aria-label="Next cleaning photo" onClick={() => move(1)}>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}