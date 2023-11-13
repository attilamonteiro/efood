import { Routes, Route } from 'react-router-dom'
import RestaurantList from './components/RestaurantList'
import Product from './pages/Product'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<RestaurantList title="" background="rosa1" />} />
    {/* <Route path="/categories" element = {<Categories/>} /> */}
    <Route path="/product/:id" element={<Product />} />
  </Routes>
)

export default Rotas
