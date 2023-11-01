import Restaurant from '../Restaurant'

import { Container, List } from './styles'

type Props = {
  title: string
  background: 'rosa3' | 'rosa1'
}

const RestaurantList = ({ background, title }: Props) => (
  <Container>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
      </List>
    </div>
  </Container>
)

export default RestaurantList
