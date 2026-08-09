import type { MetadataRoute } from "next";
import { getAllJobs } from "@/app/lib/jobs";
import { getCanonicalUrl } from "@/app/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const jobs = getAllJobs();
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
    ...jobs.map((job) => ({
      url: getCanonicalUrl(`/jobs/${job.slug}`),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
