import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";

function App(props) {
  return (
    <div>
      <header></header>
      <main>
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
