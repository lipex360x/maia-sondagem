import styled, { css } from 'styled-components'
// import media from 'styled-media-query'

import * as HeadingStyles from 'components/atoms/Heading/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: calc(100vh - 7rem);
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.lightGray};

    background: url('imgs/hero.png'), rgba(0, 0, 0, 0.4);
    background-blend-mode: overlay;
    background-position: center;
    background-size: cover;

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacing.small};
    }
  `}
`
