import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FullWrapper = styled.div`
  display: flex;
  padding-top: 5rem;
  height: 100%;
  background-color: #272727;
  color: white;

  .about {
    font-family: 'Muli', sans-serif;
    font-size: 1.4rem;
    text-align: justify;
    text-align-last: center;
    margin-bottom: 1rem;
  }

  img.vyonizr-home-logo {
    max-height: 11rem;
    margin-bottom: 2rem;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  .menu-list {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const WidthShrink = styled.div`
  max-width: 54vw;
  display: block;
  margin-right: auto;
  margin-left: auto;

  div {
    align-items: center;
    justify-content: center;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  height: 5rem;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  transition: all 0.15s ease-in-out;
  display: inline-block;
  margin: 0.5rem 1.5rem;
  color: #fff;

  :hover {
    color: ${(props) => (props.color ? props.color : '#fff')};
  }
`;

export { FullWrapper, WidthShrink, SocialContainer, StyledFontAwesomeIcon };
