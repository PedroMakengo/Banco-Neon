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
      <ItemFooter
        title="Blog"
        data={[
          "#focanodinheiro",
          "O poder da comunidade",
          "Desafio das 52 semanas",
          "Planilha de gastos",
        ]}
      />
      <ItemFooter
        title="Institucional"
        data={[
          "Conheça a Neon",
          "Trabalhe conosco",
          "Termos de uso",
          "Políticas de privacidade",
        ]}
      />
      <ItemFooter title="Ajuda" data={["Ouvidoria", "Fale conosco"]} />
    </div>
  );
}
