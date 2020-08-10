import React from 'react';
import Routes from "./routes";
import { ItemProvider } from './context/ItemState';


function App() {
  return (
    <ItemProvider>
          <Routes />
    </ItemProvider>
  );
}

export default App;
