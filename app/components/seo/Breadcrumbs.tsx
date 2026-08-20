import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/app/components/seo/JsonLd";
import { buildBreadcrumbJsonLd, type BreadcrumbItem } from "@/app/lib/seo";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = buildBreadcrumbJsonLd(items);

  return (
    <nav aria-label="パンくずリスト" className="mb-5 sm:mb-6">
      <JsonLd data={jsonLd} />
      <ol className="flex flex-wrap items-center gap-1 text-xs leading-relaxed text-muted sm:text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex min-w-0 items-center gap-1">
              {index > 0 && (
                <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#d4d0cc]" aria-hidden="true" />
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="break-words transition-colors hover:text-charcoal"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="break-words text-charcoal" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
