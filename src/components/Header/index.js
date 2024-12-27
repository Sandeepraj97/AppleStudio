import React, { useEffect } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import "./index.css"
import { Link } from 'react-router-dom';


function Header() {


  return (
    <nav className='nav-cointainer'>
      <img src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-watch-design-studio-logo?wid=236&hei=52&fmt=jpeg&qlt=90&.v=1566849941844'
          alt=''
          className='store-logo'
      />
      <Popup  trigger={<button className='pop-up-btn' > <div className='arrow'> Collections <MdOutlineKeyboardArrowDown /></div></button>}  
                position="bottom center"
                contentStyle={{
                  width:"350px",
                  padding:"20px",
                  border:"none",
                  marginTop:"10px",
                }}
              >
            <div className='trigger-btn-ele'>   
              <Link to="/jetblackaluminium"><button className='pop-up-content-1'>Apple Watch Series 10 </button></Link>
              <Link to="silverTaitanium"><button className='pop-up-content-1'>Apple Watch Hermès Series 10</button></Link>
              <Link to="silverAliminum" >  <button className='pop-up-content-1'>Apple Watch SE</button> </Link>
            </div>
      </Popup>
      <button className='save-button'>Save</button>
    </nav>
  )
}

export default Header