import Image from "next/image";
import { LineButton } from "@/app/components/ui/LineButton";
import { LINE_URL } from "@/app/lib/constants";
import { JOBS_PAGE, type Store } from "@/app/lib/stores";
import { MapPin, Clock, Wallet } from "lucide-react";

type StoreCardProps = {
  store: Store;
};

export function StoreCard({ store }: StoreCardProps) {
  return (
    <article className="store-card flex h-full flex-col overflow-hidden rounded-[24px] border border-[#f0ddd8] bg-surface shadow-[var(--shadow-soft)]">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[linear-gradient(145deg,#fdf2f0_0%,#f6ece9_100%)]">
        {store.image ? (
          <Image
            src={store.image}
            alt={`${store.name}の店内イメージ`}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) calc(100vw - 32px), (max-width: 1200px) 50vw, 380px"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center font-serif text-sm text-pink-dark/40"
          >
            {store.name}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <div>
          <div className="mb-1 flex flex-wrap items-center gap-2 text-xs text-muted">
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {store.area}
            </span>
            <span>{store.category}</span>
            <span>{store.employmentType}</span>
          </div>
          <h3 className="font-serif text-lg text-text sm:text-xl">{store.name}</h3>
        </div>

        <dl className="grid gap-2 text-sm text-muted">
          <div className="flex items-start gap-2">
            <Wallet className="mt-0.5 h-4 w-4 shrink-0 text-pink-dark" aria-hidden="true" />
            <div>
              <dt className="sr-only">給与目安</dt>
              <dd>{store.salary}</dd>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-pink-dark" aria-hidden="true" />
            <div>
              <dt className="sr-only">勤務時間</dt>
              <dd>{store.hours}</dd>
            </div>
          </div>
        </dl>

        <ul className="flex flex-wrap gap-1.5">
          {store.features.map((feature) => (
            <li
              key={feature}
              className="rounded-full bg-pink-light px-2.5 py-1 text-xs text-pink-dark"
            >
              {feature}
            </li>
          ))}
        </ul>

        <ul className="space-y-1.5 text-sm leading-relaxed text-muted">
          {store.recommendPoints.map((point) => (
            <li key={point} className="flex gap-2">
              <span aria-hidden="true" className="text-pink-dark">
                ✓
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <p className="text-xs text-muted">{JOBS_PAGE.lineDetailNote}</p>

        <LineButton
          href={LINE_URL}
          fullWidth
          className="mt-auto shadow-[0_6px_18px_rgb(6_199_85/0.28)]"
        >
          {JOBS_PAGE.storeLineLabel}
        </LineButton>
      </div>
    </article>
  );
}
