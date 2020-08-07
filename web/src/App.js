import React from 'react';
import {Route, Switch } from 'react-router-dom';
import {AddItem} from './components/AddItem'
import {EditItem} from './components/EditItem'
import {ListItem} from './components/ListItem'
import { ItemProvider } from './context/ItemState';


function App() {
  return (
    <ItemProvider>
            <Switch>
                <Route path="/" component={ListItem} exact />
                <Route path="/add" component={AddItem} exact />
                <Route path="/edit/:id" component={EditItem} exact />
            </Switch>
    </ItemProvider>
  );
}

export default App;
