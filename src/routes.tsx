import { Routes, Route } from 'react-router-dom'
import RestaurantList from './components/RestaurantList'
import ProductList from './pages/ProductList'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<RestaurantList title="" background="rosa1" />} />
    {/* <Route path="/categories" element = {<Categories/>} /> */}
    <Route path="/product/:id" element={<ProductList />} />
  </Routes>
)

export default Rotas
