import styled from 'styled-components'

const FullWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #272727;
  color: white;
  transition: all .3s ease-in-out;
  font-family: 'Muli', sans-serif;
  padding: 4rem 2rem 0rem;

  a {
    text-decoration: inherit;
    color: inherit;
  }

  li a:hover {
    text-decoration: underline;
  }

  ul {
    margin-top: 0.4rem;
  }

  h2 {
    margin: 0.4rem 0rem;
  }
`

export {
  FullWrapper
}