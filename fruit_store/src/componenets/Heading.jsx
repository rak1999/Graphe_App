import React, { useState } from 'react'
import Profile from "../Images/profile pic.png"
import Bag from "../Images/bag.png"
import Location from "../Images/location.png"
import WishList from "../Images/wishlist.png"
const Heading = () => {
    const [ wish , setWish] = useState(0);
    const AddWish = ()=>{setWish(wish+1)}
  return (
    <div id="heading-constainer">
        <div id='heading'>
            <div >
                <img id='profile' src={Profile} width="60" alt="Profile"/>
            </div>
            <div id='bag'>
                <img id='bag_logo' src={Bag} width="100" alt="Bag"/>
            </div>
            <div id='location'>
                <img id='location_logo' src={Location} width="60" alt="Location"/>
                <p id='place'>Mumbai</p>
            </div>
        </div>
        <div id='wish'>
            <h2 id='wish_count'>{wish}</h2>
            <button onClick={AddWish}><img id='wishlist_logo' src={WishList} alt="wishlist" /></button>
        </div>
    </div>
  )
}

export default Heading