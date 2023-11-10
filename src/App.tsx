import Header from './components/Header'
import Footer from './components/Footer'
import { GlobalCss } from './styles'
import Restaurant from './components/Restaurant'
import RestaurantList from './components/RestaurantList'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <RestaurantList title="" background="rosa1" />
      </>
    )
  }
])
function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <div>
        <RouterProvider router={rotas} />
      </div>
      <Footer />
    </>
  )
}

export default App
