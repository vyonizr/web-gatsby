import React, { useState, useEffect } from "react"
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa"

import Layout from "components/layout"
import SEO from "components/seo"
import { characters } from 'consts'
import { modulo } from 'utils'

import {
  MainContainer,
  AvatarContainer,
  NavigationContainer,
  CharDescription,
  CharLink,
  NavButton,
  LinkContainer
} from './styles'

const IndexPage = () => {
  const [index, setIndex] = useState(0)
  const [currentChar, setCurrentChar] = useState(characters[0])

  useEffect(() => {
    setCurrentChar(characters[modulo(index, characters.length)])
  }, [index])

  return (
    <Layout>
      <SEO title="Home" />
      <MainContainer>
        <AvatarContainer>
          <img
            src={currentChar.avatar}
            alt={currentChar.role + " avatar"}
          />
        </AvatarContainer>
        <NavigationContainer>
          <NavButton action="previous" onClick={() => setIndex(index - 1)}>
            <FaChevronCircleLeft size={40} />
          </NavButton>
          <CharDescription>
            <h2>vyonizr is</h2>
            <h2>{currentChar.role}</h2>
          </CharDescription>
          <NavButton action="next" onClick={() => setIndex(index + 1)}>
            <FaChevronCircleRight size={40} />
          </NavButton>
        </NavigationContainer>
        <LinkContainer>
          {currentChar.links.map((link, index) => (
            <CharLink key={index}>
              -{" "}
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>{" "}
                -
            </CharLink>
          ))}
        </LinkContainer>
      </MainContainer>
    </Layout>
  )
}

export default IndexPage
