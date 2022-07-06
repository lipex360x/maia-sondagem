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

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    position: absolute;
    z-index: ${theme.layers.menu};
    background: ${theme.colors.white};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    pointer-events: ${isOpen ? 'all' : 'none'};
    opacity: ${isOpen ? 1 : 0};
    transition: opacity ${theme.transition.default};
  `}
`
