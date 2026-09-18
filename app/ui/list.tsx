export default function List({
  data,
  large,
}: {
  data: { title: string; desc: string; note?: string }[];
  large?: boolean;
}) {
  return (
    <ul
      className={`cursor-default flex flex-col ${large ? "gap-6" : "gap-4"} tracking-[-0.008rem]`}
    >
      {data.map((item, index) => (
        <li
          key={index}
          className="hover:bg-[#f3f3f3] transition-colors duration-200 pl-0.5"
        >
          <h4
            className={`font-semibold text-stone-900 ${
              large ? "text-base" : "text-sm"
            } leading-tight mb-0.5`}
          >
            {item.title}
          </h4>
          {item.note && (
            <p
              className={`${
                large ? "text-sm" : "text-xs"
              } text-stone-600 mb-1 font-light`}
            >
              {item.note}
            </p>
          )}
          <p
            className={`text-stone-600 leading-snug ${
              large ? "text-[0.9rem]" : "text-[0.85rem]"
            }`}
          >
            {item.desc}
          </p>
        </li>
      ))}
    </ul>
  );
}
