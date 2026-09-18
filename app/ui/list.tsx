export default function List({
  data,
}: {
  data: { title: string; desc: string; note?: string }[];
}) {
  return (
    <ul className={`cursor-default flex flex-col gap-4`}>
      {data.map((item, index) => (
        <li
          key={index}
          className="hover:bg-[#f3f3f3] transition-colors duration-200 pl-0.5"
        >
          <h4 className={`font-semibold text-stone-900 leading-tight mb-0.25`}>
            {item.title}
          </h4>
          {item.note && (
            <p className={`text-sm text-stone-800 mb-0.25 font-light`}>
              {item.note}
            </p>
          )}
          <p className={`text-stone-600 leading-snug text-sm`}>{item.desc}</p>
        </li>
      ))}
    </ul>
  );
}
