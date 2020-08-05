import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ItemProvider } from './context/ItemState';
import {AddItem} from './components/AddItem'
import {EditItem} from './components/EditItem'
import {ListItem} from './components/ListItem'

const Routes = () => (
    <ItemProvider>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={ListItem} exact />
                <Route path="/add" component={AddItem} exact />
                <Route path="/edit/:id" component={EditItem} exact />
            </Switch>
        </BrowserRouter>
    </ItemProvider>
)



export default Routes