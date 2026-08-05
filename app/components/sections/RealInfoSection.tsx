import { Container } from "@/app/components/ui/Container";
import { LineButton } from "@/app/components/ui/LineButton";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { LINE_URL, REAL_INFO_SECTION, type RealInfoIcon } from "@/app/lib/constants";
import {
  Banknote,
  CalendarClock,
  CircleDollarSign,
  UserRoundCheck,
  Users,
} from "lucide-react";

function RealInfoIconGraphic({ icon }: { icon: RealInfoIcon }) {
  const className = "h-5 w-5 text-text";

  switch (icon) {
    case "salary":
      return <Banknote className={className} strokeWidth={1.75} aria-hidden="true" />;
    case "criteria":
      return <Users className={className} strokeWidth={1.75} aria-hidden="true" />;
    case "paySystem":
      return (
        <CircleDollarSign className={className} strokeWidth={1.75} aria-hidden="true" />
      );
    case "shift":
      return (
        <CalendarClock className={className} strokeWidth={1.75} aria-hidden="true" />
      );
    case "fit":
      return (
        <UserRoundCheck className={className} strokeWidth={1.75} aria-hidden="true" />
      );
  }
}

export function RealInfoSection() {
  const lastIndex = REAL_INFO_SECTION.items.length - 1;

  return (
    <section
      aria-labelledby="real-info-heading"
      className="home-section bg-[linear-gradient(180deg,#fafafa_0%,#ffffff_100%)]"
    >
      <Container className="home-container !max-w-[75rem] !px-5 lg:!px-8">
        <SectionHeading
          align="left"
          title={REAL_INFO_SECTION.title}
          description={REAL_INFO_SECTION.description}
          className="home-section-heading max-w-2xl"
          titleId="real-info-heading"
        />

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:gap-6">
          {REAL_INFO_SECTION.items.map((item, index) => (
            <li
              key={item.title}
              className={`flex min-w-0 ${
                index === lastIndex ? "md:col-span-2 md:justify-center" : ""
              }`}
            >
              <article
                className={`flex h-full w-full rounded-[20px] border border-[#e5e5e5] bg-surface p-5 shadow-[0_2px_12px_rgb(32_37_36/0.04)] sm:p-6 ${
                  index === lastIndex ? "md:max-w-[calc(50%-0.625rem)]" : ""
                }`}
              >
                <div className="flex w-full items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#e5e5e5] bg-[#f7f7f7]">
                    <RealInfoIconGraphic icon={item.icon} />
                  </span>
                  <div className="flex min-h-[4.75rem] flex-col gap-2">
                    <h3 className="font-serif text-base leading-snug text-text sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-[0.9375rem] leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-2xl text-center text-[0.9375rem] leading-relaxed text-muted sm:mt-10 sm:text-base">
          {REAL_INFO_SECTION.closing}
        </p>

        <div className="mt-8 flex justify-center sm:mt-10">
          <LineButton
            href={LINE_URL}
            fullWidth
            className="min-h-[52px] max-w-md shadow-[0_6px_18px_rgb(6_199_85/0.28)] sm:min-w-[18rem] sm:max-w-none"
          >
            {REAL_INFO_SECTION.buttonLabel}
          </LineButton>
        </div>
      </Container>
    </section>
  );
}
