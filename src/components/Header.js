import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  justify-content: flex-end;
  background-color: #748592;
`;

const StyledLinkWrapper = styled.div`
  padding-right: 35px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #525252;
  padding: 20px;
  font-weight: bold;
`;

const StyledLogo = styled(NavLink)`
  text-decoration: none;
  color: #c8c8c8;
  font-size: 20px;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: #525252;
  padding: 15px 15px 15px 35px;
  margin-right: auto; // https://stackoverflow.com/questions/23621650/how-to-justify-a-single-flexbox-item-override-justify-content
`;

const navLinkStylesEnter = (e) => {
  e.target.style.textDecoration = "underline";
  e.target.style.textDecorationThickness = "2px";
  e.target.style.textDecorationColor = "#C8C8C8";
  e.target.style.color = "#525252";
};

const navLinkStylesLeave = (e) => {
  e.target.style.textDecoration = "none";
  e.target.style.color = "#525252";
};

const Header = () => {
  return (
    <HeaderWrapper>
      <StyledLogo
        to="/"
        onMouseEnter={(e) => {
          // TODO: create image and set rotation properties
          e.target.style =
            "text-decoration: underline;text-decoration-color: #525252; color: #C8C8C8";
          // e.target.style = "-webkit-transform: rotate(180deg);"
        }}
        // onMouseLeave= { (e) => {
        //   e.target.style = "-webkit-transform: rotate(0deg);"
        // }}
      >
        Dan Murphy
      </StyledLogo>
      <StyledLinkWrapper>
        <StyledLink
          to="/projects"
          onMouseEnter={(e) => {
            navLinkStylesEnter(e);
          }}
          onMouseLeave={(e) => {
            navLinkStylesLeave(e);
          }}
        >
          Projects
        </StyledLink>
        <StyledLink
          to="/about"
          onMouseEnter={(e) => {
            navLinkStylesEnter(e);
          }}
          onMouseLeave={(e) => {
            navLinkStylesLeave(e);
          }}
        >
          About
        </StyledLink>
        <StyledLink
          to="/contact"
          onMouseEnter={(e) => {
            navLinkStylesEnter(e);
          }}
          onMouseLeave={(e) => {
            navLinkStylesLeave(e);
          }}
        >
          Contact
        </StyledLink>
      </StyledLinkWrapper>
    </HeaderWrapper>
  );
};

export default Header;