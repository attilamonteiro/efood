// Footer/index.tsx
import logo from './../../assets/images/logo.svg'
import { Container, TextFooter } from './styles'

const Footer = () => (
  <Container>
    <div className="container">
      <img src={logo} alt="efood" />
      <div>cat2</div>
      <TextFooter>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </TextFooter>
    </div>
  </Container>
)

export default Footer
