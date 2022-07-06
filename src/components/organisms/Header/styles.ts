import styled, { css } from 'styled-components'

import * as NavBarStyles from 'components/molecules/NavBar/styles'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${NavBarStyles.Item} {
      margin-left: ${theme.spacing.small};
    }
  `}
`
