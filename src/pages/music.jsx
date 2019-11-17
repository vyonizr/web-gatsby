import React from 'react';

import Music from '../modules/Music'
import Navbar from '../modules/Navbar'
import navHeight from '../modules/Navbar/style'

export default function MusicPage() {
  return (
    <>
      <Navbar
        activePage='music'
      />
      <Music navBarHeight={navHeight} />
    </>
  );
}