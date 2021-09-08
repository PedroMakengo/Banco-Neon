import { Container, Content } from "./style";
import { ItemAccount } from "./ItemAccount";

import NeonPhone from "../../assets/images/Group 138-1.png";
import CartaoVisa from "../../assets/images/Group 91.svg";

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
            <ItemAccount
              src={CartaoVisa}
              title="Carta visa internacional"
              describe="Teste"
            />
            <ItemAccount
              src={CartaoVisa}
              title="Zero mensalidade e anuidade"
              describe="Teste"
            />
            <ItemAccount
              src={CartaoVisa}
              title="Investimento que rende mais que a poupança"
              describe="Teste"
            />
          </div>
        </div>
        <img src={NeonPhone} alt="" />
      </Content>
    </Container>
  );
}
