import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import "./index.css"
import { Link, withRouter } from 'react-router-dom';


const Header = () =>{ 
  
  const navToHome = () => {
    window.location.href = '/'
  }
  
  return (

    <nav className='nav-cointainer'>
      <img src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-watch-design-studio-logo?wid=236&hei=52&fmt=jpeg&qlt=90&.v=1566849941844'
          alt=''
          className='store-logo'
          onClick={navToHome}          
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
            <ul className='trigger-btn-ele'>  
              <Link to="/jetblackaluminium" className="link-list"><li className='pop-up-content-1'>Apple Watch Series 10 </li></Link>
              <Link to="silverTaitanium" className="link-list"><li className='pop-up-content-1'>Apple Watch Hermès Series 10</li></Link>
              <Link to="silverAliminum"  className="link-list">  <li className='pop-up-content-1'>Apple Watch SE</li> </Link>
            </ul>
      </Popup>
      <button className='save-button'>Save</button>
    </nav>
  )

}
export default withRouter(Header)