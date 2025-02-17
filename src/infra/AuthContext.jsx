import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "./Context";
import { expiration_time } from "./variables";

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const saveToken = (token, user) => {
    localStorage.setItem("user", user);
    localStorage.setItem("token", token);
    localStorage.setItem(
      "tokenExpiration",
      new Date().getTime() + expiration_time
    );
    setToken(token);
    setUser(user);
  };

  const removeToken = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiration");
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedTokenExpirationDate = localStorage.getItem("tokenExpiration");
    const currentTime = new Date().getTime();

    if (
      storedToken &&
      storedTokenExpirationDate &&
      currentTime < storedTokenExpirationDate
    ) {
      setToken(storedToken);
    } else {
      removeToken();
    }
    setLoading(!loading);
  }, []);

  return (
    <AuthContext.Provider
      value={{ loading, token, saveToken, removeToken, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
