import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Popups from "./components/Popups/Popups";
import GlobalStyles from "./styles/GlobalStyles";
import { Wrapper } from "./components/shared.styled";

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Popups />
        <Header />
        <Main />
      </Wrapper>
    </>
  );
}

export default App;
