// index.tsx

import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  size?: 'small' | 'big'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, title, size, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        size={size}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} title={title} size={size} type="link">
      {children}
    </ButtonLink>
  )
}

export default Button
