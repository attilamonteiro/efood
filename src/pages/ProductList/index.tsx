// src/pages/ProductList/index.tsx

import React, { useEffect, useState } from 'react'
import Product from '../Product'
import { Container, List, Title } from './styles'

interface ProductType {
  id: number
  foto: string
  nome: string
  descricao: string
  preco: number
  porcao: string
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://fake-api-tau.vercel.app/api/efood/restaurantes'
        )
        const data = await response.json()

        if (Array.isArray(data) && data[0]?.cardapio) {
          setProducts(data[0].cardapio)
        } else {
          console.error('Data format is not as expected:', data)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <Container>
      <div className="container">
        <Title>Products</Title>
        <List>
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList
