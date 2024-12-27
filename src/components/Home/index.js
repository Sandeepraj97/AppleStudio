import React from 'react'


import "./index.css"

const Home = () => {
  return (
    <div className='home-cointainer'>
         <div>
            <img src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-watch-design-studio-logo?wid=236&hei=52&fmt=jpeg&qlt=90&.v=1566849941844' 
             alt='Apple Watch'
             className='store-logo' />
        </div>
        <div className='apple-watch-cointainer'>
            <div className='apple-watch-content-cointainer'> 
            <h1 className='designstudio-headline '> 
                <span >
                    <span  className='apple-watch-discrp '> Apple Watch Studio</span><br/>
                    <span className='designstudio-intro-collectionname'>Choose a case.</span><br/>
                    <span className='designstudio-intro-collectionname'>Pick a strap. </span><br/>
                    <span className='designstudio-intro-collectionname'>Create your own style.</span> <br/>
                </span>
            </h1>
                <button className='get-start-btn'>Get Started</button>
            </div>
            <div className='designstudio-combinedimage'>
                <img src='https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv'
                        alt='watch-dial'
                        className='watch-dail' />
                <img src='https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=czdWc1FNWHZRRGZrVTlpcjVQTEJxVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM' 
                        alt='watch-strip' 
                        className='watch-strip' />
            </div>
        </div>
    </div>
   
  )
}

export default Home