import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import {Title} from './styles'
import {AddItem} from './components/AddItem'
import {EditItem} from './components/EditItem'
import {ListItem} from './components/ListItem'

function App() {
  return (
    <div>
      <GlobalProvider>
        <Switch>
          <Route path="/" component={ListItem} exact />
          <Route path="/add" component={AddItem} exact />
          <Route path="/edit/:id" component={EditItem} exact />
        </Switch>
      </GlobalProvider>
        <Title fontSize={50}>Loja Virtual
        <p>Compre os melhores itens</p>
        </Title>
        
    </div>
  );
}

export default App;
