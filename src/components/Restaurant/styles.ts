// styles.ts

import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonLink } from '../Button/styles'

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
  ${ButtonLink} {
    margin-left: 8px;
    margin-bottom: 8px;
  }
`

export const Titulo = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: Roboto;
  font-size: 18px;
  margin: 16px 8px 16px;

  span {
    font-size: 14px;
    display: flex; /* Adiciona um display flex para alinhar a img ao span */
    align-items: center; /* Alinha a img ao centro verticalmente */
  }

  span img {
    width: 16px;
    height: 16px;
    margin-left: 8px; /* Adicionei uma margem à esquerda da imagem */
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  padding: 8px;
`

export const Tipo = styled.div`
  position: absolute;
  top: 16px;
  right: -6px;
`

export const Imagem = styled.img`
  max-width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
`
