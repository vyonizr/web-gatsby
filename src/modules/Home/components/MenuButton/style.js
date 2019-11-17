import styled from 'styled-components'

const Button = styled.div`
    display: inline-block;
    margin: 0.5rem 0.5rem 0.5rem 0.5rem;
    padding: 0.4rem 0rem 0.4rem 0.15rem; /* last value keeps the text centered due to letter spacing */
    width: 8rem;
    background-color: #FFFFFF;
    color: #104868;
    font-family: 'Roboto', sans-serif;
    font-size: 1.02rem;
    text-align: center;
    text-decoration: none;
    letter-spacing: 0.15rem;
    transition: all 0.4s;

  :hover {
    background-color: #107dac;
    color: #FFFFFF;
  }
`

export {
  Button
}