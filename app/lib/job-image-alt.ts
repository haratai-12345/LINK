import type { Job } from "@/app/lib/jobs";

export function getJobImageAlt(job: Job, photoNumber?: number): string {
  const storeLabel = job.name.replace(/（.+）/, "").trim();
  const suffix = photoNumber && photoNumber > 1 ? `（${photoNumber}）` : "";
  return `${job.area} ${storeLabel} 店内${suffix}`;
}
