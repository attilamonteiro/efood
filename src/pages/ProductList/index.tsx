import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../Product'
import { Container, List, Title, ListItem } from './styles'

interface ProductType {
  id: number
  foto: string
  nome: string
  descricao: string
  preco: number
  porcao: string
}

const ProductList: React.FC = () => {
  const { id: restaurantId } = useParams<{ id: string }>() // Obtém o ID do restaurante da rota
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://fake-api-tau.vercel.app/api/efood/restaurantes'
        )
        const data = await response.json()

        console.log('Raw Data:', data)

        if (Array.isArray(data)) {
          // Encontrar o restaurante correspondente ao ID na rota
          const selectedRestaurant = data.find(
            (restaurant) => String(restaurant.id) === restaurantId
          )

          // Se o restaurante for encontrado, configurar os produtos com base no cardápio desse restaurante
          if (selectedRestaurant) {
            setProducts(selectedRestaurant.cardapio || [])
          } else {
            console.error(
              'Restaurant not found for the given ID:',
              restaurantId
            )
          }
        } else {
          console.error('Data format is not as expected:', data)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [restaurantId])

  return (
    <Container>
      <div className="container">
        <Title>Products</Title>
        <List>
          {products.map((product) => (
            <ListItem key={product.id}>
              {/* Renderize o componente Product dentro do ListItem */}
              <Product {...product} />
            </ListItem>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList
