import React from "react";
import { useRef, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Navbar,
  Collapse,
} from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import "../../styles/header.css";
import all from '../../pages/All'
const nav__link = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Product",
    path: "/product",
  },
  {
    display: "Card",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (
  //       document.body.scrollTop > 80 ||
  //       document.documentElement.scrollTop > 80
  //     ) {
  //       headerRef.current.classList.add("header__shrink");
  //     } else {
  //       headerRef.current.classList.remove("header__shrink");
  //     }
  //   });
  //   return ()=> window.removeEventListener('scroll')
  // },[]);

  return (
    <header className="header" ref={headerRef}>
      <div className="topbar">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="7" xs="6" left>
              <div className="topbar_right px-4">
                <span className="">
                  Hotline: <a href="#">0375703833</a>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6">
              <Nav className="d-flex justify-content-end gap-4 px-4">
                <NavItem>
                  <NavLink href="#">Đăng ký</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Đăng nhập</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Liên hệ</NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="logo">
        <Container>
          <div className="header_logo">
            <Row>
              <Col lg="12" md="12" xs="12" sm="12">
                <div className="img_logo d-flex justify-content-center">
                  <NavLink to="/home">
                    <img src={logo} alt="" />
                  </NavLink>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <hr width="100%"></hr>
      </div>
      <div className="menu">
        <Container>
          <div className="main_menu">
            <Row>
              <Col lg="10">
                <div className="menu_right ">
                  <Nav className="d-flex">
                    <NavItem>
                      <NavLink active to="/home">
                        HOME
                      </NavLink>
                    </NavItem>
                    <NavItem className="menu_hover">
                      <NavLink to='/all'>
                        CLOTING
                        <i class="ri-arrow-down-s-fill"></i>
                      </NavLink>
                      {/* menuu_hover */}
                      <Nav vertical className="dropdown_menu">
                        <NavItem>
                          <NavLink active href="#">
                            ALL ITEMS
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#">TEE</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#">BOTTOM</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#">JACKET</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#">HOODIE</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#">SWEATER</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#">CAP</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#">SHIPTS</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#">ACCESSORIES</NavLink>
                        </NavItem>
                      </Nav>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">CONTACT</NavLink>
                    </NavItem>
                    <NavItem className="gray">
                      <NavLink href="#">
                        COMBO DEAL ⭐️
                      </NavLink>
                    </NavItem>
                    <NavItem className="red">
                      <NavLink href="#">CLEARANCE SALE</NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <Col lg="2">
                <div className="content_search_card d-flex gap-4 justify-content-end">
                  <div className="search_menu">
                    <i class="ri-search-line"></i>
                  </div>
                  <span className="cart_icon">
                    <NavLink to="/cart">
                      <i class="ri-shopping-bag-fill"></i>
                      <span className="card_badge">2</span>
                    </NavLink>
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
