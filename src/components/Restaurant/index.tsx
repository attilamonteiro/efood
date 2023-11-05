import React from 'react'
import Tag from '../Tag'
import { Card, Descricao, Titulo, Tipo, AvaliacaoContainer } from './styles'
import estrela from './../../assets/images/estrela.svg'

export type RestaurantType = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Array<{
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }>
}

const Restaurant: React.FC<RestaurantType> = ({
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa
}) => (
  <Card>
    <img
      src={capa}
      alt={titulo}
      style={{ maxWidth: '100%', maxHeight: '271px' }}
    />
    <Tipo>
      {[tipo].map((tipo) => (
        <Tag key={tipo}>{tipo}</Tag>
      ))}
    </Tipo>
    <Titulo>
      {titulo}{' '}
      <AvaliacaoContainer>
        <span>{avaliacao}</span>
        <img src={estrela} alt="Estrela" />
      </AvaliacaoContainer>
    </Titulo>
    <Descricao>{descricao}</Descricao>
    <div>
      <Tag>Saiba mais...</Tag>
    </div>
  </Card>
)

export default Restaurant
