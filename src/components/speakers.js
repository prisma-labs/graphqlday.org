import React from "react"
import styled from "styled-components"
import { Row, Column } from "hedron"

import questionMark from "../pages/static/questionMark.png"

const Speakers = styled.section`
  padding: 64px 32px;
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    color: rgb(219, 63, 116);
    line-height: 1.1;
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-left: 20px;
    margin-bottom: 32px;
  }

  button {
    padding: 16px 32px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.5s;
    background: #db3f74;
    color: white;
    border: none;
    margin: 0 auto;
  }

  button:hover {
    box-shadow: 0 16px 32px 0 rgba(62, 57, 107, 0.18), 0 0 0 transparent;
    transform: translate(0px, -5px);
  }

  p {
    text-align: center;
    color: #c5d0de;
    text-transform: uppercase;
    margin-top: 16px;
  }

  .column {
    padding: 0;
  }
`

const Card = styled.div`
  margin: 0 auto;
  text-align: center;
  background: white;
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.078493);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  width: 250px;

  img {
    height: 110px;
  }

  .question {
    font-weight: 600;
    font-size: 16px;
    color: #f56199;
    text-align: center;
    margin-bottom: 32px;
  }
`

const SpeakerSection = () => (
  <Speakers>
    <h2>Speakers</h2>
    <Row>
      <Column lg={3} md={6} sm={12} className="column">
        <Card>
          <div>
            <h3 className="question">Want to speak?</h3>
            <a
              href="https://www.papercall.io/graphql-day-bodensee"
              alt="Call for papers"
            >
              <button>Submit an Idea</button>
            </a>
          </div>
        </Card>
      </Column>
      <Column lg={3} md={6} sm={12} className="column">
        <Card>
          <img src={questionMark} alt="question mark" />
        </Card>
        <p>To Be Determined</p>
      </Column>
      <Column lg={3} md={6} sm={12} className="column">
        <Card>
          <img src={questionMark} alt="question mark" />
        </Card>
        <p>To Be Determined</p>
      </Column>
      <Column lg={3} md={6} sm={12} className="column">
        <Card>
          <img src={questionMark} alt="question mark" />
        </Card>
        <p>To Be Determined</p>
      </Column>
    </Row>
  </Speakers>
)

export default SpeakerSection
