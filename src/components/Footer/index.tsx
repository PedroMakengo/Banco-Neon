import { FaYoutube } from "react-icons/fa";
import { FooterApp, Content } from "./style";

import Youtube from "../../assets/images/Vector-6.svg";
import Instagram from "../../assets/images/Vector-7.svg";
import Linkedin from "../../assets/images/Vector-8.svg";
import Facebook from "../../assets/images/Vector-9.svg";
import Twitter from "../../assets/images/Vector-10.svg";

import Logo from "../../assets/images/logo-neon-color-1.svg";

export function Footer() {
  return (
    <FooterApp>
      <Content>
        <div className="footer-top">
          <img src={Logo} alt="" />
          <div className="share-redes">
            <span>Acompanhe nas redes</span>
            <div className="redes">
              <a href="#y">
                <img src={Youtube} alt="" />
              </a>
              <a href="#l">
                <img src={Linkedin} alt="" />
              </a>
              <a href="#f">
                <img src={Facebook} alt="" />
              </a>
              <a href="#i">
                <img src={Instagram} alt="" />
              </a>
              <a href="#t">
                <img src={Twitter} alt="" />
              </a>
            </div>
          </div>
        </div>
      </Content>
    </FooterApp>
  );
}
