import { Outlet } from "react-router-dom";
import Main from "../components/Main/Main";
import Popups from "../components/Popups/Popups";
import Header from "../components/Header/Header";

function MainPage() {
  return (
    <>
      <Popups />
      <Header />
      <Main />
      <Outlet />
    </>
  );
}

export default MainPage;
