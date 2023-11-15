// components/Button/index.tsx

import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type?: 'button' | 'link' // Adicionando type como uma propriedade opcional
  size?: 'small' | 'big'
  title: string
  to?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'link' | 'secondary' // Adicione 'secondary' como opção para variant
}

const Button = ({
  type,
  title,
  size,
  to,
  onClick,
  children,
  variant
}: Props) => {
  if (type === 'link') {
    return (
      <ButtonLink
        to={to}
        title={title}
        size={size}
        onClick={onClick}
        variant={variant}
      >
        {children}
      </ButtonLink>
    )
  }

  return (
    <ButtonContainer
      type="button"
      title={title}
      onClick={onClick}
      size={size}
      variant={variant} // Adicione variant como propriedade para ButtonContainer
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
