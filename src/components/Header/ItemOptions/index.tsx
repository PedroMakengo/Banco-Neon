interface ItemOptionsProps {
  title: string;
  src?: string;
}
export function ItemOptions({ title, src }: ItemOptionsProps) {
  return (
    <div className="item">
      <div>
        <img src={src} alt="Cartão" />
      </div>
      <span>{title}</span>
    </div>
  );
}
