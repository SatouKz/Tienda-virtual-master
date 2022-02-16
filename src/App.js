import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductsPage from './pages/ProductsPage';
import ShowProduct from './pages/ShowProduct';
import Error404 from './pages/Error404';
import productos from './assets/images/productos';
import ToBuy from './components/ToBuy';

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<ProductsPage />}/>
          <Route path='/products/:id' element={<ShowProduct productos={productos}/>}/>
          <Route path='/products/shooping-card/:id' element={<ToBuy productos={productos}/>}/>
          <Route path='*' element={<Error404 />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
