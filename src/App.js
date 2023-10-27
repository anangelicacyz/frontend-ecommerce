import './App.css';
import Navbar from './components/navbar';
import PrincipalBanner from './components/principalBanner';
import AllProducts from './components/allProducts';
import OneProduct from './components/oneProduct'
import {Route, Routes} from 'react-router-dom'
import CreateProduct from './components/createProduct'
import ShoppingCartList from './components/shoppingCartList';

function App() {
  return (
    <div className="App">
      
      <Navbar />
        <Routes>
          <Route path ='/' element= {<AllProducts/>} />
          <Route exact path='/products/:id' Component={OneProduct} />
          <Route exact path='/products' Component={CreateProduct} />
          <Route path= '/cart' Component={ShoppingCartList} />
        </Routes>  
      
    </div>
  );
}

export default App;
