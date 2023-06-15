import React from "react";
import "./main.style.css";
import AnimatedPage from "./AnimatedPage";


// Default introduce page


import { Link } from "react-router-dom";



    const navigace = <nav className="">
      <Link className to="/About">
       <button>  <h3>Chci vědět víc</h3></button>
      </Link>
    </nav>
  


const Main = () => {
  return (
    <AnimatedPage> 
    <main className="mainContext">
    <p className="contactMe">Kontakt: Tel:+420 737 600 813 <br/>email:barbora-tomeckova@seznam.cz</p>
      <div className="nameAndLogoMain">
 
        <span className="nameAndNote">
          <h1>
            {/* <span className="vinarstvi"> Copywiting</span> <br /> */}
            <span className="RVNAME"> Copywriting Barbora Tomečková</span>
          </h1>
          <h2>Vše začíná Vášní</h2>
          <ul>
                <li>- Korektura textů</li>
                <li>- Individuální texty</li>
                <li>- Překlady do a z Anglického jazyka</li>
                <li>- Tvorbu obsahu pro weby a internetové magazíny.</li>
              </ul>
       {navigace}
        </span>
      </div>
    </main>
    </AnimatedPage>
  );
};

export default Main;
