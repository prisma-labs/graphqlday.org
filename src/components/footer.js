import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"

const Footer = styled.footer``

const PinkFooter = styled.div`
  background: #db3f74;
  bottom: 0;
  width: 100%;
  padding: 0 0 24px 0;

  .topper {
    background: #f56199;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 18px;
    margin-bottom: 24px;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 830px;
  }

  .text {
    display: block;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 8px;
    font-weight: 600;
    color: white;
  }

  p {
    opacity: 0.75;
    font-weight: 400;
    color: white;
  }
`

const Form = styled.form`
  display: block;

  input {
    width: 300px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px 0 0 5px;
    border: none;
    padding: 16px 0 16px 16px;
    color: rgba(255, 255, 255, 0.6);
    padding-left: 16px;
    overflow: hidden;
    outline: none;
    font-size: 16px;
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  button {
    background: white;
    border-radius: 0 5px 5px 0;
    color: #db3f74;
    padding: 16px 32px;
    border: none;
    font-size: 16px;
    font-weight: 600px;
  }
`

const FooterSection = ({ children }) => (
  <Footer>
    <PinkFooter>
      <div className="topper" />
      <div className="content">
        <div className="text">
          <h3>Don’t want to miss out? </h3>
          <p>Sign up for our newsletter</p>
        </div>
        <Form>
          <input type="email" placeholder="Add your email" />
          <button type="submit">Sign up</button>
        </Form>
      </div>
    </PinkFooter>
  </Footer>
)

export default FooterSection
