import Image from "next/image";
import { HERO_IMAGE } from "@/app/lib/constants";

export function HeroVisual() {
  return (
    <div className="relative h-full min-h-[16rem] w-full overflow-hidden rounded-2xl sm:min-h-[20rem] lg:min-h-[26rem] lg:rounded-3xl">
      <Image
        src={HERO_IMAGE.src}
        alt={HERO_IMAGE.alt}
        width={HERO_IMAGE.width}
        height={HERO_IMAGE.height}
        priority
        className="h-full w-full object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 60vw"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgb(255_255_255/0.08)_0%,transparent_50%)]"
      />
    </div>
  );
}
