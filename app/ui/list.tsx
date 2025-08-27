export default function List({
  data,
  large,
}: {
  data: { title: string; desc: string; note?: string }[];
  large?: boolean;
}) {
  return (
    <ul className={`cursor-default flex flex-col ${large ? "gap-6" : "gap-4"}`}>
      {data.map((item, index) => (
        <li
          key={index}
          className="hover:bg-blue-50 transition-colors duration-200 pl-0.5"
        >
          <h4
            className={`font-semibold ${
              large ? "text-xl" : "text-lg"
            } leading-tight mb-0.5`}
          >
            {item.title}
          </h4>
          {item.note && (
            <p
              className={`${
                large ? "text-base" : "text-sm"
              } underline decoration-dotted underline-offset-2 text-gray-600 mb-0.5`}
            >
              {item.note}
            </p>
          )}
          <p
            className={`text-gray-600 leading-tight text-[0.95rem] ${
              large ? "text-lg" : "text-base"
            }`}
          >
            {item.desc}
          </p>
        </li>
      ))}
    </ul>
  );
}
