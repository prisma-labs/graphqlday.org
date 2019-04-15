import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"

import Footer from "../components/footer"
import SEO from "../components/seo"

import logo from "./static/logo-graphql.svg"
import sponsor from "./static/sponsorship.png"

const Sponsors = styled.div`
  text-align: center;

  .bigLogo {
    padding: 64px 32px 32px 32px;
  }

  h1 {
    margin-bottom: 16px;
  }

  h2 {
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 32px;
  }

  .sponsors {
    background: url(${sponsor}) no-repeat center center;
    background-size: cover;
    height: 800px;
    margin-bottom: 64px;
  }

  p {
    margin-bottom: 64px;
    font-size: 24px;
  }

  .pink {
    font-size: 32px;
    font-weight: 700;
    color: #f56199;
    letter-spacing: 0.5px;
  }

  .alts {
    font-size: 32px;
    font-weight: 400;
    letter-spacing: 0.5px;
  }

  .contact {
    max-width: 800px;
    margin: 0 auto 64px auto;
    color: #1f2228;
  }

  .highlight {
    color: #f56199;
  }

  .emailLink {
    text-decoration: none;
    opacity: 0.6;
    transition: all 300ms;
  }

  .emailLink:hover {
    opacity: 1;
  }
`

const SponsorsPage = () => (
  <Sponsors>
    <SEO title="Sponsors Page | GraphQL Day Bodensee" />
    <img src={logo} height="175px" className="bigLogo" />
    <h1>GraphQL Day Bodensee</h1>
    <h2>Sponsorship 2019</h2>
    <div className="sponsors" />
    <p className="alts">
      <span className="pink">Diversity Sponsor</span> (€4,000) -{" "}
      <span className="pink">After Party Sponsor</span> (€3,000)
    </p>
    <h2>Looking for something different?</h2>
    <p className="contact">
      We encourage our sponsors to stick with the suggested packages.{" "}
      <span className="highlight">
        But if you have a brilliant idea, we are open to hearing!
      </span>{" "}
      Email our team and we can see what we can do on{" "}
      <a
        href="mailto:sponsors@graphqlconf.org"
        alt="email graphql conf for sponsorship"
        className="emailLink"
      >
        sponsors@graphqlconf.org
      </a>
      .
    </p>
    <Footer />
  </Sponsors>
)

export default SponsorsPage
