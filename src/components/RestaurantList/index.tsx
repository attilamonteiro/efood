import React, { useState, useEffect } from 'react'
import Restaurant from '../Restaurant'
import { Container, List } from './styles'

type RestaurantType = {
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

type Props = {
  title: string
  background: 'rosa3' | 'rosa1'
}

const RestaurantList = ({ background, title }: Props) => {
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://fake-api-tau.vercel.app/api/efood/restaurantes'
        )
        const data = await response.json()
        setRestaurants(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <Container>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {restaurants.map((restaurant) => (
            <Restaurant key={restaurant.id} {...restaurant} />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantList
