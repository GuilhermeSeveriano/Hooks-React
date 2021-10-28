import './App.css';
import React, { useState } from 'react';

function App() {
  const [item, setItem] = useState(''); // eu crio um item vazio e crio uma função para ele chamanda setItem
  const [itemList, setItemList] = useState([]) // crio uma lista vazia e tbm crio uam função para ela SetItem list


  // aqui é uma uma função para adicionar os valores que vinheram pelo setItem serem adicionados a minha lista
  const addItem = () => {
    setItemList([item].concat(itemList))
    setItem('')
}
  return (
    <div className="App">
      <h1>Lista de Compras</h1>

      {/*Aqui eu chamo a função setItem pegando o valor que foi digitado pelo usuario */}
      <input type="text" placeholder="Item" value={item} name="item" onChange = {e => setItem(e.target.value)} />

      {/*A cada vez que o usuario clicar no botao eu chamo a fnção addItem */}
      <button onClick={addItem}>Adicionar Item</button>
      <ul>

        {/*Busco na minha lista um item e adiciona a minha lista */}
      {itemList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;