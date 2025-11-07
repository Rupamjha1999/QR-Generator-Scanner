import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import qrcodelogo from '../assets/image/qrscanlogo.png';

const Header = (props) => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg">
        <img className="flogo" src={qrcodelogo}/>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
           
            </ul>
            <form class="form-inline my-2 my-lg-0">
          
            <button class="btn  my-2 my-sm-0" type="button" onClick={props.funcHome}>HOME</button>
            <button class="btn  my-2 my-sm-0" type="button" onClick={props.funcProd}>PRODUCTS</button>
            <button class="btn  my-2 my-sm-0" type="button" onClick={props.funcScan}>SCAN</button>
           
            </form>
        </div>
        </nav>
                
                    
     </div>
  )
}

export default Header
