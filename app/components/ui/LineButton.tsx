import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { LINE_CTA_LABEL } from "@/app/lib/constants";

type LineButtonBase = {
  children?: ReactNode;
  className?: string;
  fullWidth?: boolean;
  compact?: boolean;
  large?: boolean;
};

type LineButtonAsLink = LineButtonBase &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type LineButtonAsButton = LineButtonBase &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LineButtonProps = LineButtonAsLink | LineButtonAsButton;

function LineIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}

const baseClass =
  "line-btn inline-flex items-center justify-center gap-2.5 rounded-[24px] border border-transparent bg-line-green font-bold tracking-wide text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-line-green disabled:pointer-events-none disabled:opacity-50";

export function LineButton(props: LineButtonProps) {
  const {
    children = LINE_CTA_LABEL,
    className = "",
    fullWidth,
    compact,
    large,
    ...rest
  } = props;

  const sizeClass = large
    ? "min-h-14 px-8 py-4 text-base sm:min-h-16 sm:px-10 sm:text-lg"
    : compact
      ? "min-h-10 px-4 py-2 text-xs sm:text-sm"
      : "min-h-11 px-6 py-2.5 text-sm sm:px-7";

  const combined = `${baseClass} ${sizeClass} ${fullWidth ? "w-full" : ""} ${className}`.trim();

  const content = (
    <>
      <LineIcon size={large ? 24 : compact ? 16 : 22} />
      <span>{children}</span>
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = rest as LineButtonAsLink;
    if (href.startsWith("http")) {
      return (
        <a
          href={href}
          className={combined}
          target="_blank"
          rel="noopener noreferrer"
          {...linkProps}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combined} {...linkProps}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={combined} {...(rest as LineButtonAsButton)}>
      {content}
    </button>
  );
}
