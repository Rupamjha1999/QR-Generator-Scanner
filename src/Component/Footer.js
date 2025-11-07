import React from 'react'
import qrcodefooter from '../assets/image/qrcodefooter.png';

const Footer = () => {
  return (
    <div className=" navbar-expand-lg navbar-light bg-dark footerdiv">
          <footer className="footer">
            
             <img className="flogo" src={qrcodefooter}/>
               QRgenrator&scanner.com
          
          </footer>

      
    </div>
  )
}

export default Footer
