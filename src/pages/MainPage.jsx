import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Popups from '../components/Popups/Popups';
import GlobalStyles from '../styles/GlobalStyles';
import { GlobalWrapper } from '../components/shared.styled';
import { PageWrapper } from './MainPage.styled';

function MainPage() {
  return (
    <PageWrapper>
      <GlobalStyles />
      <GlobalWrapper>
        <Popups />
        <Header />
        <Main />
      </GlobalWrapper>
    </PageWrapper>
  );
}

export default MainPage;
