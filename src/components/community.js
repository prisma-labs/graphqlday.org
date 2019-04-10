import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"

import organizers from "../pages/static/organizers-logo.svg"

const Wrapper = styled.section`
  max-width: 520px;
  padding: 0 2em;
  margin: 0 auto 64px auto;
  text-align: center;

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
`

const CommunitySection = ({ children }) => (
  <Wrapper>
    <h2>Connect with Your Local Community Members</h2>
    <p>
      GraphQL Days are a series of global events focused on GraphQL. Part of the
      GraphQL Conf family, the events are run by local partners, with community
      support from Prisma and Honeypot.
    </p>
    <img
      src={organizers}
      alt="Honeypot, Prisma and GraphCMS are organizing the Bodensee GraphQL day"
    />
  </Wrapper>
)

export default CommunitySection
