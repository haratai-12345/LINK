import Link from "next/link";
import { Container } from "@/app/components/ui/Container";
import { SEARCH_TAGS } from "@/app/lib/constants";

export function SearchTags() {
  return (
    <section
      aria-labelledby="search-tags-heading"
      className="bg-surface pb-8 pt-5 sm:pb-10 sm:pt-6"
    >
      <Container>
        <h2
          id="search-tags-heading"
          className="mb-3 flex items-center gap-1.5 text-sm font-medium text-text"
        >
          <span aria-hidden="true">🔍</span>
          人気検索条件
        </h2>

        <ul className="flex flex-wrap gap-2">
          {SEARCH_TAGS.map((tag) => (
            <li key={tag}>
              <Link
                href="#jobs"
                className="tag-pill inline-flex min-h-9 items-center rounded-full border border-[#f0d4cf] bg-ivory px-4 py-1.5 text-xs text-text sm:min-h-10 sm:text-sm"
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
