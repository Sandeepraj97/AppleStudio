import React from 'react'
import Collections from '../Collections'

import silverAliminiumImg from "../../assets/img3.png"
import silverAliminiumSideImg from "../../assets/imgside3.png"

import "./index.css"


const watchItem = {
      image : silverAliminiumImg,
      imageSide:silverAliminiumSideImg,
      series : "APPLE WATCH SE",
      discription:"44mm Silver Aluminium Case with Star Fruit Solo Loop",
      from:"£249"
}



const SilverAliminium = () => {
  return (
    <>
        <div className='watch-list-cointainer'>
            <Collections watchItem = {watchItem} />
        </div>
    </>
  )
}

export default SilverAliminium