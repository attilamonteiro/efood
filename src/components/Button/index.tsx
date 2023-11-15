// components/Button/index.tsx

import { ButtonContainer, ButtonLink } from './styles';

export type Props = {
  type?: 'button' | 'link';
  size?: 'small' | 'big';
  title: string;
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary'; // Adicione a propriedade variant para escolher a cor do botão
};

const Button = ({ type, title, size, to, onClick, children, variant = 'primary' }: Props) => {
  if (type === 'link') {
    return (
      <ButtonLink to={to} title={title} size={size} onClick={onClick} variant={variant}>
        {children}
      </ButtonLink>
    );
  }

  return (
    <ButtonContainer type="button" title={title} onClick={onClick} size={size} variant={variant}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
