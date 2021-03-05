import styled from "styled-components"

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const AvatarContainer = styled.div`
  height: 12rem;

  img {
    max-width:100%;
    max-height:100%;
  }
`

const CharLink = styled.li`
  list-style: none;
  align-items: flex-end;

  a {
    color: white;
    font-size: 1.2rem;
  }
`

const NavigationContainer = styled.div`
  width: 23rem;
  margin-top: .72rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

const CharDescription = styled.div`
  margin: 0 .5rem;
`

const NavButton = styled.div`
  width: fit-content;
  display: flex;
  margin-right: ${props => props.action === "previous" ? "0" : "1rem"};
  margin-left: ${props => props.action === "previous" ? "1rem" : "0"};
  justify-content: ${props =>
    props.action === "previous" ? "flex-end" : "flex-start"};

  > svg {
    cursor: pointer;

    @media (hover: hover) and (pointer: fine) {
      :hover {
        color: #b0bec5;
      }
    }
    transition: 0.25s;
  }
`

const LinkContainer = styled.ul`
  flex-basis: 25%;
  overflow-y: auto;
  margin-bottom: 1rem;
`

export {
  MainContainer,
  AvatarContainer,
  NavigationContainer,
  CharDescription,
  CharLink,
  NavButton,
  LinkContainer
}
