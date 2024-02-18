import { useLocation, matchPath } from "react-router";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import "../scss/App.scss";
import SearchPage from "./SearchPage";
import CharacterDetail from "./CharacterDetail";

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
  return (
    <div>
      <Header></Header>
      <main>
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
