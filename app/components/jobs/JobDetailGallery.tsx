import Image from "next/image";
import type { JobImage } from "@/app/lib/jobs";

type JobDetailGalleryProps = {
  jobName: string;
  images: JobImage[];
};

export function JobDetailGallery({ jobName, images }: JobDetailGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  const [mainImage, ...subImages] = images;

  return (
    <section
      aria-label={`${jobName}の店内写真`}
      className="overflow-hidden rounded-[var(--radius-ui)] border border-[#e8e6e4] bg-surface shadow-[0_2px_16px_rgb(44_42_40/0.06)]"
    >
      <div className="relative aspect-[16/10] max-h-[13.75rem] w-full overflow-hidden sm:max-h-[17.5rem]">
        <Image
          src={mainImage.src}
          alt={mainImage.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 672px) 100vw, 672px"
        />
      </div>

      {subImages.length > 0 && (
        <div
          className={`grid gap-px bg-[#f0eeec] ${
            subImages.length === 1 ? "grid-cols-1" : "grid-cols-2"
          }`}
        >
          {subImages.map((image) => (
            <div
              key={image.src}
              className="relative aspect-[16/10] max-h-[7.5rem] overflow-hidden bg-surface sm:max-h-[8.75rem]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 672px) 50vw, 336px"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
