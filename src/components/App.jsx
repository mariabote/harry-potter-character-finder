import { useLocation, matchPath } from "react-router";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import "../scss/App.scss";
import SearchPage from "./SearchPage";
import CharacterDetail from "./CharacterDetail";
import { useState } from "react";

function App() {
  // Con el hook useLocation primero obtengo la ruta actual
  const { pathname } = useLocation();
  // Con el matchPath compruebo si la ruta actual coincide con /product/:productId
  const routeData = matchPath("detail/:characterId", pathname);
  // Si no coincide, routeData es null
  // Si sí coincide, routeData es un objeto con mucha información útil
  // La información que me interesa está en routeData.params.productId
  const characterId = routeData !== null ? routeData.params.characterId : "";
  console.log(routeData);

  const [pageClass, setPageClass] = useState("darkmode");
  const handleClick = (event) => {
    if (pageClass === "darkmode") {
      setPageClass("");
    } else {
      setPageClass("darkmode");
    }
  };
  const renderDarkModeText = () => {
    if (pageClass === "darkmode") {
      return "Tienes activado el dark mode";
    } else {
      return null;
    }
  };

  const dameUn1 = () => {
    return "UNO";
  };

  console.log(dameUn1());
  return (
    <div className={"page " + pageClass}>
      <Header></Header>
      <main>
        <div>
          <button className="lumos" onClick={handleClick}>Lumos</button>
        </div>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route
            path="/detail/:characterId"
            element={<CharacterDetail id={characterId} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
