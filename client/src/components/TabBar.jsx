import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from './../img/LogoDiamante.svg';
import Historia from "./Historia"
import Home from './Home';
import Motivos from './Motivos';
import Premios from './Premios';
import Beneficios from './Beneficios';
import Eleccion from './Eleccion'
import Cs from './Cs';
import Certificaciones from './Certificaciones';
import Compromiso from './Compromiso'
import Mantenimiento from './Mantenimiento'
import Matrimonio from './Matrimonio'
import Testimonio from './Testimonio'
import Joyas from './Joyas'
import ItemPlus from './ItemPlus';
import menu from "../img/menu.svg";
import buscar from '../img/LupaBuscar.svg'
import ubicacion from '../img/Ubication.svg';
import Contacto from './Contacto';
import Corte from "./Corte-5cs";
import Carats from "./Carats-5cs";
import Color from "./Color-5cs";
import Claridad from "./Claridad-5cs";
import Certificacion5cs from "./Certificacion-5cs";
import Blog from './Blog';
import Blog1 from './Blog1-sorteo-club-diamante'
import Blog2 from './Blog2-club-diamante'
import Blog3 from './Blog3-evitar-estafa'
import Blog4 from './Blog4-historia-sortija'


const TabBar= () => { 
    
  return (
 <Router>
    <header className="">
      <nav className={"navbar navbar-expand-lg p-0 navbar-light d-block style-z-index"}>
      <div className={"d-flex flex-grow-1 bd-bottom"}>
      <div className={'w100 flex around pt-1 pb-1 raleway-light'}>
      <div className={"allCenter cel"}>
      <Link to="/contacto" className={"option-menu nav-link"}><img src={ubicacion} className="h13px" /> <b>CONTACTO</b></Link>
      </div>
      <div className="flex ml-5 mr-5 img-logo">
      <Link to="/"><img src={logo} alt="logo" className="center m-auto w50 pt-2 pb-2 logoCenter logo" /></Link>
      </div>
      <div className="allCenter cel">
        <Link to="/testimonio" className="pr-4 option-menu nav-link "><b>TESTIMONIOS</b></Link>
        <Link to="/blog" className="pl-4 option-menu nav-link"><b>BLOG</b></Link>
      </div>
      </div>
      {/* <hr className={"my-1 d-block"/> */}
      <div className="burger-text-right flex flex-end">
        <button className={"navbar-toggler border-0"} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className={"navbar-toggler-icon"}></span>
        </button>
      </div>
      </div>
        <div className={"collapse navbar-collapse justify-content-center  bd-bottom"} id="navbarSupportedContent">
          <ul className={"navbar-nav burger-rigth menuRigth raleway-light "}>
            <li className={"nav-item pl-3 pr-3 principal-text-navbar"}>
              <Link to="/" className={"nav-link option-menu"}><b>HOME</b><span className={"sr-only"}>(current)</span></Link>
            </li>
            <li className={"nav-item dropdown pl-3 pr-3 principal-text-navbar" } >
              <a className={"nav-link  option-menu"} href="#diamantePeru" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"   >
              <b>DIAMANTE PERÚ  <span> &#43;</span></b>
            </a>
            <div className="dropdown-menu center grayNav border-0 rounded-0" aria-labelledby="navbarDropdown"
          >
              <Link to="/historia" className={"dropdown-item"}>Historia</Link>
              <Link to="/motivos" className={"dropdown-item"}>Motivos</Link>
              <Link to="/premios" className={"dropdown-item"}>Premios</Link>
              <Link to="/beneficios" className={"dropdown-item"}>Beneficios</Link>
            </div>
            </li>
            <li className={"nav-item dropdown pl-3 pr-3 principal-text-navbar"}>
              <a  className={"nav-link  option-menu"}  href="#diamantes" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
              <b>DIAMANTES <span> &#43;</span></b>
            </a>
            <div className="dropdown-menu center grayNav border-0 rounded-0 "  aria-labelledby="navbarDropdown">
              <Link to="/eleccion" className={"dropdown-item "}>Elección</Link>
              <Link to="/5cs" className={"dropdown-item"}>5CS</Link>
              <Link to="/certificación" className={"dropdown-item"}>Certificación</Link>
              <Link to="/mantenimiento" className={"dropdown-item"}>Mantenimiento</Link>
            </div>
            </li>
            <li className={"nav-item dropdown pl-3 pr-3 principal-text-navbar"}>
              <a   className={"nav-link  option-menu"} href="#novios" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <b>NOVIOS <span> &#43;</span></b>
            </a>
            <div className="dropdown-menu center grayNav border-0 rounded-0 "  aria-labelledby="navbarDropdown">
              <Link to="/compromiso" className={"dropdown-item"}>Compromiso</Link>
              <Link to="/matrimonio" className={"dropdown-item"}>Matrimonio</Link>
            </div>
            </li>
            <li className={"nav-item mb-4 pl-3 pr-3 principal-text-navbar"}>
              <Link to="/joyas" className={"nav-link option-menu"}><b>JOYAS</b><span className={"sr-only"}>(current)</span></Link>
            </li>
            <hr className={"my-2"}/>
            <li  className={"dest mt-4 mb-2 pl-3 pr-3"}><Link to="/blog" className={"nav-link option-menu"}>BLOG</Link></li>
            <li  className={"dest mb-2 pl-3 pr-3"} ><Link to="/testimonio" className={"nav-link option-menu"}>TESTIMONIO</Link></li>
            <li  className={"dest mb-2 pl-3 pr-3"}><Link to="/contacto" className={"nav-link option-menu"}>CONTACTO</Link></li>
          </ul>
        </div>
      </nav>
      <div className="">

      <Route path="/" exact component={Home} />
      <Route path="/historia" exact component={Historia} />
      <Route path="/motivos" exact component={Motivos} />
      <Route path="/premios" exact component={Premios} />
      <Route path="/beneficios" exact component={Beneficios} />
      <Route path="/eleccion" exact component={Eleccion} />
      <Route path="/5cs" exact component={Cs} />
      <Route path="/certificación" exact component={Certificaciones} />
      <Route path="/mantenimiento" exact component={Mantenimiento} />
      <Route path="/compromiso" exact component={Compromiso} />
      <Route path="/matrimonio" exact component={Matrimonio} />
      <Route path="/joyas" exact component={Joyas} />
      <Route path="/producto/:tipo/:numero"  component={ItemPlus} />
      <Route path="/novios/:tipo/:numero" component={ItemPlus} />
      <Route path="/testimonio" exact component={Testimonio} />
      <Route path="/contacto" exact component={Contacto} />
      <Route path="/corte" exact component={Corte} />
      <Route path="/carats" exact component={Carats} />
      <Route path="/color" exact component={Color} />
      <Route path="/claridad" exact component={Claridad} />
      <Route path="/certificacion-y-confianza" exact component={Certificacion5cs} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/blog-sorteo-club-diamante" exact component={Blog1} />
      <Route path="/blog-club-diamante" exact component={Blog2} />
      <Route path="/blog-evitar-estafa" exact component={Blog3} />
      <Route path="/blog-historia-sortija" exact component={Blog4} />

      </div>
    </header>
</Router>
  );
}
export default TabBar;