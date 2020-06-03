import React, { useState, useEffect } from "react"
import styled from "styled-components";
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  fr,
  gamer,
  musicProducer,
  visualHobbyist,
  programmer
} from '../images/avatars'

const MainContainer = styled.div`
  padding-top: 10vh;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const NavigationContainer = styled.div`
  flex: 1;
  margin-top: -.5rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: .5rem;

  & > div:first-child {
    text-align: right;
  }
  & > div:last-child {
    text-align: left;
  }
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
`

const PrevButton = styled(FaChevronCircleLeft)`
  cursor: pointer;
`

const NextButton = styled(FaChevronCircleRight)`
  cursor: pointer;
`

const LinkContainer = styled.div`
  flex: auto;
  overflow-y: auto;
  margin-bottom: 1rem;
`

const IndexPage = () => {
  const [characters] = useState([
    {
      role: 'Fitrahtur Rahman',
      avatar: fr,
      links: [
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/fitrahtur-rahman/'
        }
      ]
    },
    {
      role: 'a music producer',
      avatar: musicProducer,
      links: [
        {
          name: 'spotify',
          url: 'https://open.spotify.com/artist/40lkpbIOSU33kN0mZyMvFW?si=cjJAEzngRh-IZdFX_up2uQ'
        },
        {
          name: 'apple music',
          url: 'https://music.apple.com/us/artist/vyonizr/818525307'
        },
        {
          name: 'youtube',
          url: 'https://www.youtube.com/channel/UCf5J9KJQsHHiVFWokEnegqg'
        }
      ]
    },
    {
      role: 'a programmer',
      avatar: programmer,
      links: [
        {
          name: 'github',
          url: 'https://github.com/vyonizr/'
        },
        {
          name: 'codewars',
          url: 'https://www.codewars.com/users/vyonizr'
        }
      ]
    },
    {
      role: 'a gamer',
      avatar: gamer,
      links: [
        {
          name: 'steam',
          url: 'https://steamcommunity.com/id/vyonizr/'
        }
      ]
    },
    {
      role: 'a visual hobbyist',
      avatar: visualHobbyist,
      links: [
        {
          name: 'vsco',
          url: 'https://vsco.co/vyonizr/gallery'
        },
        {
          name: 'deviantart',
          url: 'https://www.deviantart.com/vyonizr'
        }
      ]
    },
  ])

  const [index, setIndex] = useState(0)
  const [currentChar, setCurrentChar] = useState(characters[0])

  useEffect(() => {
    setCurrentChar(characters[index])
  }, [index, characters]);

  return (
    <Layout>
      <SEO title="Home" />
      <MainContainer>
        <img src={ currentChar.avatar } alt={ currentChar.role + ' avatar' } style={{objectFit: 'contain'}} />
        <div style={{marginTop: '0.75rem'}}>
          <h2 style={{flex: 1}}>vyonizr is</h2>
          <NavigationContainer>
            <NavButton>
              {
                index > 0 && (
                  <PrevButton size={32} onClick={() => setIndex(index-1)} />
                )
              }
            </NavButton>
            <h2 style={{flex: 3}}>{currentChar.role}</h2>
            <NavButton>
              {
                index < characters.length - 1 && (
                  <NextButton size={32} onClick={() => setIndex(index+1)} disabled={ index === characters.length - 1 } />
                )
              }
            </NavButton>
          </NavigationContainer>
        </div>
        <LinkContainer>
          <ul>
            { currentChar.links.map((link, index) => 
              <CharLink key={ index }>- <a href={ link.url } target='_blank' rel="noopener noreferrer">{ link.name }</a> -</CharLink>
            )}
          </ul>
        </LinkContainer>
      </MainContainer>
    </Layout>
  )
}

export default IndexPage
