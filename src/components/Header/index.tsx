// Header.js

import { HeaderBar } from './styles'
import { TextHeader } from './styles'

import logo from './../../assets/images/logo.svg'
import fundo from './../../assets/images/fundo.svg'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${fundo})` }}>
    <img src={logo} alt="efood" />
    <TextHeader>
      Viva experiências gastronômicas no conforto da sua casa
    </TextHeader>
  </HeaderBar>
)

export default Header
