import React from "react"
import styled from "styled-components"

import germany from "../pages/static/logo-germany.svg"
import headerImages from "../pages/static/header-pictures@2x.png"

const Wrapper = styled.section`
  text-align: center;

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
    margin-bottom: 96px;
  }

  .images {
    background: url(${headerImages});
    background-size: cover;
    height: 360px;
    margin-bottom: 144px;
  }

  .card {
    background: white;
    border-radius: 5px;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.078493),
      0px 2px 4px rgba(0, 0, 0, 0.217929);
    max-width: 830px;
    margin: 0 auto -50px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 32px;
  }

  .textGroup {
    text-align: left;
    width: 330px;
  }

  button {
    padding: 16px 32px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }

  .dark {
    background: #db3f74;
    color: white;
    border: none;
    margin-right: 16px;
  }

  .light {
    background: white;
    color: #db3f74;
    border: 2px solid #db3f74;
  }

  a {
    text-decoration: none;
  }

  img {
    padding-right: 16px;
  }

  .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Hero = ({ children }) => (
  <Wrapper>
    <h1>Hello!</h1>
    <h2>We Think you Should Join our Global GraphQL Day Community!</h2>

    <div className="card">
      <div className="left">
        <img src={germany} alt="germany graphql conference" />
        <div className="textGroup">
          <h3>GraphQL Day Bodensee</h3>
          <p>6th September, 2019</p>
        </div>
      </div>
      <div className="buttons">
        <a href="" alt="Get Ticket for GraphQL day Bodensee">
          <button className="dark">Get tickets</button>
        </a>
        <a href="" alt="More information about GraphQL day Bodensee">
          <button className="light">More info</button>
        </a>
      </div>
    </div>

    <div className="images" />
  </Wrapper>
)

export default Hero
