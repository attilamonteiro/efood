// components/Button/styles.ts

import styled from 'styled-components';
import { cores } from '../../styles';
import { Props } from '.';

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) => (props.variant === 'primary' ? cores.rosa1 : cores.suaNovaCor)};
  color: ${(props) => (props.variant === 'primary' ? cores.rosa3 : cores.suaNovaCorTexto)};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  display: inline-block;
  margin-right: 16px;
`;

export const ButtonLink = styled.a<Props>`
  background-color: ${(props) => (props.variant === 'primary' ? cores.rosa1 : cores.suaNovaCor)};
  color: ${(props) => (props.variant === 'primary' ? cores.rosa3 : cores.suaNovaCorTexto)};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  display: inline-block;
  margin-right: 16px;
  text-decoration: none;
  cursor: pointer;
`;
