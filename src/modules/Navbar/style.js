import styled from 'styled-components'
import { Link } from '@reach/router'

const navHeight = '8vh'

const Navbar = styled.nav`
  background-color: #121212;
  height: ${navHeight};
  overflow: hidden;
  width: 100%;
  display: block;
  z-index: 1;
`

const StyledLink = styled(Link)`
  font-family: 'Manjari', sans-serif;
  font-size: 1.2rem;
  display: inline-block;
  line-height: 8vh;
  vertical-align: middle;
  background-color: ${props => (props.active ? '#ffffff' : '#121212')};
  color: ${props => (props.active ? '#121212' : '#ffffff')};
  text-decoration: none;
  padding: 0rem 0.75rem;
  transition: all .5s;

  :hover {
    background-color: #ffffff;
    color: #121212;
    text-decoration: none;
  }
`

export { Navbar, StyledLink }
export default navHeight
