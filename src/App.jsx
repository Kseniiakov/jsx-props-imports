import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header/";

class App extends React.Component {
  render() {
    const logoText = 'MyReact';
    return (
      <div>
        <Header text = {logoText}/>
        <main>
          <Home />
          <About />
        </main>
      </div>
  );
  }
}

export default App;
