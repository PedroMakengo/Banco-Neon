import { ButtonApp, ButtonDownloader } from "./style";

interface ButtonProps {
  title?: string;
  type: string;
}
export function Button({ title, type }: ButtonProps) {
  return type === "btn-downloader"
    ? console.log("Olá Mundo")
    : console.log("Novamente");
}
