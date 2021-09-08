import { Container, Content } from "./style";

import { FaApple } from "react-icons/fa";

import BaixarImg from "../../assets/images/Group 9.svg";

export function NeonPejota() {
  return (
    <Container>
      <Content>
        <div className="BaixaApp">
          <img src={BaixarImg} alt="" />

          <div className="conteudoApp">
            <h2>Baixe nosso app</h2>
            <p>
              Que tal abrir uma conta digital para ver como a gente faz a sua
              vida muito mais simples
            </p>
            <div className="buttons">
              <button>
                <FaApple />
                <div>
                  <small>Download via</small>
                  <span>Apple Store</span>
                </div>
              </button>

              <button>
                <FaApple />
                <div>
                  <small>Download via</small>
                  <span>Google Play</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="NeonBanner"></div>
      </Content>
    </Container>
  );
}
