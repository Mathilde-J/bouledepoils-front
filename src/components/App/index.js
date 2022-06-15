// == Import
import './styles.scss';
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import SearchedAnimals from '../SearchedAnimals';
import SearchForm from '../SearchForm';
import NavBar from '../NavBar';
import Footer from '../Footer/footer';
import Presentation from '../Presentation';
import LoginForm from '../LoginForm';
import AssoList from '../AssoList';
import Advices from '../Advices';
import SubscribeForm from '../SubscribeForm';
import AssoContactAdmin from '../AssoContactAdmin/assoContactAdmin';
import Team from '../Team/team';
import Error from '../Error';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#735F6E',
      contrastText: '#F2F0F2',
      light: '#8C7488',
      dark: '#594A55',
    },
    secondary: {
      main: '#D97C0B',
      light: '#F2B33D',
      dark: '#BF6D0A',
      contrastText: '#F2F0F2',
    },
  },
});

// == Composant
const App = () => {
  const formsubmit = useSelector((state) => state.FormReducer.formSubmit);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route path="/conseils" element={<Advices />} />
          <Route path="/associations" element={<AssoList />} />
          <Route path="/equipe" element={<Team />} />
          <Route path="/rejoindre" element={<AssoContactAdmin />} />
          <Route path="/signin" element={<SubscribeForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<Error />} />
          <Route
            path="/"
            element={
              formsubmit ? (
                <SearchedAnimals />
              )
                : (
                  <>
                    <Presentation />
                    <SearchForm id="searchForm" />
                  </>
                )
            }
          />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

// == Export
export default App;
