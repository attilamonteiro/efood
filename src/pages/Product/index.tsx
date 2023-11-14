import React from 'react'
import { useParams } from 'react-router-dom'
import { CardContainer, Card, Titulo, Descricao, Imagem } from './styles'

interface ProductProps {
  id: number
  foto: string
  nome: string
  descricao: string
  preco: number
  porcao: string
}

const Product: React.FC<ProductProps> = ({
  foto,
  nome,
  descricao,
  preco,
  porcao
}) => (
  <CardContainer>
    <Card>
      <Imagem src={foto} alt={nome} />
      <Titulo>
        {nome} <span>R$ {preco.toFixed(2)}</span>
      </Titulo>
      <Descricao>{descricao}</Descricao>
      <p>Porção: {porcao}</p>
    </Card>
  </CardContainer>
)

export default Product
