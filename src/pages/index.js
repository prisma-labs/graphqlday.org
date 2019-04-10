import React from "react"
// import styled from "styled-components"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Community from "../components/community"
import Events from "../components/events"

const IndexPage = () => (
  <Layout>
    <SEO title="GraphQL Conf - Bondsee" />
    <div>
      <Hero />
      <Community />
      <Events />
    </div>
  </Layout>
)

export default IndexPage
