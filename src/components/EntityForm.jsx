import PropTypes from "prop-types";

const EntityForm = ({ section, setSection, saveEntidade }) => {
  return (
    <form id="form-container" className="ml-0">
      <div className="col-4">
        <span>Entidade</span>
        <h2>Cradastre-se agora</h2>
        <p>Preencha o formulário abaixo</p>
      </div>
      <div
        id="form-container"
        className="col-4 m-0 p-0 shadow-none"
        style={section != 1 ? { display: "none" } : {}}
      >
        <div className="col-4">
          <label htmlFor="nome">nome</label>
          <input type="text" id="nome" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="cpf">cpf</label>
          <input type="text" id="cpf" />
        </div>
        <div>
          <label htmlFor="tipo">Tipo</label>
          <input type="text" id="tipo" />
        </div>
      </div>
      <div
        id="form-container"
        className="col-4 m-0 shadow-none"
        style={section != 2 ? { display: "none" } : {}}
      >
        <div>
          <label htmlFor="uf">UF</label>
          <input type="text" id="uf" />
        </div>
        <div>
          <label htmlFor="rua">Rua</label>
          <input type="text" id="rua" />
        </div>
        <div>
          <label htmlFor="cidade">Cidade</label>
          <input type="text" id="cidade" />
        </div>
        <div>
          <label htmlFor="cep">CEP</label>
          <input type="text" id="cep" />
        </div>
        <div>
          <label htmlFor="pais">País</label>
          <input type="text" id="pais" />
        </div>
      </div>
      <div id="section-btn">
        {section == 1 && (
          <>
            <div id="section-btn">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setSection((prev) => prev + 1);
                }}
                id="btn-2"
              >
                Next
              </button>
            </div>
          </>
        )}

        <div style={section != 2 ? { display: "none" } : {}}>
          <div id="section-btn">
            <button
              id="btn-2"
              onClick={(e) => {
                e.preventDefault();
                setSection((prev) => prev - 1);
              }}
            >
              Prev
            </button>
          </div>
          <div id="section-btn">
            <button id="btn-1" onClick={saveEntidade}>
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

EntityForm.propTypes = {
  section: PropTypes.number.isRequired,
  setSection: PropTypes.func.isRequired,
  saveEntidade: PropTypes.func.isRequired,
};

export default EntityForm;
