import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps } from '.'

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.medium};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.large};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.size.large};
    `}
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.xxlarge};
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: calc(${theme.font.size.xxlarge} + 1.2rem);

    ${media.greaterThan('medium')`
      font-size: ${theme.font.size.huge};
    `}
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  font-weight: 200;
  text-align: center;
  ${({ theme, size }) => css`
    ${!!size && wrapperModifiers[size](theme)}
  `}
`
