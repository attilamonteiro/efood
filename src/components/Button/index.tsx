// index.tsx

import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type?: 'button' | 'link' // Adicionando type como uma propriedade opcional
  size?: 'small' | 'big'
  title: string
  to?: string
  onClick?: () => void
  children: React.ReactNode
}

const Button = ({ type, title, size, to, onClick, children }: Props) => {
  if (type === 'link') {
    return (
      <ButtonLink to={to} title={title} size={size} onClick={onClick}>
        {children}
      </ButtonLink>
    )
  }

  return (
    <ButtonContainer type="button" title={title} onClick={onClick} size={size}>
      {children}
    </ButtonContainer>
  )
}

export default Button
