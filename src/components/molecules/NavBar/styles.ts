import styled, { css } from 'styled-components'

export const List = styled.ul`
  ${() => css`
    display: flex;
    list-style: none;
    justify-content: space-between;
  `}
`

export const Item = styled.li``

export const Link = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.size.large};
    color: ${theme.colors.gray};
    text-decoration: none;

    transition: color ${theme.transition.default};

    &:hover {
      color: ${theme.colors.darkGray};
    }
  `}
`

export const MenuMobile = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.size.xlarge};
  `}
`
