import { Container } from "@/app/components/ui/Container";
import { LineButton } from "@/app/components/ui/LineButton";
import { LINE_URL } from "@/app/lib/constants";
import { JOBS_PAGE } from "@/app/lib/jobs";

export function JobsBottomCta() {
  return (
    <section
      aria-labelledby="jobs-bottom-cta"
      className="border-t border-[#f0ddd8] bg-[linear-gradient(180deg,#fff9f7_0%,#ffffff_100%)] py-12 sm:py-14"
    >
      <Container className="!max-w-[75rem] !px-4 text-center sm:!px-6 lg:!px-8">
        <h2
          id="jobs-bottom-cta"
          className="font-serif text-xl text-text sm:text-2xl"
        >
          {JOBS_PAGE.bottomCtaTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
          {JOBS_PAGE.bottomCtaDescription}
        </p>
        <div className="mt-6 flex justify-center">
          <LineButton
            href={LINE_URL}
            large
            fullWidth
            className="shadow-[0_8px_24px_rgb(6_199_85/0.3)] sm:w-fit sm:min-w-[20rem]"
          />
        </div>
      </Container>
    </section>
  );
}
