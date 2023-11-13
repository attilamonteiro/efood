import Header from './components/Header'
import Footer from './components/Footer'
import { GlobalCss } from './styles'
import Rotas from './routes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Header />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
