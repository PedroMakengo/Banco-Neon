import { Container, ContentHeader, Content } from "./style";

import logo from "../../assets/images/logo-neon-color.svg";

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
      <div>
        <span>Abra sua conta, é só baixar o app!</span>
      </div>
    </Container>
  );
}
