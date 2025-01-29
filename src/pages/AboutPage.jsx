const AboutPage = () => {
  return (
    <div id="container-4-col" className="m-4">
      <div className="container-img col-2">
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/People-meeting-and-discussing-growth-statistics-on-tablet-/960x0.jpg?format=jpg&width=1440"
          alt=""
        />
      </div>
      <div className="col-2">
        <h2>Cadastro de Produtos</h2>
        <ul>
          <li>
            Cadastro de novos produtos com informações como nome, descrição,
            categoria, preço, código de barras, fornecedor e imagem.
          </li>
          <li>Edição e atualização de produtos já cadastrados.</li>
          <li>Exclusão de produtos obsoletos ou descontinuados.</li>
          <li>
            Associação com categorias e subcategorias para melhor organização.
          </li>
        </ul>
      </div>

      <div className="col-2">
        <h2>Controle de Estoque</h2>
        <ul>
          <li>Registro de entrada e saída de produtos.</li>
          <li>
            Atualização automática do estoque após vendas, devoluções ou ajustes
            manuais.
          </li>
          <li>
            Geração de alertas para reposição quando o estoque estiver abaixo do
            nível mínimo.
          </li>
          <li>
            Relatórios de movimentação de estoque e histórico de alterações.
          </li>
        </ul>
      </div>
      <div className="container-img col-2">
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/People-meeting-and-discussing-growth-statistics-on-tablet-/960x0.jpg?format=jpg&width=1440"
          alt=""
        />
      </div>
      <div className="container-img col-2">
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/People-meeting-and-discussing-growth-statistics-on-tablet-/960x0.jpg?format=jpg&width=1440"
          alt=""
        />
      </div>
      <div className="col-2">
        <h2>Carteira de Movimentações</h2>
        <ul>
          <li>
            Lançamento de receitas e despesas associadas a vendas, compras e
            outras operações.
          </li>
          <li>
            Controle de pagamentos e recebimentos, com categorização por tipo de
            transação.
          </li>
          <li>
            Geração de extratos financeiros e acompanhamento de saldo da
            carteira.
          </li>
          <li>
            Integração com outras áreas, como vendas e compras, para atualizar
            automaticamente as movimentações.
          </li>
        </ul>
      </div>

      <div className="col-2">
        <h2>Cadastro de Entidades</h2>
        <ul>
          <li>
            Cadastro completo de entidades com informações como nome, CPF/CNPJ,
            endereço, telefone e e-mail.
          </li>
          <li>
            Histórico de interações e transações realizadas com cada entidade.
          </li>
          <li>
            Classificação das entidades por tipo (cliente, fornecedor, parceiro,
            etc.).
          </li>
          <li>
            Controle de crédito e condições comerciais para cada entidade.
          </li>
        </ul>
      </div>
      <div className="container-img col-2">
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/People-meeting-and-discussing-growth-statistics-on-tablet-/960x0.jpg?format=jpg&width=1440"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutPage;
