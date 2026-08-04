import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
};

type SecondaryButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type SecondaryButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type SecondaryButtonProps = SecondaryButtonAsLink | SecondaryButtonAsButton;

const baseClassName =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-md)] border border-border bg-surface px-5 py-2.5 text-sm font-medium tracking-wide text-text transition-colors duration-200 hover:border-primary hover:bg-subtle focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark disabled:pointer-events-none disabled:opacity-50";

function combineClassName(
  fullWidth: boolean | undefined,
  className: string,
): string {
  return `${baseClassName} ${fullWidth ? "w-full" : ""} ${className}`.trim();
}

export function SecondaryButton(props: SecondaryButtonProps) {
  const { children, className = "", fullWidth, ...rest } = props;
  const combinedClassName = combineClassName(fullWidth, className);

  if ("href" in props && props.href) {
    const { href, ...linkProps } = rest as SecondaryButtonAsLink;
    const isExternal = href.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClassName}
          target="_blank"
          rel="noopener noreferrer"
          {...linkProps}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClassName} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as SecondaryButtonAsButton;

  return (
    <button type="button" className={combinedClassName} {...buttonProps}>
      {children}
    </button>
  );
}
