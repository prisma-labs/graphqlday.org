import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"

import arrow from "../pages/static/arrow.svg"

const Card = styled.div`
  background: white;
  border: 1px solid #eceef1;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  margin-bottom: 16px;
  transition: all 0.5s;

  :hover {
    box-shadow: 0 10px 40px 0 rgba(97, 4, 95, 0.07),
      0 2px 9px 0 rgba(62, 57, 107, 0.06);
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: #9c9c9c;
  }

  p {
    font-size: 12px;
    font-weight: 400;
    color: #9c9c9c;
  }

  img {
    padding-right: 26px;
  }

  .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const EventCard = ({ altText, image, confTitle, confDate }) => (
  <Card>
    <div className="left">
      <img src={image} alt={altText} height="36px" width="36px" />
      <div>
        <h3>{confTitle}</h3>
        <p>{confDate}</p>
      </div>
    </div>
    <img src={arrow} alt="Gray Arrow" />
  </Card>
)

export default EventCard
