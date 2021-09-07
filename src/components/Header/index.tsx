import { Container, ContentHeader, Content, Banner } from "./style";

import logo from "../../assets/images/logo-neon-color.svg";
import Cartao from "../../assets/images/Group 6.svg";
import Conta from "../../assets/images/Group 11.svg";
import Money from "../../assets/images/Group 5.svg";
import { Nav } from "./Nav";
import { ItemOptions } from "./ItemOptions";

export function Header() {
  return (
    <Container>
      <ContentHeader>
        <Content>
          <img src={logo} alt="Logo" />
          <Nav />
        </Content>
      </ContentHeader>
      <Banner>
        <div className="account">
          <span>Abra sua conta, é só baixar o app!</span>
          <h1>A conta digital certa pra cuidar bem do seu dinheiro</h1>
          <button>Abra sua contan digital</button>

          <div className="icons">
            <ItemOptions title="Cartão sem anuidade" src={Cartao} />
            <ItemOptions title="Conta digital 100% grátis" src={Conta} />
            <ItemOptions title="Seu dinheiro rendendo mais" src={Money} />
          </div>
        </div>

        <div className="fundo">
          <h1>Banco 100% digital</h1>
          <div className="digital"></div>
        </div>
      </Banner>
    </Container>
  );
}
