import React, { useState } from 'react';
import '../styles/Header.css';
import SyntherraImage from '../images/Syntherra.jpg';

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <header className="Config-Global-Header">
        <section className="Division-Config-Header">
          <div className="Content-Image-Header">
            <div className="Dimension-Image-Header">
              <img className='Image-Header' src={SyntherraImage} alt="" />
            </div>
          </div>

          <div className='Content-Navgation-Header'>
            <ul className='List-Header-Li'>
              <li><a className='Link-Header' href="#Inicio">Home</a></li>
              <li><a className='Link-Header' href="#sobre">Sobre</a></li>
              <li><a className='Link-Header' href="#Comunidade">Comunidade</a></li>
              <li><a className='Link-Header' href="#Junte-se">Junte-se</a></li>
            </ul>
          </div>

          <div className='Content-Btn-Header'>
            <div className='Dimension-Btn-H'>
              <button className='Btn-Header'>LinkedIn</button>
            </div>
            <div className='Dimension-Btn-H'>
              <button className='Btn-Header'>PDF's</button>
            </div>
          </div>

          {/* Botão do menu hamburguer */}
          <button className="hamburger-menu" onClick={toggleSidebar}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </section>
      </header>

      {/* Overlay e Sidebar */}
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <img src={SyntherraImage} alt="Syntherra" />
          </div>
          <button className="sidebar-close" onClick={toggleSidebar}>×</button>
        </div>
        
        <nav className="sidebar-nav">
          <ul>
            <li><a href="#Inicio" onClick={toggleSidebar}>Home</a></li>
            <li><a href="#sobre" onClick={toggleSidebar}>Sobre</a></li>
            <li><a href="#Comunidade" onClick={toggleSidebar}>Comunidade</a></li>
            <li><a href="#Junte-se" onClick={toggleSidebar}>Junte-se</a></li>
          </ul>
        </nav>
        
        <div className="sidebar-buttons">
          <button className='sidebar-btn'>LinkedIn</button>
          <button className='sidebar-btn'>PDF's</button>
        </div>
      </div>
    </>
  );
}

export default Header;