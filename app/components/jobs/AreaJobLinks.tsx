import Link from "next/link";
import { JOB_AREA_PAGES, getAreaPagePath } from "@/app/lib/job-areas";

type AreaJobLinksProps = {
  className?: string;
};

export function AreaJobLinks({ className = "" }: AreaJobLinksProps) {
  return (
    <nav aria-label="エリア別求人" className={className}>
      <ul className="flex flex-wrap gap-2">
        {JOB_AREA_PAGES.map((area) => (
          <li key={area.slug}>
            <Link
              href={getAreaPagePath(area.slug)}
              className="inline-flex min-h-10 items-center rounded-full border border-[#f0ddd8] bg-surface px-4 py-2 text-xs font-medium text-text transition-colors hover:border-pink hover:bg-pink-light/50 sm:text-sm"
            >
              {area.navLabel}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
