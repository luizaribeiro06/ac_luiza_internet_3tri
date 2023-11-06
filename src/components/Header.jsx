import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
         
    <div className="top">
    

      <Navbar>
        
      <NavLink className="navbar-brand mx-auto fw-bold" to="/"><img src="https://media.discordapp.net/attachments/1004356980669952011/1171090959992377478/Capture-removebg-preview.png?ex=655b6a72&is=6548f572&hm=b742b7cc1c79b05e2c1f70b264fdcee79795182e7693d8e67705de4e2442019e&=" alt="" width="80px"/></NavLink>
       
      <Container className="container">
      <h2>MusicStore</h2>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/home">Home</NavLink>
            <NavLink className="nav-link" to="/produtomusica">Cadastrar produto</NavLink>
            <NavLink className="nav-link" to="/usuario">Entrar</NavLink>
          </Nav>
        </Container>
          
         

      </Navbar>
            </div>
                    
            
                
        </>
    )
}

export default Header;