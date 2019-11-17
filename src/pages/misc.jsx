import React from 'react';

import Misc from '../modules/Misc'
import Navbar from '../modules/Navbar'
import navHeight from '../modules/Navbar/style'

export default function MiscPage() {
  return (
    <>
      <Navbar
        activePage='misc'
      />
      <Misc navBarHeight={navHeight} />
    </>
  );
}