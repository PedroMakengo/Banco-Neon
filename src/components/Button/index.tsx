import { ReactNode } from "react";
import { ButtonApp, ButtonDownloader } from "./style";

interface ButtonProps {
  title?: string;
  type: string;
  children?: ReactNode;
}
export function Button({ title, type, children }: ButtonProps) {
  return type === "btn-downloader" ? (
    <ButtonDownloader>{children}</ButtonDownloader>
  ) : (
    <ButtonApp>{title || "Abra a sua conta digital"}</ButtonApp>
  );
}
