export default function List({
  data,
}: {
  data: { title: string; desc: string; note?: string }[];
}) {
  return (
    <ul className="grid list-none gap-[18px]">
      {data.map((item, index) => (
        <li key={index}>
          <h4 className="text-[12px] leading-[1.4] font-medium">{item.title}</h4>
          {item.note && (
            <p className="mt-[4px] text-[11px] leading-[1.5]">{item.note}</p>
          )}
          <p className="mt-[4px] text-[11px] leading-[1.5] text-[#666]">{item.desc}</p>
        </li>
      ))}
    </ul>
  );
}
