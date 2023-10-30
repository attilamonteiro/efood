import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa1: '#E66767',
  rosa2: '#FFEBD9',
  rosa3: '#FFF8F2',
  branco: '#FFFFFF',
  amarelo: '#FFB930',
  preto: '#000000',
  preto2: '#4B4B4B'
}

export const GlobalCss = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
        front-family: Roboto, sans-serif;
    }

    body {
        background-color: ${cores.rosa3};
        color: ${cores.rosa1};
    }


    `
