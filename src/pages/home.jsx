import React from 'react';
import Navbar from '../modules/Navbar'
import Home from '../modules/Home'

export default function HomePage() {
  return (
    <>
      <Navbar
        activePage='home'
      />
      <Home />
    </>
  );
}