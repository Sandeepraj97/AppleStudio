import React, { useState } from 'react'

import "./index.css"

const Collections = (props) => {
    const {watchItem} = props
    const {image,imageSide,series,discription,from} = watchItem

    const [sideView,setSideView] = useState(true)
    const [viewText,setViewText] = useState(true)

    const onClickView = ()=>{
        setSideView(!sideView)
        setViewText(!viewText)
    }

  return (
    <div>
        <img src={sideView ? image : imageSide} className='watch-View-image' alt='watch-img' />
        <div className='discription-cointainer'>
            <p className='view-text' onClick={onClickView}>{viewText ? "Side View" : "Front View"}</p>
            <h3 className='watch-series'>{series}</h3>
            <h2 className='watch-discription'>{discription}</h2>
            <p className='price-from'>From {from}</p>
        </div>
        <div className='btn-container'>
            <button className='btn-element'>Size</button>
            <button className='btn-element'>Case</button>
            <button className='btn-element'>Brand</button>
        </div>
    </div>
  )
}

export default Collections