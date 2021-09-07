import { FaArrowRight } from "react-icons/fa";

interface ItemAppsProps {
  src: string;
  title: string;
  describe: string;
}
export function ItemApps({ src, title, describe }: ItemAppsProps) {
  return (
    <div className="item">
      <img src={src} alt="" />
      <div>
        <h2>{title}</h2>
        <span>{describe}</span>
      </div>
      <FaArrowRight />
    </div>
  );
}
