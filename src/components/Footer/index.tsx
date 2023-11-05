import { Container, TextFooter, StyledUl, LogoImg } from './styles'
import instagramIcon from './../../assets/images/insta.svg'
import facebookIcon from './../../assets/images/face.svg'
import twitterIcon from './../../assets/images/tt.svg'
import logo from './../../assets/images/logo.svg'

const Footer = () => (
  <Container>
    <LogoImg src={logo} alt="efood" />
    <div>
      <StyledUl>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </StyledUl>
      <StyledUl>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebookIcon} alt="Facebook" />
        </a>
      </StyledUl>
      <StyledUl>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitterIcon} alt="Twitter" />
        </a>
      </StyledUl>
    </div>
    <TextFooter>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </TextFooter>
  </Container>
)

export default Footer
