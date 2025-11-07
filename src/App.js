import logo from './logo.svg';
import './App.css';
import React, {useState } from "react";
import  Product from'./Component/Product';
import  Header from'./Component/Header';
import  Footer from'./Component/Footer';
import  Scan from'./Component/Scan';
import  Home from'./Component/Home';

function App() {

    const [value, setvalue] = useState('h');

  function home(){
    setvalue('h');

  }
  function product(){
    setvalue('p');

  }
  function scan(){
    setvalue('s');

  }
  return (
    <div className="App">
      <Header  funcHome={home}  funcProd={product} funcScan={scan}/>

      
       {value === 'h' && <Home/> }
        {value === 'p' &&   <Product/> }
        {value === 's' &&  <Scan/> }
        <Footer/>
    </div>
  );
}

export default App;
