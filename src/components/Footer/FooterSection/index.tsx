import { ItemFooter } from "./ItemFooter";

export function FooterSection() {
  return (
    <div className="footer-section">
      <ItemFooter
        title="Produtos Neon"
        data={[
          "Cartão de crédito",
          "Cartão pré-pago",
          "Neon Mais",
          "Investimentos",
          "Empréstimo",
        ]}
      />
      <ItemFooter title="Cartão digital PJ" data={["Sou MEI", "Sou MEI"]} />
    </div>
  );
}
