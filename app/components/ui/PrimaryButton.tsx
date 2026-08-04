import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
};

type PrimaryButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type PrimaryButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type PrimaryButtonProps = PrimaryButtonAsLink | PrimaryButtonAsButton;

const baseClassName =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-md)] border border-transparent px-5 py-2.5 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark disabled:pointer-events-none disabled:opacity-50";

const variantClassName =
  "bg-primary-dark text-surface hover:bg-[#4a7a75] active:bg-[#3f6864]";

function combineClassName(
  fullWidth: boolean | undefined,
  className: string,
): string {
  return `${baseClassName} ${variantClassName} ${fullWidth ? "w-full" : ""} ${className}`.trim();
}

export function PrimaryButton(props: PrimaryButtonProps) {
  const { children, className = "", fullWidth, ...rest } = props;
  const combinedClassName = combineClassName(fullWidth, className);

  if ("href" in props && props.href) {
    const { href, ...linkProps } = rest as PrimaryButtonAsLink;
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

  const buttonProps = rest as PrimaryButtonAsButton;

  return (
    <button type="button" className={combinedClassName} {...buttonProps}>
      {children}
    </button>
  );
}
