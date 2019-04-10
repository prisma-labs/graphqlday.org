import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"

import arrow from "../pages/static/arrow.svg"

const Card = styled.div`
  background: white;
  border-left: 5px solid #db3f74;
  border-radius: 5px;
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.078493),
    0px 2px 10px rgba(0, 0, 0, 0.101421);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  margin-bottom: 16px;

  h3 {
    font-size: 16px;
    font-weight: 600;
  }

  p {
    font-size: 12px;
    font-weight: 400;
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

const EventCard = ({ altText, image, confTitle, confDate }) => (
  <Card>
    <div className="left">
      <img src={image} alt={altText} height="46px" width="46px" />
      <div>
        <h3>{confTitle}</h3>
        <p>{confDate}</p>
      </div>
    </div>
    <img src={arrow} alt="Gray Arrow" />
  </Card>
)

export default EventCard
