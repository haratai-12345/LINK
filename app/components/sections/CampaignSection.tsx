import { Container } from "@/app/components/ui/Container";
import { CAMPAIGNS } from "@/app/lib/constants";

function SparkleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2Z"
        fill="currentColor"
        opacity="0.35"
      />
      <path
        d="M18 14l.8 2.8L21.6 17l-2.8.8L18 20.6l-.8-2.8L14.4 17l2.8-.8L18 14Z"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  );
}

export function CampaignSection() {
  return (
    <section
      aria-labelledby="campaign-heading"
      className="border-t border-border/40 bg-ivory py-6 sm:py-8"
    >
      <Container>
        <h2 id="campaign-heading" className="sr-only">
          キャンペーン
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {CAMPAIGNS.map((campaign) => {
            const isPink = campaign.variant === "pink";

            return (
              <article
                key={campaign.id}
                className={`campaign-card group relative overflow-hidden rounded-2xl p-5 sm:p-6 ${
                  isPink
                    ? "bg-[linear-gradient(135deg,#fce8e4_0%,#fdf2f0_45%,#ffffff_100%)]"
                    : "bg-[linear-gradient(135deg,#fff8ee_0%,#fdf6ec_45%,#ffffff_100%)]"
                }`}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/40 blur-2xl"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-4 -left-4 opacity-20"
                >
                  <SparkleIcon />
                </div>

                <span
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[0.6875rem] font-medium backdrop-blur-sm ${
                    isPink
                      ? "bg-white/70 text-pink-dark ring-1 ring-[#f0d4cf]"
                      : "bg-white/70 text-[#b8860b] ring-1 ring-[#ead9b8]"
                  }`}
                >
                  {isPink ? "♡" : "✦"} {campaign.badge}
                </span>

                <p className="mt-3 text-xs text-muted sm:text-sm">{campaign.title}</p>
                <p
                  className={`mt-1 font-serif text-xl leading-tight sm:text-2xl ${
                    isPink ? "text-pink-dark" : "text-[#c9940a]"
                  }`}
                >
                  {campaign.highlight}
                </p>
                <p className="mt-3 text-[0.625rem] leading-relaxed text-muted sm:text-xs">
                  ※{campaign.note}
                </p>

                <div
                  aria-hidden="true"
                  className={`absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full text-lg opacity-60 transition-transform duration-300 group-hover:scale-110 ${
                    isPink ? "bg-white/50" : "bg-white/60"
                  }`}
                >
                  {isPink ? "🎁" : "💰"}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
