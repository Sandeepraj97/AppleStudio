import React from 'react'

import silverTaitaniumImg from "../../assets/img2.png"
import silverTaitaniumSideImg from "../../assets/imgside2.png"
import Collections from '../Collections'

import "./index.css"

const watchItem = {
     id:2,
        image : silverTaitaniumImg,
        imageSide:silverTaitaniumSideImg,
        series : "APPLE WATCH HERMÈS SERIES 10",
        discription:"46mm Silver Titanium Case with Satiné Grand H",
        from:"£1,799.00"
}

const SilverTaitanium = () => {
  return (
    <>
    
        <div className='watch-list-cointainer'>
            <Collections watchItem = {watchItem} />
        </div>
        </>
  )
}

export default SilverTaitanium