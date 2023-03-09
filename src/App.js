import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './pages/Dashboard/Home';
import { ThemeProvider } from 'react-bootstrap';
import { Header } from './common/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path='/' element={<HomeComponent></HomeComponent>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
