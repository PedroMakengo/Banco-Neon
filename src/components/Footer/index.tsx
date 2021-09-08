import { FooterApp, Content } from "./style";

import { FooterTop } from "./FooterTop";
import { FooterSection } from "./FooterSection";

export function Footer() {
  return (
    <FooterApp>
      <Content>
        <FooterTop />
        <FooterSection />
      </Content>
    </FooterApp>
  );
}
