import { useState } from "react";
import EntityForm from "../components/EntityForm";

const EntityPage = () => {
  const [section, setSection] = useState(1);

  const saveEntidade = async (e) => {
    e.preventDefault();
    const getElId = (id) => document.getElementById(id);
    const nome = getElId("nome").value.trim();
    const cpf = getElId("cpf").value.trim();
    const email = getElId("email").value.trim();
    const tipo = getElId("tipo").value.trim();
    const uf = getElId("uf").value.trim();
    const rua = getElId("rua").value.trim();
    const cidade = getElId("cidade").value.trim();
    const cep = getElId("cep").value.trim();
    const pais = getElId("pais").value.trim();

    try {
      const entidade = {
        nome,
        cpf,
        email,
        tipo,
        endereco: { uf, rua, cidade, cep, pais },
      };

      if (
        !nome ||
        !cpf ||
        !email ||
        !tipo ||
        !uf ||
        !rua ||
        !cidade ||
        !cep ||
        !pais
      ) {
        alert("Please fill out all fields correctly.");
        return;
      }
      const result = await saveEntidade(entidade);

      console.log("Entidade saved successfully:", result);
      alert("Entidade saved successfully!");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      alert("Failed to save entidade. Please try again.");
    }
  };

  return (
    <div id="container-4-col">
      <div className="container-img col-2 m-4 mr-0">
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/People-meeting-and-discussing-growth-statistics-on-tablet-/960x0.jpg?format=jpg&width=1440"
          alt="img here"
        />
      </div>
      <div className="col-2">
        <EntityForm
          section={section}
          setSection={setSection}
          saveEntidade={saveEntidade}
        />
      </div>
    </div>
  );
};

export default EntityPage;
