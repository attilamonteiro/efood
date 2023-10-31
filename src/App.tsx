import Header from './components/Header'
import { GlobalCss } from './styles'
import Restaurant from './components/Restaurant'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Restaurant />
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
