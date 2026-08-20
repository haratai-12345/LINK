import type { MetadataRoute } from "next";
import { getAllAreaPageSlugs } from "@/app/lib/job-areas";
import { getAllJobs } from "@/app/lib/jobs";
import { getCanonicalUrl } from "@/app/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const jobs = getAllJobs();
  const areaSlugs = getAllAreaPageSlugs();
  const lastModified = new Date();

  return [
    {
      url: getCanonicalUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: getCanonicalUrl("/jobs"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...areaSlugs.map((slug) => ({
      url: getCanonicalUrl(`/jobs/${slug}`),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...jobs.map((job) => ({
      url: getCanonicalUrl(`/jobs/${job.slug}`),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
