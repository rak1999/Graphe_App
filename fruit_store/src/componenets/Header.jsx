import React from 'react'
import Cart from './Cart'
import Heading from './Heading'
import Logo from './Logo'
const Header = (props) => {
  return (
    <header id='header'>
        <Logo />
        <Heading />
        <Cart addItem={props.addItem}/>
    </header>
  )
}

export default Header