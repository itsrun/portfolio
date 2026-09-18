import Link from "next/link";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  inplace?: boolean;
  preview?: boolean;
  icon?: boolean;
};

export default function MLink({
  href,
  children,
  className,
  inplace,
  preview = false,
  icon = false,
}: LinkProps) {
  return (
    <span className="relative group">
      <Link
        href={href}
        className={`text-[#474E22] underline hover:text-[#BC1833] underline-offset-2 decoration-[#474E22] hover:decoration-[#BC1833] decoration-1 ${className} transition-colors duration-200`}
        target={inplace ? "_self" : "_blank"}
        rel="noopener noreferrer"
      >
        {icon && (
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 16 17"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="inline-block w-[1em] h-[1em] align-[-0.125em]"
          >
            <path d="M4 12 12 4M4 4h8v8" />
          </svg>
        )}
        {children}
      </Link>

      {preview && (
        <div
          // hidden until hover => no hit-testing, no scroll blocking
          className="absolute top-4 left-0 -translate-x-1/6 mt-2 w-[25rem] h-[22rem] bg-white shadow-2xl z-50 overflow-hidden hidden group-hover:block"
        >
          <iframe
            src={href}
            title="Link Preview"
            className="w-full h-full"
            sandbox="allow-scripts allow-same-origin"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </span>
  );
}
