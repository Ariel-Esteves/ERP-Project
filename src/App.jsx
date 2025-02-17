import { BrowserRouter } from "react-router-dom";
import "./styles/App.sass";
import FooterComponent from "./components/FooterComponent";
import NavBar from "./components/NavbarComponent";
import RouterApp from "./RouterApp";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <RouterApp />

      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
