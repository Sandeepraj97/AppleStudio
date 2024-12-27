import jetBlackAluminiumImg from "../../assets/img1.png"
import jetBlackAluminiumSIdeView from "../../assets/imgside1.png"
import Collections from '../Collections'

import "./index.css"

const watchItem = {
    image : jetBlackAluminiumImg,
    imageSide:jetBlackAluminiumSIdeView,
    series : "APPLE WATCH SERIES 10",
    discription:"46mm Jet Black Aluminium Case with Black Solo Loop",
    from:" $429"
  }

const JetBlackAluminium = () => {
  return (
    <>
        
        <div className='watch-list-cointainer'>
            <Collections watchItem = {watchItem} />
        </div>
    </>
  )
}

export default JetBlackAluminium