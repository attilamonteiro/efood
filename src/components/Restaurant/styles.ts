import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  border-right: 1px solid ${cores.rosa1};
  border-bottom: 1px solid ${cores.rosa1};
  border-left: 1px solid ${cores.rosa1};
  margin-bottom: 48px;
  width: 474px;
  position: relative;
  min-height: 217px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${TagContainer} {
    margin-left: 8px;
    margin-bottom: 8px;
  }
`

export const Titulo = styled.h3`
  font-weight: Roboto;
  font-size: 18px;
  display: block;
  margin-top: 16px;
  margin-left: 7px;
  margin-top: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  padding: 8px;
`

export const Tipo = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Imagem = styled.img`
  max-width: 100%
  height: auto
  position: absolute;
  top: 0;
  left: 0;
`
