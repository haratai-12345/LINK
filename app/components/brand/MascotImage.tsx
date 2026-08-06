import Image from "next/image";
import { MASCOT_IMAGES, type MascotVariant } from "@/app/lib/constants";

type MascotSize = "sm" | "md" | "lg" | "hero";
type MascotFit = "inline" | "card" | "cta" | "feature";

type MascotImageProps = {
  variant: MascotVariant;
  size?: MascotSize;
  fit?: MascotFit;
  priority?: boolean;
  className?: string;
};

const sizeClass: Record<MascotSize, string> = {
  sm: "h-14 w-14 sm:h-16 sm:w-16",
  md: "h-16 w-16 sm:h-20 sm:w-20",
  lg: "h-24 w-24 sm:h-32 sm:w-32",
  hero: "h-full w-full max-h-[14rem] sm:max-h-[18rem] lg:max-h-[min(560px,62vh)]",
};

export function MascotImage({
  variant,
  size = "md",
  fit = "inline",
  priority = false,
  className = "",
}: MascotImageProps) {
  const mascot = MASCOT_IMAGES[variant];

  if (fit === "card") {
    return (
      <div className={`mascot-image mascot-image--card ${className}`.trim()}>
        <Image
          src={mascot.src}
          alt=""
          width={mascot.width}
          height={mascot.height}
          priority={priority}
          aria-hidden
          className="mascot-image__asset h-full w-full object-contain object-bottom"
          sizes="(max-width: 640px) 116px, (max-width: 1024px) 140px, 160px"
        />
      </div>
    );
  }

  if (fit === "cta") {
    return (
      <div className={`mascot-image mascot-image--cta ${className}`.trim()}>
        <Image
          src={mascot.src}
          alt=""
          width={mascot.width}
          height={mascot.height}
          priority={priority}
          aria-hidden
          className="mascot-image__asset h-full w-full object-contain object-bottom"
          sizes="(max-width: 640px) 104px, 120px"
        />
      </div>
    );
  }

  if (fit === "feature") {
    return (
      <div className={`mascot-image mascot-image--feature ${className}`.trim()}>
        <Image
          src={mascot.src}
          alt={mascot.alt}
          width={mascot.width}
          height={mascot.height}
          priority={priority}
          className="mascot-image__asset h-full w-full object-contain object-bottom"
          sizes="(max-width: 640px) 144px, 176px"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative shrink-0 ${sizeClass[size]} ${className}`.trim()}
      aria-hidden={size !== "hero" ? true : undefined}
    >
      <Image
        src={mascot.src}
        alt={size === "hero" ? mascot.alt : ""}
        width={mascot.width}
        height={mascot.height}
        priority={priority}
        className="h-full w-full object-contain object-center"
        sizes={
          size === "hero"
            ? "(max-width: 1024px) 100vw, 58vw"
            : size === "lg"
              ? "128px"
              : "80px"
        }
      />
    </div>
  );
}
