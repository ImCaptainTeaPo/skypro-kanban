import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { GlobalWrapper } from "./components/shared.styled";
import AppRoutes from "./AppRoutes";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalStyles />
        <GlobalWrapper>
          <AppRoutes />
        </GlobalWrapper>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
