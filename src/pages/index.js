import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  fr,
  gamer,
  musicProducer,
  visualHobbyist,
  programmer,
} from "../images/avatars"

const MainContainer = styled.div`
  padding-top: 10vh;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const CharLink = styled.li`
  list-style: none;
  align-items: flex-end;

  a {
    color: white;
    font-size: 1.2rem;
  }
`

const NavButton = styled.div`
  flex: 1;
  display: flex;
  justify-content: ${props => props.action === 'previous' ? 'flex-end' : 'flex-start'};

  > svg {
    cursor: pointer;

    @media(hover: hover) and (pointer: fine) {
      :hover {
        color: #b0bec5;
      }
    }
    transition: .25s;
  }

`

const LinkContainer = styled.div`
  flex: auto;
  overflow-y: auto;
  margin-bottom: 1rem;
`

const IndexPage = () => {
  const [characters] = useState([
    {
      role: "Fitrahtur Rahman",
      avatar: fr,
      links: [
        {
          name: "linkedin",
          url: "https://www.linkedin.com/in/fitrahtur-rahman/",
        },
        {
          name: "blog",
          url: "https://blog.vyonizr.com/",
        },
      ],
    },
    {
      role: "a music producer",
      avatar: musicProducer,
      links: [
        {
          name: "spotify",
          url:
            "https://open.spotify.com/artist/40lkpbIOSU33kN0mZyMvFW?si=cjJAEzngRh-IZdFX_up2uQ",
        },
        {
          name: "apple music",
          url: "https://music.apple.com/us/artist/vyonizr/818525307",
        },
        {
          name: "youtube",
          url: "https://www.youtube.com/channel/UCf5J9KJQsHHiVFWokEnegqg",
        },
      ],
    },
    {
      role: "a programmer",
      avatar: programmer,
      links: [
        {
          name: "github",
          url: "https://github.com/vyonizr/",
        },
        {
          name: "codewars",
          url: "https://www.codewars.com/users/vyonizr",
        },
      ],
    },
    {
      role: "a gamer",
      avatar: gamer,
      links: [
        {
          name: "steam",
          url: "https://steamcommunity.com/id/vyonizr/",
        },
      ],
    },
    {
      role: "a visual hobbyist",
      avatar: visualHobbyist,
      links: [
        {
          name: "vsco",
          url: "https://vsco.co/vyonizr/gallery",
        },
        {
          name: "deviantart",
          url: "https://www.deviantart.com/vyonizr",
        },
      ],
    },
  ])

  const [index, setIndex] = useState(0)
  const [currentChar, setCurrentChar] = useState(characters[0])

  const modulo = (dividend, divisor) => {
    return ((dividend % divisor) + divisor) % divisor
  }

  useEffect(() => {
    setCurrentChar(characters[modulo(index, characters.length)])
  }, [index, characters])

  return (
    <Layout>
      <SEO title="Home" />
      <MainContainer>
        <img
          src={currentChar.avatar}
          alt={currentChar.role + " avatar"}
          style={{ objectFit: "contain" }}
        />
        <div style={{
          marginTop: "0.75rem",
          display: "flex",
          alignItems: "center"
        }}>
          <NavButton action="previous" onClick={() => setIndex(index - 1)}>
            <FaChevronCircleLeft size={40} />
          </NavButton>
          <div style={{
            flexBasis: '60%',
            margin: '0 .5rem'
          }}>
            <h2 style={{ marginBottom: "-.5rem" }}>vyonizr is</h2>
            <h2>{currentChar.role}</h2>
          </div>
          <NavButton action="next" onClick={() => setIndex(index + 1)}>
            <FaChevronCircleRight size={40} />
          </NavButton>
        </div>
        <LinkContainer>
          <ul>
            {currentChar.links.map((link, index) => (
              <CharLink key={index}>
                -{" "}
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>{" "}
                -
              </CharLink>
            ))}
          </ul>
        </LinkContainer>
      </MainContainer>
    </Layout>
  )
}

export default IndexPage
