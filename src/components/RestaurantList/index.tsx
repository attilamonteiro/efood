import Restaurant from '../Restaurant'

type Props = {
  title: string
  background: 'rosa3' | 'rosa1'
}

const RestaurantList = ({ background, title }: Props) => (
  <div>
    <h2>{title}</h2>
    <ul>
      <Restaurant />
      <Restaurant />
      <Restaurant />
      <Restaurant />
      <Restaurant />
      <Restaurant />
    </ul>
  </div>
)

export default RestaurantList
