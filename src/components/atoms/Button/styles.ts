// import media from 'styled-media-query'
import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'
import { ButtonProps } from '.'

export type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.size.xsmall};
  `,

  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.size.medium};
    padding: ${theme.spacing.xxsmall} ${theme.spacing.large};
  `,

  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.size.medium};
    padding: ${theme.spacing.xxsmall} ${theme.spacing.xlarge};
  `,

  fullWidth: () => css`
    width: 100%;
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth }) => css`
    background: none;
    padding: ${theme.spacing.xxsmall};
    color: ${theme.colors.lightGray};
    cursor: pointer;
    border-radius: ${theme.border.radius};
    border: 1px solid ${theme.colors.lightGray};
    text-decoration: none;

    transition: color ${theme.transition.fast},
      border-color ${theme.transition.fast};

    &:hover {
      color: ${darken(0.1, theme.colors.lightGray)};
      border-color: ${darken(0.1, theme.colors.lightGray)};
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth}
  `}
`
