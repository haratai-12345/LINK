import { Container } from "@/app/components/ui/Container";
import { LineButton } from "@/app/components/ui/LineButton";
import { JOBS_PAGE } from "@/app/lib/stores";
import { LINE_URL } from "@/app/lib/constants";

export function JobsPageHero() {
  return (
    <section
      aria-labelledby="jobs-heading"
      className="bg-[linear-gradient(180deg,#ffffff_0%,#fff9f7_100%)] py-10 sm:py-12"
    >
      <Container className="!max-w-[75rem] !px-4 sm:!px-6 lg:!px-8">
        <p className="mb-2 text-xs font-medium tracking-widest text-pink-dark uppercase">
          Jobs
        </p>
        <h1
          id="jobs-heading"
          className="font-serif text-2xl text-text sm:text-3xl"
        >
          {JOBS_PAGE.title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          {JOBS_PAGE.description}
        </p>
        <div className="mt-6">
          <LineButton
            href={LINE_URL}
            fullWidth
            className="shadow-[0_8px_24px_rgb(6_199_85/0.3)] sm:w-fit sm:min-w-[18rem]"
          />
        </div>
      </Container>
    </section>
  );
}
