import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

//Bootstrap
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="danger"
      variant="danger"
      className="navBarContainer"
    >
      <Navbar.Brand as={Link} to="/" className="brand mx-5 mb-1">
        C-Design
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="navBar" navbarScroll>
          <NavDropdown
            title="Productos"
            id="navbarScrollingDropdown"
            className="mx-3 mt-2"
          >
            <NavDropdown.Item to="#" as={Link} disabled className="navDropdown">
              Categorías
            </NavDropdown.Item>

            <NavDropdown.Item
              to="/Category/anotadores"
              as={Link}
              className="navDropdown"
            >
              Anotadores
            </NavDropdown.Item>
            <NavDropdown.Item
              to="/Category/agendas"
              as={Link}
              className="navDropdown"
            >
              Agendas
            </NavDropdown.Item>
            <NavDropdown.Item
              to="/Category/cuadernos"
              as={Link}
              className="navDropdown"
            >
              Cuadernos
            </NavDropdown.Item>
          </NavDropdown>

          <Link to="/cart" className="cart-icon-md-sm text-decoration-none">
            <CartWidget />
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
