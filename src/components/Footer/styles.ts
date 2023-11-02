// Footer/styled.ts
import styled from 'styled-components'
import { cores } from './../../styles'

export const Container = styled.footer`
  background-color: ${cores.rosa2};
  padding: 200px 0;

      img {
        width: 125px;
        height: 57.5px;
        flex-shrink: 0;
      }
    div {
      /* Adjust styling for 'cat2' or any other elements */
    }

    p {
      /* Adjust styling for the paragraph */
    }
  }
`

export const TextFooter = styled.h1`
  text-align: center;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
