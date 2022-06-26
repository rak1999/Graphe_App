import React from 'react'
import Message from "../Images/message.png"
import Receipt from "../Images/receipt.png"


const Bottom = (props) => {
  return (
    <div id='bottom'>
      <div className="message">
         <img id='msg-logo' src={Message} alt="message" /> 
      </div>
      <div className="receipt-container">
        <div className="receipt-header">
            <h1>TOTAL</h1>
            <img src={Receipt} alt="receipt"/>
        </div>
        <div className="receipt-body">
            <h1 id='total_amount'>${props.price}</h1>
        </div>
        <div className="receipt-bottom">
            <p id='tax-pill'>TAX INCLUDES</p>
        </div>
      </div>
    </div>
  )
}

export default Bottom