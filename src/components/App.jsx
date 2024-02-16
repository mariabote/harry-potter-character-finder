import { useEffect, useState } from "react";

import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import "../scss/App.scss";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Filters></Filters>
        <CharacterList></CharacterList>
      </main>
    </div>
  );
}

export default App;
