import React, { useState } from 'react'
import { Navbar, StyledLink } from './style'

export default function NavbarModule(props) {
  const { activePage } = props

  const checkActivePage = (page) => {
    return activePage === page
  }

  const [menu] = useState([
    {
      name: 'HOME',
      url: '/',
      active: checkActivePage('home')
    },
    {
      name: 'MUSIC',
      url: '/music',
      active: checkActivePage('music')
    },
    {
      name: 'PHOTO',
      url: '/photo',
      active: checkActivePage('photo')
    },
    // {
    //   name: 'MISC',
    //   url: '/misc',
    //   active: checkActivePage('misc')
    // }
  ])

  return (
    <Navbar>
      {menu.map((menu, index) => (
        <StyledLink
          active={menu.active}
          to={menu.url}
          key={index}
        >
          {menu.name}
        </StyledLink>
      ))}
    </Navbar>
  )
}
