import React from 'react';
import styled from 'styled-components';
import { Link /*StaticQuery, graphql*/ } from 'gatsby';
import { Row, Column } from 'hedron';
// import Img from "gatsby-image"

import germany from '../pages/static/logo-germany.svg';
import headerImages from '../pages/static/header-pictures@2x.png';

// const propPic = obj => obj.childImageSharp.fluid

const Wrapper = styled.section`
  text-align: center;

  h1 {
    margin-top: 64px;
    margin-bottom: 16px;
    font-weight: 800;
    line-height: 1.4;
    padding: 0 64px;
  }
  h2 {
    font-size: 32px;
    font-weight: 400;
    max-width: 545px;
    margin: 0 auto;
    line-height: 1.4;
    margin-bottom: 96px;
    padding: 0 64px;
  }

  .images {
    content: url(${headerImages});
    background-size: cover;
    height: 400px;
    margin-bottom: 144px;
  }

  .cardWrapper {
    padding: 0 16px;
  }

  .card {
    background: white;
    border-radius: 5px;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.078493),
      0px 2px 4px rgba(0, 0, 0, 0.217929);
    max-width: 830px;
    margin: 0 auto -50px auto;
    display: flex;
    align-items: center;
    position: relative;
    padding: 32px;
  }

  .textGroup {
    text-align: left;
  }

  button {
    padding: 16px 32px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.5s;
  }

  button:hover {
    box-shadow: 0 16px 32px 0 rgba(62, 57, 107, 0.18), 0 0 0 transparent;
    transform: translate(0px, -5px);
  }

  button:disabled {
    background: lightgray;

    :hover {
      transform: none;
      box-shadow: none;
    }
  }

  .dark {
    background: #db3f74;
    color: white;
    border: none;
    margin-right: 16px;

    @media (max-width: 435px) {
      margin-right: 0;
      margin-bottom: 16px;
    }
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
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  .announcement {
    text-transform: uppercase;
    text-align: left;
    max-width: 850px;
    margin: 0 auto 8px auto;
    color: #9c9c9c;
    font-weight: 600;
  }
`

export default ({ children }) => (
  <Wrapper>
    <h1>Hello!</h1>
    <h2>We Think you Should Join our Global GraphQL Day Community!</h2>

    <div className="cardWrapper">
      <p className="announcement">Next event</p>
      <Row className="card">
        <Column lg={6} md={12} className="left">
          <img src={germany} alt="germany graphql conference" />
          <div className="textGroup">
            <h3>GraphQL Day Bodensee</h3>
            <p>6th September, 2019</p>
          </div>
        </Column>

        <Column lg={6} md={12} className="buttons">
          <a
            href="https://www.eventbrite.com/e/graphql-conf-2019-tickets-47172725893"
            alt="Get Ticket for GraphQL day Bodensee"
            disabled
          >
            <button className="dark" disabled>
              Get tickets
            </button>
          </a>
          <Link
            to="/bodensee"
            alt="More information about GraphQL day Bodensee"
          >
            <button className="light">More info</button>
          </Link>
        </Column>
      </Row>
    </div>
    <div className="images" />
    {/* <Img fluid={propPic(data.heroImage)} className="images" /> */}
  </Wrapper>
)
