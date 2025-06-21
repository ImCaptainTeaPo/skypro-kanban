import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Popups from "./components/Popups/Popups";
import GlobalStyles from "./styles/GlobalStyles";
import { GlobalWrapper } from "./components/shared.styled";

function App() {
  return (
    <>
      <GlobalStyles />
      <GlobalWrapper>
        {" "}
        <Popups />
        <Header />
        <Main />
      </GlobalWrapper>
    </>
  );
}

export default App;
