/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "static/styles/global.css"
import "static/styles/ress.min.css"
import styled from "styled-components"

const FullHeightContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ChildrenContainer = styled.div`
  flex: 1;
`

const FooterContainer = styled.footer`
  height: 5%;
  text-align: center;
  justify-self: flex-end;
`

const Layout = ({ children }) => {
  return (
    <>
      <FullHeightContainer>
        <ChildrenContainer>{children}</ChildrenContainer>
        <FooterContainer>© {new Date().getFullYear()} vyonizr</FooterContainer>
      </FullHeightContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
