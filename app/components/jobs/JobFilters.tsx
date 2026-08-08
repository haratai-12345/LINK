"use client";

import { useState } from "react";
import {
  DEFAULT_JOB_FILTERS,
  FILTER_AREAS,
  FILTER_INDUSTRIES,
  FILTER_SHIFTS,
  type JobFilterValues,
} from "@/app/lib/jobs";

type JobFiltersProps = {
  onChange: (filters: JobFilterValues) => void;
};

const TOGGLE_FILTERS = [
  { key: "beginnerFriendly" as const, label: "未経験歓迎" },
  { key: "highPay" as const, label: "高時給" },
  { key: "pickup" as const, label: "送りあり" },
  { key: "dailyPayAvailable" as const, label: "日払いあり" },
];

export function JobFilters({ onChange }: JobFiltersProps) {
  const [filters, setFilters] = useState<JobFilterValues>(DEFAULT_JOB_FILTERS);

  const update = (patch: Partial<JobFilterValues>) => {
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
            value={filters.industry}
            onChange={(e) => update({ industry: e.target.value })}
          >
            <option value="">すべて</option>
            {FILTER_INDUSTRIES.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1.5 text-xs text-muted">
          シフト
          <select
            className={selectClassName}
            value={filters.shift}
            onChange={(e) => update({ shift: e.target.value })}
          >
            <option value="">すべて</option>
            {FILTER_SHIFTS.map((shift) => (
              <option key={shift} value={shift}>
                {shift}
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
