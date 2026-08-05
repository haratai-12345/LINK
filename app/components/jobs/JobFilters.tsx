"use client";

import { useState } from "react";
import {
  DEFAULT_STORE_FILTERS,
  FILTER_AREAS,
  FILTER_CATEGORIES,
  FILTER_EMPLOYMENT_TYPES,
  type StoreFilterValues,
} from "@/app/lib/stores";

type JobFiltersProps = {
  onChange: (filters: StoreFilterValues) => void;
};

const TOGGLE_FILTERS = [
  { key: "beginnerFriendly" as const, label: "未経験歓迎" },
  { key: "highPay" as const, label: "高時給" },
  { key: "pickup" as const, label: "送りあり" },
  { key: "dormitory" as const, label: "寮あり" },
  { key: "dailyPay" as const, label: "日払いあり" },
];

export function JobFilters({ onChange }: JobFiltersProps) {
  const [filters, setFilters] = useState<StoreFilterValues>(DEFAULT_STORE_FILTERS);

  const update = (patch: Partial<StoreFilterValues>) => {
    const next = { ...filters, ...patch };
    setFilters(next);
    onChange(next);
  };

  const selectClassName =
    "h-11 w-full rounded-2xl border border-[#f0ddd8] bg-surface px-3 text-sm text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink-dark";

  return (
    <div className="rounded-[24px] border border-[#f0ddd8] bg-surface p-4 shadow-[var(--shadow-soft)] sm:p-5">
      <h2 className="mb-4 text-sm font-medium text-text sm:text-base">
        条件で絞り込む
      </h2>

      <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
        <label className="flex flex-col gap-1.5 text-xs text-muted">
          エリア
          <select
            className={selectClassName}
            value={filters.area}
            onChange={(e) => update({ area: e.target.value })}
          >
            <option value="">すべて</option>
            {FILTER_AREAS.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1.5 text-xs text-muted">
          業種
          <select
            className={selectClassName}
            value={filters.category}
            onChange={(e) => update({ category: e.target.value })}
          >
            <option value="">すべて</option>
            {FILTER_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1.5 text-xs text-muted">
          雇用形態
          <select
            className={selectClassName}
            value={filters.employmentType}
            onChange={(e) => update({ employmentType: e.target.value })}
          >
            <option value="">すべて</option>
            {FILTER_EMPLOYMENT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {TOGGLE_FILTERS.map(({ key, label }) => {
          const active = filters[key];
          return (
            <button
              key={key}
              type="button"
              aria-pressed={active}
              className={`min-h-10 rounded-full border px-4 py-2 text-xs font-medium transition-colors sm:text-sm ${
                active
                  ? "border-pink-dark bg-pink-light text-pink-dark"
                  : "border-[#f0ddd8] bg-ivory text-text hover:border-pink hover:bg-pink-light/50"
              }`}
              onClick={() => update({ [key]: !active })}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
