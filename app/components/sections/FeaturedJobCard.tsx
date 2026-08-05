import Image from "next/image";
import { LineButton } from "@/app/components/ui/LineButton";
import { LINE_URL } from "@/app/lib/constants";
import { JOBS_PAGE, type Store } from "@/app/lib/stores";
import { MapPin, Wallet } from "lucide-react";

type FeaturedJobCardProps = {
  store: Store;
};

export function FeaturedJobCard({ store }: FeaturedJobCardProps) {
  const highlightPoint = store.recommendPoints[0];
  const displayFeatures = store.features.slice(0, 3);

  return (
    <article className="store-card flex h-full w-full flex-col overflow-hidden rounded-[22px] border border-border bg-surface shadow-[var(--shadow-soft)]">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[linear-gradient(145deg,#fdf2f0_0%,#f6ece9_100%)]">
        {store.image ? (
          <Image
            src={store.image}
            alt={`${store.name}の店内イメージ`}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) calc(100vw - 40px), (max-width: 1200px) 50vw, 380px"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center">
            <span className="rounded-full bg-surface/80 px-3 py-1 text-xs font-medium text-pink-dark">
              {store.area} · {store.category}
            </span>
            <span className="font-serif text-base text-text">{store.name}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:gap-3.5 sm:p-5">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted sm:text-sm">
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {store.area}
            </span>
            <span>{store.category}</span>
          </div>
          <h3 className="font-serif text-xl leading-snug text-text sm:text-[1.375rem]">
            {store.name}
          </h3>
        </div>

        <div className="flex items-start gap-2">
          <Wallet
            className="mt-0.5 h-4 w-4 shrink-0 text-pink-dark"
            aria-hidden="true"
          />
          <p className="text-base font-medium leading-snug text-text">{store.salary}</p>
        </div>

        <ul className="flex flex-wrap gap-1.5">
          {displayFeatures.map((feature) => (
            <li
              key={feature}
              className="rounded-full bg-pink-light px-2.5 py-1 text-xs text-pink-dark"
            >
              {feature}
            </li>
          ))}
        </ul>

        <p className="line-clamp-3 flex-1 text-[0.9375rem] leading-relaxed text-muted">
          {highlightPoint}
        </p>

        <LineButton
          href={LINE_URL}
          fullWidth
          className="mt-auto min-h-[52px] shadow-[0_6px_18px_rgb(6_199_85/0.28)]"
        >
          {JOBS_PAGE.storeLineLabel}
        </LineButton>
      </div>
    </article>
  );
}
