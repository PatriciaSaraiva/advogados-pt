// import "./App.css";
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import QuemSomos from "./views/QuemSomos/QuemSomos";
import Experience from "./views/QuemSomos/Experience";
import AreasActividade from "./views/AreasActividade/AreasActividade";
import DireitoEmpresarial from "./views/AreasActividade/DireitoEmpresarial";
import Pagamento from "./views/Home/Pagamento";
import Contactos from "./views/Contactos/Contactos";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/Home" exact component={Home}></Route>
        <Route path="/Pagamento" exact component={Pagamento}></Route>
        <Route path="/Quem-Somos" exact component={QuemSomos}></Route>
        <Route path="/Experience" exact component={Experience}></Route>

        <Route path="/Actividade" exact component={AreasActividade}></Route>
        <Route
          path="/direito-empresarial"
          exact
          component={DireitoEmpresarial}
        ></Route>

        <Route path="/Contactos" exact component={Contactos}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
