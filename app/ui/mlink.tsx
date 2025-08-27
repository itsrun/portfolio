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
  preview,
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
        <div className="absolute top-4 left-0 -translate-x-1/2 mt-2 w-[24rem] h-[18rem] bg-white shadow-2xl opacity-0 group-hover:opacity-100 hover:opacity-100 pointer-events-none group-hover:pointer-events-auto hover:pointer-events-auto transition-opacity z-10 overflow-hidden">
          <iframe
            src={href}
            title="Link Preview"
            className="w-full h-full"
            sandbox="allow-scripts allow-same-origin"
            loading="lazy"
          />
        </div>
      )}
    </span>
  );
}
