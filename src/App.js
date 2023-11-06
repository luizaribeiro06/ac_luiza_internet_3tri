//import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import ProdutoMusica from './components/ProdutoMusica'
import Usuario from './components/Usuario'
import {Switch, Route, Redirect} from 'react-router-dom';
import ProductDetail from './components/ProductDetail';


function App() {
  return (
   <>
     
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/about" component={About} />
        <Route exact path="/produtomusica" component={ProdutoMusica} />
        <Route exact path="/usuario" component={Usuario} />

        <Redirect to="/" />
      </Switch>
     
      <Footer/>
        </>
  );
}

export default App;