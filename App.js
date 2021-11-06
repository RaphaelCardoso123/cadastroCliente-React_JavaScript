import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './views/Home';
import { Menu } from './components/Menu';

import { ListarCliente } from './views/Cliente/ListarCliente/';
import {CadastrarCliente} from './views/Cliente/CadastrarCliente';

import { ListarPedido } from './views/Pedido/ListarPedido/';
import { CadastrarPedido } from './views/Pedido/CadastrarPedido';

import { ListarServico } from './views/Servico/ListarServico/';
import { CadastrarServico } from './views/Servico/CadastrarServico';
import { Item } from './views/Servico/ServicoItem';

import { ListarCompra } from './views/Compra/ListarCompra/';
import { CadastrarCompra } from './views/Compra/CadastrarCompra';

import { ListarProduto } from './views/Produto/ListarProduto/';
import { CadastrarProduto } from './views/Produto/CadastrarProduto';




function App() {
  return (
    <div> 
      <Router>
        <Menu/>
        <Switch>
          <Route exact path = "/" component = {Home}/>
          
          <Route exact path = "/listarCliente-cliente" component = {ListarCliente}/>
          <Route path = "/cadastrar-cliente" component = {CadastrarCliente}/>

          <Route exact path = "/listarPedido-pedido" component = {ListarPedido}/>
          <Route path = "/cadastrarpedido" component= {CadastrarPedido}/>
          <Route path = "/listarPedido-pedido/:id" component= {Item}/>

          <Route exact path = "/listarServico-servico" component = {ListarServico}/>
          <Route path = "/cadastrarservico" component= {CadastrarServico}/>
          <Route path = "/listarServico-servico/:id" component = {Item}/>

          <Route exact path = "/listarCompra-compra" component = {ListarCompra}/>
          <Route path = "/cadastrarcompra" component= {CadastrarCompra}/>
          <Route path = "/listarCompra-compra/:id" component= {Item}/>

          <Route exact path = "/listarProduto-produto" component = {ListarProduto}/>
          <Route path = "/cadastrarproduto" component= {CadastrarProduto}/>
          <Route path = "/listarProduto-produto/:id" component = {Item}/>
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
