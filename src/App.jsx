import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { GlobalWrapper } from "./components/shared.styled";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <GlobalWrapper>
        <AppRoutes />
      </GlobalWrapper>
    </BrowserRouter>
  );
}

export default App;
