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
          <div className="items">
            <div className="item">
              <img src="" alt="" />
              <div>
                <h3>Cartão de visita</h3>
                <p>Tenha felicidades e benefícios para o seu dia a dia.</p>
              </div>
            </div>
            <div className="item">
              <img src="" alt="" />
              <div>
                <h3>Cartão de visita</h3>
                <p>Tenha felicidades e benefícios para o seu dia a dia.</p>
              </div>
            </div>
            <div className="item">
              <img src="" alt="" />
              <div>
                <h3>Cartão de visita</h3>
                <p>Tenha felicidades e benefícios para o seu dia a dia.</p>
              </div>
            </div>
          </div>
        </div>
        <img src={NeonPhone} alt="" />
      </Content>
    </Container>
  );
}
