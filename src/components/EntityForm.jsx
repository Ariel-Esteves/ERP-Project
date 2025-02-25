import PropTypes from "prop-types";
import { useRef, useState } from "react";
import TogleButton from "./ToggleButton";
import { saveEntidade } from "../services/EntityService";

const EntityForm = ({ userRegistered }) => {
  const [section, setSection] = useState(false);
  const nameRef = useRef(null);
  const cpfRef = useRef(null);
  const emailRef = useRef(null);
  const personTypeRef = useRef(null);
  const ufRef = useRef(null);
  const streetRef = useRef(null);
  const cityRef = useRef(null);
  const cepRef = useRef(null);
  const countryRef = useRef(null);
  const user = userRegistered;

  const postData = (e) => {
    console.log("registered", userRegistered);
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      cpf: cpfRef.current.value,
      email: emailRef.current.value,
      personType: personTypeRef.current.value,
      address: {
        uf: ufRef.current.value,
        street: streetRef.current.value,
        city: cityRef.current.value,
        cep: cepRef.current.value,
        country: countryRef.current.value,
      },
      user,
    };
    console.log(data, "userregistered", userRegistered);
    saveEntidade(data, user);
  };

  return (
    <form id="form-container" className="ml-0" onSubmit={postData}>
      <div className="col-4">
        <span>Entidade</span>
        <h2>Cradastre-se agora</h2>
        <p>Preencha o formulário abaixo</p>
      </div>
      <div
        id="form-container"
        className="col-4 m-0 p-0 shadow-none"
        style={{ display: section ? "none" : "block" }}
      >
        <div className="col-4">
          <label htmlFor="name">name</label>
          <input type="text" id="name" ref={nameRef} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="cpf">cpf</label>
          <input type="text" id="cpf" ref={cpfRef} />
        </div>
        <div>
          <label htmlFor="personType">tipo</label>
          <input type="text" id="personType" ref={personTypeRef} />
        </div>
      </div>
      <div
        id="form-container"
        className="col-4 m-0 shadow-none"
        style={{ display: section ? "block" : "none" }}
      >
        <div>
          <label htmlFor="uf">UF</label>
          <input type="text" id="uf" ref={ufRef} />
        </div>
        <div>
          <label htmlFor="street">Street</label>
          <input type="text" id="street" ref={streetRef} />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input type="text" id="city" ref={cityRef} />
        </div>
        <div>
          <label htmlFor="cep">CEP</label>
          <input type="text" id="cep" ref={cepRef} />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input type="text" id="country" ref={countryRef} />
        </div>
      </div>

      <TogleButton toggle={section} setToggle={setSection} />
      <div id="section-btn">
        <button id="btn-1" type="submit">
          Save
        </button>
      </div>
    </form>
  );
};

EntityForm.propTypes = {
  userRegistered: PropTypes.object,
};

export default EntityForm;
