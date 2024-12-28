import React, { useState } from 'react'

import "./index.css"


const brandList = ["Sport Loop","Sport Band","FineWoven","Braided Solo Loop","Solo Loop","Nike Sport Loop","Nike Sport Band" ]


const Collections = (props) => {
    const {watchItem} = props
    const {image,imageSide,series,discription,from} = watchItem

    const [sideView,setSideView] = useState(true)
    const [viewText,setViewText] = useState(true)

    const onClickView = ()=>{
        setSideView(!sideView)
        setViewText(!viewText)
    }

    const [size,setSize] = useState(false)
    const [watchCase,setWatchCase] = useState(false)
    const [watchBrand,setWatchBrand] = useState(false)
    
    const onClickWatchBrand = ()=>{
        setWatchBrand(true)
        setWatchCase(false)
        setSize(false)
    }

    const onClickSize = ()=>{
        setSize(true)
        setWatchCase(false)
        setWatchBrand(false)
    }

    const onClickWatchSize = ()=>{
        setWatchCase(true)
        setSize(false)
        setWatchBrand(false)
    }

    const renderBrandbtnEle = brandList.map((ele,index)=>(
        <button className='btn-clild' key={index}>{ele}</button>
    ))

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
            <button className='btn-element'onClick={onClickSize}>{!size ? <button className='btn-clild'> Size</button> : <button className='btn-clild'>42mm <button className='btn-clild'>46mm</button></button>}</button>
            <button
             className='btn-element'
             onClick={onClickWatchSize}>{!watchCase ? <button className='btn-clild'> Case</button> : <button className='btn-clild'>Aluminium <button className='btn-clild'>Titanium</button></button>}
             </button>
            <button className='btn-element'
                 onClick={onClickWatchBrand}
            >{!watchBrand ? <button className='btn-clild'> Brand</button> : 
            (<button className='btn-clild'>{renderBrandbtnEle} </button>)}</button>
        </div>
    </div>
  )
}

export default Collections