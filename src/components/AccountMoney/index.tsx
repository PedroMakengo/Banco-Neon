import { Container, Content } from "./style";
import { ItemAccount } from "./ItemAccount";

import NeonPhone from "../../assets/images/Group 138-1.png";
import CartaoVisa from "../../assets/images/Group 91.svg";
import { Button } from "../Button";

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
              describe="Tenho facilidade e benefícios para o seu dia a dia."
            />
            <ItemAccount
              src={CartaoVisa}
              title="Zero mensalidade e anuidade"
              describe="Não gaste grana pagando taxas desnecessárias."
            />
            <ItemAccount
              src={CartaoVisa}
              title="Investimento que rende mais que a poupança"
              describe="Invista o seu dinheiro de maneira mais rentável."
            />
          </div>
          <Button type="normal-button" />
        </div>
        <img src={NeonPhone} alt="Neon Phone" />
      </Content>
    </Container>
  );
}
