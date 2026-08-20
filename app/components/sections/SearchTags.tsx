import Link from "next/link";
import { Container } from "@/app/components/ui/Container";
import { JOBS_PAGE_PATH, SEARCH_TAGS } from "@/app/lib/constants";
import { getAreaPagePath } from "@/app/lib/job-areas";
import { Search } from "lucide-react";

const TAG_HREF: Partial<Record<(typeof SEARCH_TAGS)[number], string>> = {
  "キャバクラ 千葉": getAreaPagePath("chiba"),
  "ガールズバー 船橋": getAreaPagePath("funabashi"),
  "ラウンジ 柏": getAreaPagePath("kashiwa"),
  "キャバクラ 松戸": getAreaPagePath("matsudo"),
};

export function SearchTags() {
  return (
    <section
      aria-labelledby="search-tags-heading"
      className="section-block bg-surface pb-12 pt-10 sm:pb-14 sm:pt-12 lg:pb-16"
    >
      <Container>
        <div className="section-heading mb-5 sm:mb-6">
          <h2
            id="search-tags-heading"
            className="flex items-center gap-2 font-serif text-xl text-text sm:text-2xl"
          >
            <Search className="h-5 w-5 text-pink-dark" aria-hidden="true" />
            人気検索条件
          </h2>
        </div>

        <ul className="flex flex-wrap gap-2.5 sm:gap-3">
          {SEARCH_TAGS.map((tag) => (
            <li key={tag}>
              <Link
                href={TAG_HREF[tag] ?? JOBS_PAGE_PATH}
                className="tag-pill inline-flex min-h-10 items-center rounded-full border border-[#f0ddd8] bg-ivory px-4 py-2 text-sm text-text"
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
