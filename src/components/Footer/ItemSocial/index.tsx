interface ItemSocialProps {
  src?: string;
  href?: string;
  alt?: string;
}

export function ItemSocial({ src, href, alt }: ItemSocialProps) {
  return (
    <a href={href}>
      <img src={src} alt={alt} />
    </a>
  );
}
