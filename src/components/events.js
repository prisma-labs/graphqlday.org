import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"

import FutureCard from "./futurecard"
import PastCard from "./pastcard"

import berlin from "../pages/static/logo-graphqlconf.svg"
import germany from "../pages/static/logo-germany.svg"

import canada from "../pages/static/logo-canada@2x.png"
import holland from "../pages/static/logo-holland@2x.png"

const Wrapper = styled.section`
  max-width: 830px;
  padding: 0 2em;
  margin: 0 auto 64px auto;

  h2 {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 16px;
  }

  .pink {
    color: #db3f74;
  }

  .gray {
    color: #9c9c9c;
    padding-top: 2em;
  }
`

const EventSection = ({ children }) => (
  <Wrapper>
    <h2 className="pink">Upcoming events</h2>
    <FutureCard
      image={berlin}
      altText="GraphQL Conf Logo"
      confTitle="GraphQL Conf Berlin"
      confDate="20th-21st June, 2019"
    />
    <FutureCard
      image={germany}
      altText="Germany GraphQL Day Logo"
      confTitle="GraphQL Day Bodensee"
      confDate="6th September, 2019"
    />

    <h2 className="gray">Past events</h2>
    <PastCard
      image={canada}
      altText="Toronto GraphQL Day Logo"
      confTitle="GraphQL Day Toronto"
      confDate="28th February, 2019"
    />
    <PastCard
      image={holland}
      altText="Amsterdamn GraphQL Day Logo"
      confTitle="GraphQL Day Amsterdamn"
      confDate="14th April, 2018"
    />
  </Wrapper>
)

export default EventSection
