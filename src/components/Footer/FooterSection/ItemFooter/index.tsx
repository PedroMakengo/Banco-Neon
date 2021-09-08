interface ItemFooterProps {
  title?: string;
  data?: string[];
}
export function ItemFooter({ data, title }: ItemFooterProps) {
  console.log(data);
  return (
    <div className="footer-item">
      <h2>{title}</h2>
      <nav>
        {data?.map((e) => (
          <a href="data">{e}</a>
        ))}
      </nav>
    </div>
  );
}
