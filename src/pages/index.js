import React from 'react'
import styled from 'styled-components'
import { Router } from '@reach/router'
import Helmet from 'react-helmet'

import './App.css'
import './global.css'
import Home from './home.jsx'
import Music from './music.jsx'
import Photo from './photo.jsx'
import Misc from './misc.jsx'

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          http-equiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
        <title>vyonizr</title>
        <link rel="canonical" href="https://vyonizr.com" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </Helmet>

      <Container>
        <Router>
          <Home exact path="/" />
          <Music exact path="/music" />
          <Photo exact path='/photo' />
          <Misc exact path='/misc' />
        </Router>
      </Container>
    </>
  )
}

export default App
