import styled from 'styled-components'
import media from 'styled-media-query'

export const LogoWrapper = styled.img`
  width: 15.5rem;

  ${media.greaterThan('medium')`
    width: 18rem;
  `}
`
