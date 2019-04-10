import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="GraphQL Conf - Bondsee" />
    <div>
      <Hero />
    </div>
  </Layout>
)

export default IndexPage
