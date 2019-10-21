
import React, { useState } from "react";
import Carrousel from './Carrousel'
import oneDiamante from '../img/one-diamante.png'
import moreDiamante from '../img/more-diamante.png'

const Compromiso = () => {
    const [state, setState] = useState("viewTwo");
    return (
        <div className="w100 pt-5 pb-5 flex flexCenter animated fadeIn">
            {state === "viewTwo" && (
         
         <div className="w90 flex-wrap-xs flex flexCenter">
         <div className="w-auto borderBold m-2 mt-3 mb-3 m4-xs"  onClick={() => {
           setState("diamante");
         }}>
             <img src={oneDiamante} className="w100 h100 box"/>
             <button className="joya">DIAMANTE</button>
         </div>
         <div className="w-auto borderBold m-2 mt-3 mb-3 m4-xs"  onClick={() => {
           setState("diamantes");
         }} >
             <img src={moreDiamante} className="w100 h100 box"/>
             <button className="joya" >+ DIAMANTES</button>
         </div>
     </div>
        )}

        {state === "diamante" && (
          <div>
           <Carrousel></Carrousel>
          </div>
        )}

{state === "diamantes" && (
          <div>
          <h2>hola estoy en diamantes</h2>
          <Carrousel></Carrousel>
          </div>
        )}
        </div>
    )
}
export default Compromiso