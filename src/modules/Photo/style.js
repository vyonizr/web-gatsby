import styled from 'styled-components'

const FullWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  background-color: #272727;
  color: white;
  justify-content: center;
  transition: all .3s ease-in-out;
  font-family: 'Muli', sans-serif;
  padding: 5.5rem 2rem 0rem;

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

const PhotoContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-self: center;
  align-content: center;
  margin-bottom: 2rem;
  max-width: 80%;
  max-height: 40rem;
  margin-left: -.75rem;
`

const Item = styled.div`
  transition: all .3s ease-in-out;
  pointer-events: auto;
  text-align: center;
  margin: 0 .75rem .75rem 0;

  img {
    max-width: 11rem;
    height: auto;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  }

  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`

export {
  FullWrapper,
  PhotoContainer,
  Item
}