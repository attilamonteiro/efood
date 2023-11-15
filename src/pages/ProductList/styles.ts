// src/pages/ProductList/styles.ts

import styled from 'styled-components'

export const Container = styled.section`
  padding: 32px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 24px;
  max-width: 100%;
  list-style: none; /* Adicione esta linha para remover os pontos/bolhas da lista */
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

export const ListItem = styled.li`
  max-width: 100%;
  overflow-wrap: break-word;
`
