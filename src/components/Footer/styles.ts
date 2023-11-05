import styled from 'styled-components'
import { cores } from './../../styles'

export const Container = styled.footer`
  background-color: ${cores.rosa2};
  width: 1366px;
  height: 298px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    margin-top: 32.5px;
  }
`

export const LogoImg = styled.img`
  margin-top: 40px;
  width: 125px;
  height: 57.5px;
`

export const StyledUl = styled.ul`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin-right: 8px; /* Adjust the spacing between icons */
  /* Add padding or margin if needed for top/bottom spacing */

  img {
    width: 24px;
    height: 24px;
  }
`

export const TextFooter = styled.h1`
  text-align: center;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  line-height: normal;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 40px;
  width: 480px;
`
