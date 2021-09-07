import { Container, Content } from "./style";

import NeonPhone from "../../assets/images/Group 138-1.png";

export function AccountMoneny() {
  return (
    <Container>
      <Content>
        <div className="account">
          <div className="account-title">
            <h1>Aproveite</h1>
            <h2>Domine o seu dinheiro com uma conta 100% digital</h2>
          </div>
        </div>
        <img src={NeonPhone} alt="" />
      </Content>
    </Container>
  );
}
