import { SectionApp, ContentApp } from "./style";

import CartaoCredito from "../../assets/images/Group 50.svg";
import SemTaxas from "../../assets/images/Group 65.svg";
import MaisInvestimento from "../../assets/images/Group 67.svg";

import { ItemApps } from "./ItemApps";

export function AppNeon() {
  return (
    <SectionApp>
      <ContentApp>
        <div></div>
        <div className="app">
          <h1>Resolva sua vida direto pelo app Neon!</h1>
          <div className="itens">
            <ItemApps
              src={CartaoCredito}
              title="Cartão de Crédito sem anuidade"
              describe="Conta digital com cartão de crédito sem anuidade e sem complicações"
            />
            <ItemApps
              src={SemTaxas}
              title="Sem taxas"
              describe="Conta digital com cartão de crédito sem anuidade e sem complicações"
            />
            <ItemApps
              src={MaisInvestimento}
              title="Mais investimentos"
              describe="Conta digital com cartão de crédito sem anuidade e sem complicações"
            />
            <a href="#produtos">Conheça outros Produtos</a>
          </div>
        </div>
      </ContentApp>
    </SectionApp>
  );
}
