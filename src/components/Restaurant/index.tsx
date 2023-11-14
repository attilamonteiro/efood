import React from 'react'
import Tag from '../Tag'
import { Card, Descricao, Titulo, Tipo } from './styles'
import estrela from './../../assets/images/estrela.svg'
import Button from '../Button'
import { Link } from 'react-router-dom' // Importe o Link do react-router-dom

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
  id, // Adicione o id aqui
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
      <span>
        {avaliacao}
        <img src={estrela} alt="Estrela" />
      </span>
    </Titulo>
    <Descricao>{descricao}</Descricao>
    <div>
      {/* Utilize o componente Link para criar a navegação */}
      <Link to={`/product/${id}`}>
        <Button type="link" to={`/product/${id}`} title="Saiba mais...">
          {' '}
          Saiba mais...{' '}
        </Button>
      </Link>
    </div>
  </Card>
)

export default Restaurant
