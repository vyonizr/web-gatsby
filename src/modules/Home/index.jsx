import React, { useState } from 'react'

import {
  FullWrapper,
  WidthShrink,
  SocialContainer,
  StyledFontAwesomeIcon,
} from './style'
import { vyonizrLogo } from '../../assets'

import {
  faSpotify,
  faInstagram,
  faYoutube,
  faDeviantart,
  faGithub,
  faItunes,
} from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  const [socialIcons] = useState([
    {
      logo: faGithub,
      title: 'Github',
      url: 'https://github.com/vyonizr',
      color: '#4078c0',
    },
    {
      logo: faSpotify,
      title: 'Spotify',
      url: 'https://open.spotify.com/artist/40lkpbIOSU33kN0mZyMvFW',
      color: '#1db954',
    },
    {
      logo: faInstagram,
      title: 'Instagram',
      url: 'https://www.instagram.com/vyonizr/',
      color: '#e1306c',
    },
    {
      logo: faDeviantart,
      title: 'Deviantart',
      url: 'https://www.deviantart.com/vyonizr',
      color: '#05CC46',
    },
    {
      logo: faYoutube,
      title: 'Youtube',
      url: 'https://www.youtube.com/user/vyonizr',
      color: '#ff0000',
    },
    {
      logo: faItunes,
      title: 'iTunes',
      url: 'https://music.apple.com/us/artist/vyonizr/818525307',
      color: '#EA4CC0',
    },
  ])

  return (
    <FullWrapper>
      <WidthShrink>
        <div>
          <img
            src={vyonizrLogo}
            alt={'vyonizr logo'}
            className="vyonizr-home-logo"
          />
        </div>
        <div>
          <p className="about">
            vyonizr ( /vaɪ.əˌnaɪ.zə/ ) is a pseudonym created by Fitrahtur
            Rahman as a medium to bring the world his creative works
          </p>
        </div>
        <SocialContainer>
          {socialIcons.map((social, index) => (
            <div key={index}>
              <a
                href={social.url}
                title={social.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledFontAwesomeIcon
                  color={social.color}
                  icon={social.logo}
                  size="3x"
                />
              </a>
            </div>
          ))}
        </SocialContainer>
      </WidthShrink>
    </FullWrapper>
  )
}
