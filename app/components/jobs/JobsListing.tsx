"use client";

import { useMemo, useState } from "react";
import { Container } from "@/app/components/ui/Container";
import { JobFilters } from "@/app/components/jobs/JobFilters";
import { StoreCard } from "@/app/components/jobs/StoreCard";
import {
  DEFAULT_STORE_FILTERS,
  filterStores,
  getPublishedStores,
  type StoreFilterValues,
} from "@/app/lib/stores";

export function JobsListing() {
  const publishedStores = useMemo(() => getPublishedStores(), []);
  const [filters, setFilters] = useState<StoreFilterValues>(DEFAULT_STORE_FILTERS);

  const filteredStores = useMemo(
    () => filterStores(publishedStores, filters),
    [publishedStores, filters],
  );

  return (
    <section aria-label="店舗一覧" className="bg-ivory pb-16 pt-6 sm:pb-20 sm:pt-8">
      <Container className="!max-w-[75rem] !px-4 sm:!px-6 lg:!px-8">
        <div className="mb-6 sm:mb-8">
          <JobFilters onChange={setFilters} />
        </div>

        {filteredStores.length === 0 ? (
          <p className="rounded-[24px] border border-[#f0ddd8] bg-surface px-4 py-10 text-center text-sm text-muted">
            条件に合う店舗が見つかりませんでした。LINEでご希望をお聞かせください。
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {filteredStores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
