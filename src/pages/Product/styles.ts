// src/pages/Product/styles.ts

import styled from 'styled-components'
import { cores } from '../../styles'

export const CardContainer = styled.div`
  padding: 32px 0;
`

export const Card = styled.div`
  background-color: ${cores.rosa1};
  border: 1px solid ${cores.branco};
  margin-bottom: 48px;
  width: 320px;
  display: flex;
  flex-direction: column;
  ${/* Adicionei um espaçamento interno */ ''}
  padding: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  color: ${cores.branco};
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
  color: ${cores.branco};
`

export const Imagem = styled.img`
  max-width: 100%;
  height: auto;
`
