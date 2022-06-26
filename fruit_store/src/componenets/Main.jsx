import React, { useState } from 'react'
import Orange from "../Images/orange.png"
import Apple from "../Images/apple.png"
import Pear from "../Images/pear.png"
import Left from "../Images/left arrow.png"
import Right from "../Images/right arrow.png"
import Add from "../Images/add.png"

const Main = (props) => {
    const fruits = ["CHERRY" , "ORANGE" , "APPLE" , "PEAR" , "BANANA"];
    const fruitList = [
        {
            id: 1,
            fruitName:"ORANGE",
            fruit_logo : `${Orange}`,
        },
        {
            id: 2,
            fruitName:"APPLE",
            fruit_logo : `${Apple}`,
        },
        {
            id: 3,
            fruitName:"PEAR",
            fruit_logo : `${Pear}`,
        },
    ]
    const [fruit , setFruit] = useState(0);

    const next = () => {
        if(fruit >= fruitList.length-1){
            setFruit(fruit);
        }
        else{
            setFruit(fruit+1);
            
        }
    }
    const prev = () => {
        if(fruit <= 0){
            setFruit(fruit);
        }
        else{
            setFruit(fruit-1);
        }
    }

  return (
    <div id='container-main'>
        <div id='left'>
            <button onClick={prev}><img id='left_logo' src={Left} alt="left-arrow"/></button>
            <h2 id='prev_fruit'>{fruits[fruit]}</h2>
        </div>
        <div id='fruit-container'>
            <h1 id='fruitName'>{fruitList[fruit].fruitName}</h1>
            <img id='fruit_Image' src={fruitList[fruit].fruit_logo} width="25" height="400" alt="FruitName" />
            <button id='AddBtn' onClick={props.AddToCart}><img id='Add_logo' src={Add} alt="add_btn" /></button>
            <p id='price'>$0.30/kg</p>
        </div>
        <div id="right">
            <button onClick={next}><img id='right_logo' src={Right} alt="right-arrow"/></button>
            <h2 id='next_fruit'>{fruits[fruit+2]}</h2>
        </div>
    </div>
  )
}

export default Main