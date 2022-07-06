import styled, { css } from 'styled-components'

import * as HeaderStyles from 'components/organisms/Header/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${HeaderStyles.Wrapper} {
      padding: ${theme.spacing.xxsmall} 0;
    }
  `}
`
