import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
      <React.Fragment>
      {/* creates navbar in home page */}
        <Navbar expand="md" className='pb-4'>
        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <h1><a href='/'>Arelys Stationary Box</a></h1>
            <Navbar.Collapse id="basic-navbar-nav">
            
              <Nav className="ml-auto">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
                <Nav.Item>
                <NavLink exact to="/">Home</NavLink>
                </Nav.Item>
                <Nav.Item>
                <NavLink to="/product">Product</NavLink>
                </Nav.Item>
                <Nav.Item>
                <NavLink to="/contact">Contact</NavLink>
                </Nav.Item>
                  
              
              </Nav>
              
            </Navbar.Collapse>
          </Navbar>
          {/* the title is in the navigation component because it will be on every page as opposed to the 'header' that's only on the home page */}
          <header>
          
        </header>
        </React.Fragment>
    );
}

export default Navigation;