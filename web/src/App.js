import React from 'react';
import Routes from './routes'
import {Title} from './styles'


function App() {
  return (
    <div>
      <Routes />
      <Title fontSize={50}>Loja Virtual
      <p>Compre os melhores itens</p>
      </Title>
    </div>
  );
}

export default App;
