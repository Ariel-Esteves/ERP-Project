const ProductForm = ({ saveProduct }) => {
  return (
    <form action="" id="form-container" className="row-3x col-2 ml-0 mb-0">
      <div>
        <span>Cadastro</span>
        <h2>Cadastre-se Agora</h2>
        <p>Preencha o formulário para registrar um novo produto</p>
      </div>
      <div>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="price">Preço</label>
        <input type="text" id="price" />
      </div>
      <div>
        <label htmlFor="description">Descrição</label>
        <textarea id="description"></textarea>
      </div>
      <div>
        <label htmlFor="category">Categoria</label>
        <select id="category">
          <option value="1">Categoria 1</option>
          <option value="2">Categoria 2</option>
          <option value="3">Categoria 3</option>
        </select>
      </div>
      <div>
        <label htmlFor="stock">Estoque</label>
        <input type="text" id="stock" />
      </div>
      <div id="section-btn">
        <button onClick={saveProduct} id="btn-1">
          Salvar
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
