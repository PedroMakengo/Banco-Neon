import { ButtonApp } from "./style";

interface ButtonProps {
  title?: string;
}
export function Button({ title }: ButtonProps) {
  return <ButtonApp>{title}</ButtonApp>;
}
