import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";
import Bar from "./components/Bar";

function App() {
  return (
    <>
      {/* <Bar overrideStyles={{ backgroundColor: "lightblue" }} /> */}
      <Bar />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
