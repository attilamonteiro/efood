import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.rosa3};
  border-radius: 8px;
  padding: 8px;
  ${TagContainer} {
    margin-rigth: 8px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16;
`
