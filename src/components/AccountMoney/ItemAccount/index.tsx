interface ItemAccountProps {
  src: string;
  title: string;
  describe: string;
}

export function ItemAccount({ src, title, describe }: ItemAccountProps) {
  return (
    <div className="item">
      <img src={src} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{describe}</p>
      </div>
    </div>
  );
}
