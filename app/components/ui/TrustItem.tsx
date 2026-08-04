type TrustItemProps = {
  label: string;
};

export function TrustItem({ label }: TrustItemProps) {
  return (
    <li className="flex min-w-0 flex-1 flex-col items-center gap-2 text-center">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#f0d4cf] bg-[linear-gradient(145deg,#ffffff_0%,#fdf2f0_100%)] shadow-[0_4px_14px_rgb(240_212_207/0.45)] transition-transform duration-300 hover:scale-105 sm:h-[3.75rem] sm:w-[3.75rem]">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="text-pink-dark"
        >
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.25" />
          <path
            d="M8 12.5l2.5 2.5 5.5-5.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-[0.6875rem] font-medium leading-tight text-text sm:text-xs">
        {label}
      </span>
    </li>
  );
}
