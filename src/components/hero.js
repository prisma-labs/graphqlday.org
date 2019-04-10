import React from "react"
import styled from "styled-components"

import germany from "../pages/static/logo-germany.svg"
import headerImages from "../pages/static/header-pictures@2x.png"

const Wrapper = styled.section`
  text-align: center;
  margin-bottom: 144px;

  h1 {
    margin-top: 64px;
    margin-bottom: 16px;
    font-weight: 800;
    line-height: 1.4;
  }
  h2 {
    font-size: 32px;
    font-weight: 400;
    max-width: 545px;
    margin: 0 auto;
    line-height: 1.4;
    margin-bottom: 144px;
  }

  .images {
    background: url(${headerImages});
    background-size: cover;
    height: 347px;
  }

  .card {
    background: white;
    border-radius: 5px;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.078493),
      0px 2px 4px rgba(0, 0, 0, 0.217929);
    max-width: 830px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
`

const Hero = ({ children }) => (
  <Wrapper>
    <h1>Hello!</h1>
    <h2>We Think you Should Join our Global GraphQL Day Community!</h2>

    <div className="images">
      <div className="card">
        <img src={germany} />
        <h3>GraphQL Day Bodensee</h3>
        <p>6th September, 2019</p>
        <button>Get tickets</button>
        <button>More info</button>
      </div>
    </div>
  </Wrapper>
)

export default Hero
