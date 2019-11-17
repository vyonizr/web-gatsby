import styled from 'styled-components'

const FullWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  background-color: ${props => props.bgColor};
  color: white;
  justify-content: center;
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

const SingleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  justify-content: space-evenly;
  margin-bottom: 2rem;
  width: 53%;
  align-content: center;
`

const Item = styled.div`
  position: relative;
  transition: all .3s ease-in-out;
  height: 150px;
  width: auto;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  pointer-events: auto;
  text-align: center;
  overflow: hidden;
  margin-bottom: 15px;

  .album-description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.8);
    height: 100%;
    width: 100%;
    position: absolute;
    bottom: -100%;
    transform: translate(0%, 0%);
    transition: all .3s ease-in-out;
  }

  .album-year {
    font-size: 0.6rem;
    font-weight: lighter;
  }

  :hover {
    transform: scale(1.1);
    cursor: pointer;

    .album-description {
      transform: translate(0%, -100%);
    }
  }


`

export {
  FullWrapper,
  SingleContainer,
  Item
}