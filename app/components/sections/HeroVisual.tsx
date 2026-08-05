import Image from "next/image";
import { HERO_IMAGE } from "@/app/lib/constants";

export function HeroVisual() {
  return (
    <div className="relative flex h-[14rem] w-full items-center justify-center sm:h-[18rem] lg:h-[min(560px,62vh)]">
      <Image
        src={HERO_IMAGE.src}
        alt={HERO_IMAGE.alt}
        width={HERO_IMAGE.width}
        height={HERO_IMAGE.height}
        priority
        className="h-full w-full object-contain object-center"
        sizes="(max-width: 1024px) 100vw, 58vw"
      />
    </div>
  );
}
