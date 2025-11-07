import React from 'react'
import '../App.css';
import qrcodelogo from '../assets/image/qrscanlogo.png';



const Home = (props) => {

  return (
     
    <div className="home">
      <>
      <img className="popup-image" alt="enlarged"  src={qrcodelogo}/>
      <h1>QR Generator</h1>
    
      </>
    </div>
  )
}

export default Home
