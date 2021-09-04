import { Container, ContentHeader, Content, Banner } from "./style";

import logo from "../../assets/images/logo-neon-color.svg";
import group141 from "../../assets/images/Group141.svg";

export function Header() {
  return (
    <Container>
      <ContentHeader>
        <Content>
          <img src={logo} alt="Logo" />
          <nav>
            <a href="#produto">Produtos</a>
            <a href="#conta">Conta Digital PJ</a>
            <a href="#quemsomos">Quem Somos</a>
            <a href="#ajuda">Ajuda</a>
            <a href="#abra">Abra a sua conta digital</a>
          </nav>
        </Content>
      </ContentHeader>
      <Banner>
        <div className="account">
          <span>Abra sua conta, é só baixar o app!</span>
          <h1>A conta digital certa pra cuidar bem do seu dinheiro</h1>
          <button>Abra sua contan digital</button>

          <div>
            <div>
              <img src="" alt="" />
              <span>Cartão sem anuidade</span>
            </div>
            <div>
              <img src="" alt="" />
              <span>Conta digital 100% grátis</span>
            </div>
            <div>
              <img src="" alt="" />
              <span>Seu dinheiro rendendo mais</span>
            </div>
          </div>
        </div>

        <div className="digital">
          <h1>Banco 100% digital</h1>
        </div>
      </Banner>
    </Container>
  );
}
