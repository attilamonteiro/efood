import Header from './components/Header'
import { GlobalCss } from './styles'
import Restaurant from './components/Restaurant'
import RestaurantList from './components/RestaurantList'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <RestaurantList title="Restaurantes" background="rosa1" />
      </>
    )
  }
])
function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
