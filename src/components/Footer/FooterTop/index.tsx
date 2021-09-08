import Logo from "../../../assets/images/logo-neon-color-1.svg";

import Youtube from "../../../assets/images/Vector-6.svg";
import Instagram from "../../../assets/images/Vector-7.svg";
import Linkedin from "../../../assets/images/Vector-8.svg";
import Facebook from "../../../assets/images/Vector-9.svg";
import Twitter from "../../../assets/images/Vector-10.svg";
import { ItemSocial } from "./ItemSocial";

export function FooterTop() {
  return (
    <div className="footer-top">
      <img src={Logo} alt="" />
      <div className="share-redes">
        <span>Acompanhe nas redes</span>
        <div className="redes">
          <ItemSocial href="#youtube" src={Youtube} />
          <ItemSocial href="#linkedin" src={Linkedin} />
          <ItemSocial href="#fa" src={Facebook} />
          <ItemSocial href="#instagram" src={Instagram} />
          <ItemSocial href="#twitter" src={Twitter} />
        </div>
      </div>
    </div>
  );
}
