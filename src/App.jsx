import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Popups from "./components/Popups/Popups";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      {/* pop-up start */}

      <Popups />

      {/* pop-up end */}

      <Header />

      <Main />
    </div>
  );
}

export default App;
