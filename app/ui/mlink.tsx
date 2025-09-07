import Link from "next/link";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  inplace?: boolean;
  preview?: boolean;
};

export default function MLink({
  href,
  children,
  className,
  inplace,
  preview = false,
}: LinkProps) {
  return (
    <span className="relative group">
      <Link
        href={href}
        className={`text-[#00275c] underline hover:text-pink-800 underline-offset-2 decoration-blue-400 hover:decoration-pink-400 decoration-1 ${className} transition-colors duration-200`}
        target={inplace ? "_self" : "_blank"}
        rel="noopener noreferrer"
      >
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
