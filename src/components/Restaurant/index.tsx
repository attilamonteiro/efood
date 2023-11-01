import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Restaurant = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do restaurante</Titulo>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quos neque
      minus? Odio ipsam vero corporis impedit, adipisci architecto numquam
      autem, voluptates, distinctio recusandae cupiditate. Qui officiis mollitia
      repudiandae corrupti!
    </Descricao>
  </Card>
)
export default Restaurant
