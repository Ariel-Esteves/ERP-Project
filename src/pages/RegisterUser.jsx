import { useState } from "react";
import EntityForm from "../components/EntityForm";
import RegisterForm from "../components/RegisterForm";

const RegisterUser = () => {
  const [userRegistered, setUserRegistered] = useState(null);
  return (
    <>
      <RegisterForm setUserRegistered={setUserRegistered} />
      <EntityForm userRegistered={userRegistered} />
    </>
  );
};

export default RegisterUser;
