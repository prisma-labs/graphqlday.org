import React from "react"
import styled from "styled-components"
import { Row, Column } from "hedron"
// import { Link } from "gatsby"

import honeypot from "../pages/static/Honeypot.svg"
import prisma from "../pages/static/prisma.svg"
import gcms from "../pages/static/gcms.svg"
import x from "../pages/static/xMark.svg"

const Wrapper = styled.section`
  max-width: 520px;
  padding: 0 2em;
  margin: 0 auto 64px auto;
  text-align: center;

  .group {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .col {
    display: flex;
    justify-content: center;
    padding: 8px;
  }

  h2 {
    font-size: 32px;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 16px;
  }

  p {
    opacity: 0.7;
    line-height: 2;
    margin-bottom: 32px;
  }

  a {
    transition: all 0.5s;
  }

  a:hover {
    transform: translate(0px, -5px);
  }
`

const CommunitySection = ({ children }) => (
  <Wrapper>
    <h2>Connect with Your Local Community Members</h2>
    <p>
      GraphQL Days are a series of global events focused on GraphQL. Part of the
      GraphQL Conf family, the events are run by local partners, with community
      support from Prisma and Honeypot.
    </p>
    <Row className="group">
      <Column lg={3} md={12} className="col">
        <a href="https://www.honeypot.io" alt="Honeypot's website">
          <img src={honeypot} alt="honeypot at graphql day bodensee" />
        </a>
      </Column>
      <Column lg={1} md={12} className="col">
        <img src={x} alt="collaboration symbol" />
      </Column>
      <Column lg={4} md={12} className="col">
        <a href="https://graphcms.com/" alt="GraphCMS's Website">
          <img src={gcms} alt="graphcms at graphql day bodensee" />
        </a>
      </Column>
      <Column lg={1} md={12} className="col">
        <img src={x} alt="collaboration symbol" />
      </Column>
      <Column lg={3} md={12} className="col">
        <a href="https://www.prisma.io" alt="Prisma's website">
          <img src={prisma} alt="prisma at graphql day bodensee" />
        </a>
      </Column>
    </Row>
  </Wrapper>
)

export default CommunitySection
