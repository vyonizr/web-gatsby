import React from 'react';

import Photography from '../modules/Photo'
import Navbar from '../modules/Navbar'
import navHeight from '../modules/Navbar/style'

export default function PhotographyPage() {
  return (
    <>
      <Navbar
        activePage='photo'
      />
      <Photography navBarHeight={navHeight}/>
    </>
  );
}