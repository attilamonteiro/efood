// Footer/index.tsx
import logo from './../../assets/images/logo.svg'
import { Container, TextFooter } from './styles'

const Footer = () => (
  <Container>
    <img src={logo} alt="efood" />
    <div>
      <ul>a</ul>
      <ul>a</ul>
      <ul>a</ul>
    </div>
    <TextFooter>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </TextFooter>
  </Container>
)

export default Footer
