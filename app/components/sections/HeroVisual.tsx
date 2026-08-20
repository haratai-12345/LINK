import Image from "next/image";
import { HERO_IMAGE } from "@/app/lib/constants";
import { getPublicPath } from "@/app/lib/seo";

export function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="hero-visual__backdrop" aria-hidden="true" />
      <Image
        src={getPublicPath(HERO_IMAGE.src)}
        alt={HERO_IMAGE.alt}
        width={HERO_IMAGE.width}
        height={HERO_IMAGE.height}
        priority
        className="hero-visual__image"
        sizes="(max-width: 1024px) 100vw, 52vw"
      />
    </div>
  );
}
