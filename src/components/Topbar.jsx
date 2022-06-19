import React from "react";
import {
  Button,
  Container,
  Dropdown,
  DropdownButton,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { CgLogOut } from "react-icons/cg";
import alertify from "alertifyjs";
import 'alertifyjs/build/css/alertify.css';

const Topbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    alertify.confirm(
      "Logout",
      "Are you sure want to logout?",
      () => {
        localStorage.removeItem("token");
        navigate("/");
      },
      () => {
        console.log("cancelled");
      }
    );
  };

  return (
    <div>
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className= "text-light fs-1 fw-bold" href="#home">Movie<span className= "text-primary">Home</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Profile</Nav.Link>              
            </Nav>
          </Navbar.Collapse>
          <button className="logout-button btn-danger" onClick={handleLogout}>
            <CgLogOut /> &nbsp; Logout
          </button>
        </Container>
      </Navbar>
    </div>
  );
};

export default Topbar;