import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { notFoundMessages } from "constants"
import { getRandomArbitrary } from "utils"

import Layout from "components/layout"
import SEO from "components/seo"

const WhiteLink = styled(Link)`
  color: white;
`

const MainContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    width: fit-content;
    text-align: right;
  }
`

const NotFoundPage = () => {
  const generateMessage = (messages) => messages[Math.floor(getRandomArbitrary(0, messages.length))]

  return (
    <Layout>
      <SEO title="404" />
      <MainContainer>
        <div>
          <h1>{generateMessage(notFoundMessages)}</h1>
          <WhiteLink to="/">return to homepage</WhiteLink>
        </div>
      </MainContainer>
    </Layout >
  )
}

export default NotFoundPage
