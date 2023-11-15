// components/Button/styles.ts

import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.' // Importe explicitamente o tipo Props do mesmo diretório

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) => {
    switch (props.variant) {
      case 'primary':
        return cores.rosa1
      case 'secondary':
        return cores.rosa2 // Substitua por sua cor desejada
      default:
        return cores.rosa3
    }
  }};
  color: ${(props) => {
    switch (props.variant) {
      case 'primary':
        return cores.rosa3
      case 'secondary':
        return cores.rosa1 // Substitua por sua cor desejada
      default:
        return cores.rosa1
    }
  }};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  display: inline-block;
  margin-right: 16px;
  border: none; // Remova a borda padrão do botão
`

export const ButtonLink = styled.a<Props>`
  background-color: ${(props) => {
    switch (props.variant) {
      case 'primary':
        return cores.rosa1
      case 'secondary':
        return cores.rosa2 // Substitua por sua cor desejada
      default:
        return cores.rosa3
    }
  }};
  color: ${(props) => {
    switch (props.variant) {
      case 'primary':
        return cores.rosa3
      case 'secondary':
        return cores.rosa1 // Substitua por sua cor desejada
      default:
        return cores.rosa1
    }
  }};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  display: inline-block;
  margin-right: 16px;
  text-decoration: none;
  cursor: pointer;
  border: none; // Remova a borda padrão do botão
`
