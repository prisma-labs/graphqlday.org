import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import topBar from "../pages/static/pink-topbar.svg"
import logo from "../pages/static/logo-graphql.svg"

const TopBar = styled.img`
  top: 0;
  right: 0;
  left: 0;
  display: block;
  width: 100%;
  margin: 0;
`

const Nav = styled.header`
  padding: 24px 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavLinks = styled.div`
  display: block;

  .navLink {
    text-decoration: none;
    color: #000000;
    margin-right: 2em;
  }
`

const Logo = styled(Link)`
  text-decoration: none;
  color: #000000;
  display: flex;
  align-items: center;
  margin-bottom: 0;

  .logo {
    height: 35px;
    width: 35px;
    display: inline-block;
  }

  h3 {
    display: inline-block;
    margin-left: 0.5em;
  }
`

const Header = ({ children }) => (
  <>
    <TopBar src={topBar} alt="" />
    <Nav>
      <Logo to="/" alt="GraphQL Conf Bodensee Page">
        <img src={logo} alt="GraphQL Conf Bodensee Logo" className="logo" />
        <h3>GraphQL Day Bodensee</h3>
      </Logo>
      <NavLinks align="right">
        <Link to="/#upcoming-events" alt="" className="navLink">
          Events
        </Link>
        <a
          href="https://www.graphqlconf.org"
          alt=""
          target="_blank"
          rel="noopener noreferrer"
          className="navLink"
        >
          GraphQL Conf{" "}
          <span role="img" aria-label="tada emoji">
            🎉
          </span>
        </a>
        {children}
      </NavLinks>
    </Nav>
  </>
)

export default Header
