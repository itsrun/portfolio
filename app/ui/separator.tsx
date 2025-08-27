export default function Separator({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center w-full ${className}`}>
      <span className="mr-2 whitespace-nowrap text-xs italic text-gray-500">
        {name}
      </span>
      <div className="flex-1 h-px bg-gray-300" />
    </div>
  );
}
