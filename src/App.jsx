import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { GlobalWrapper } from "./components/shared.styled";
import AppRoutes from "./AppRoutes";
import AuthProvider from "./context/AuthProvider";
import TaskProvider from "./context/TaskProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TaskProvider>
          <GlobalStyles />
          <GlobalWrapper>
            <AppRoutes />
          </GlobalWrapper>
        </TaskProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
