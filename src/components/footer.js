import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Row, Column } from "hedron"

import logo from "../pages/static/logo-graphql.svg"
import twitter from "../pages/static/twitter.png"
import mail from "../pages/static/mail.png"

import honeypot from "../pages/static/Honeypot.svg"
import gcms from "../pages/static/gcms.svg"
import prisma from "../pages/static/prisma.svg"
import x from "../pages/static/xMark.svg"

const Footer = styled.footer`
  border-top: 1px solid #f1f1f1;
`

const LinkSection = styled(Row)`
  padding: 24px 80px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .links {
    max-width: 250px;
    margin: 0 auto;
    text-align: center;
  }

  a {
    display: block;
    text-decoration: none;
    color: #aaacaa;
    font-size: 16px;
    padding-bottom: 8px;
  }

  .icon {
    padding-right: 8px;
  }

  .col {
    display: flex;
    margin: 0 auto;
    padding: 8px;
  }

  .logo {
    display: flex;
    justify-content: center;
  }
`

const PinkFooter = styled.div`
  background: #db3f74;
  bottom: 0;
  width: 100%;
  padding: 0 0 24px 0;

  .topper {
    background: #f56199;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 18px;
    margin-bottom: 24px;
  }

  .content {
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: 850px;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 8px;
    font-weight: 600;
    color: white;
  }

  p {
    opacity: 0.75;
    font-weight: 400;
    color: white;
  }
`

const Form = styled.form`
  display: block;

  input {
    width: 300px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px 0 0 5px;
    border: none;
    padding: 16px 0 16px 16px;
    color: rgba(255, 255, 255, 1);
    padding-left: 16px;
    overflow: hidden;
    outline: none;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    input {
      width: 200px;
    }
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  button {
    background: white;
    border-radius: 0 5px 5px 0;
    color: #db3f74;
    padding: 16px 32px;
    border: none;
    font-size: 16px;
    font-weight: 600px;
  }
`

const FooterSection = ({ children }) => (
  <Footer>
    <LinkSection>
      <Column lg={2} md={12} className="logo">
        <Link to="/" alt="GraphQL Day Bodensee Sponsored by GraphCMS">
          <img src={logo} alt="GraphQL Day Bodensee logo" />
        </Link>
      </Column>
      <Column lg={4} sm={12} className="links">
        <Link
          to="/bodensee#attend"
          alt="Tickets to attend GraphQL Day Bodensee Conference"
        >
          Attend
        </Link>

        <Link
          to="/bodensee#speakers"
          alt="Speakers for the GraphQL Day Bodensee Conference"
        >
          Speakers
        </Link>

        <Link
          to="/sponsors"
          alt="Sponsorship offerings for the GraphQL Day Bodensee Conference"
        >
          Sponsors
        </Link>
      </Column>

      <Column lg={4} md={12} className="links">
        <a
          href="https://twitter.com/graphcms"
          alt="GraphCMS Twitter"
          target="blank"
          rel=""
        >
          <img src={twitter} alt="Twitter icon" className="icon" />
          Twitter
        </a>
        <a href="mailto:hello@graphcms.com" alt="GraphCMS email">
          <img src={mail} alt="Mail icon" className="icon" />
          Contact Us!
        </a>
        <Link
          to="/conduct"
          alt="Code of Conduct for the GraphQL Day Bodensee Conference"
        >
          Code of Conduct
        </Link>
      </Column>
      <Column lg={2} md={12}>
        <img
          src={honeypot}
          alt="honeypot at graphql day bodensee"
          className="col"
        />
        <img src={x} alt="collaboration symbol" className="col" />
        <img
          src={gcms}
          alt="graphcms at graphql day bodensee"
          className="col"
        />
        <img src={x} alt="collaboration symbol" className="col" />
        <img
          src={prisma}
          alt="prisma at graphql day bodensee"
          className="col"
        />
      </Column>
    </LinkSection>
    <PinkFooter>
      <div className="topper" />
      <Row className="content">
        <Column lg={5} sm={12} className="column">
          <h3>Don’t want to miss out?</h3>
          <p>Sign up for our newsletter</p>
        </Column>
        <Column lg={7} sm={12} className="column">
          <Form>
            <input type="email" placeholder="Add your email" />
            <button type="submit">Sign up</button>
          </Form>
        </Column>
      </Row>
    </PinkFooter>
  </Footer>
)

export default FooterSection
