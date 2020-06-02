import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";

import Layout from "../components/layout"
import SEO from "../components/seo"

const WhiteLink = styled(Link)`
  color: white;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <div style={{margin: 'auto'}}>
      <h1>page not found</h1>
      <WhiteLink to="/">return to homepage</WhiteLink>
    </div>
  </Layout>
)

export default NotFoundPage
