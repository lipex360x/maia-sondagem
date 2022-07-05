import Logo from 'components/atoms/Logo'
import { Container } from 'components/bosons/Container'
import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <Container>
      <Logo />
    </Container>
  </S.Wrapper>
)

export default Header
