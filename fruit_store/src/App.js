import React, { useState } from 'react'
import Bottom from './componenets/Bottom'
import Header from './componenets/Header'
import Main from './componenets/Main'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [addItem , setAddItem] = useState(0);
  const[price ,setPrice] = useState(0);
  const AddToCart =()=>{
    setAddItem(addItem+1);
    setPrice(price + 0.30);
  }

  return (
    <div id='app'>
      <Header addItem={addItem}/>
      <Main addItem={addItem} AddToCart={AddToCart} />
      <Bottom price={price.toFixed(2)} />
    </div>
  )
}

export default App