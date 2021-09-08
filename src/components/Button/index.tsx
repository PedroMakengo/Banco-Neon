import { ReactChildren } from "react";
import { ButtonApp, ButtonDownloader } from "./style";

interface ButtonProps {
  title?: string;
  type: string;
  children?: ReactChildren;
}
export function Button({ title, type, children }: ButtonProps) {
  return type === "btn-downloader" ? (
    <ButtonDownloader>{children}</ButtonDownloader>
  ) : (
    <ButtonApp>{title}</ButtonApp>
  );
}
