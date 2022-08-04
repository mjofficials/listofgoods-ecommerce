import React from "react";
import {
  Logo,
  Nav,
  NavBtn,
  Navmenu,
  NavmenuContainer,
  StyledHeader,
  StyledHr,
} from "./styles/Header.styled";
import { NavNum } from "./styles/Common.styled";
import logo from "../assets/images/logo.png";
import ReplayIcon from "@mui/icons-material/Replay";

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Logo src={logo} alt="list of goods logo" />
        <NavBtn sx={"lg"} type="button" className="btnGroup">
          Menu
          <NavNum>1</NavNum>
        </NavBtn>
      </Nav>
      <StyledHr />
      <NavmenuContainer>
        <Navmenu>
          <li>
            <a href="#0">Find a Present</a>
          </li>
          <li>
            <a href="#0">Shop all</a>
          </li>
          <li>
            <a href="#0">Brands</a>
          </li>
          <li>
            <a href="#0">Account</a>
          </li>
          <li>
            <a href="#0">Search</a>
          </li>
        </Navmenu>
        <NavBtn type="button" className="btnGroup">
          Back
          <ReplayIcon className="rotate" />
        </NavBtn>
      </NavmenuContainer>
    </StyledHeader>
  );
};

export default Header;
