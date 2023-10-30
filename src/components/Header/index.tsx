import { HeaderBar } from './styles'
import { TextHeader } from './styles'

import logo from './../../assets/images/logo.svg'
const Header = () => (
  <HeaderBar>
    <img src={logo} alt="efood" />
    <TextHeader>
      Viva experiências gastronômicas no conforto da sua casa
    </TextHeader>
  </HeaderBar>
)
export default Header
