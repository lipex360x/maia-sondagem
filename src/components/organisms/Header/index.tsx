import Logo from 'components/atoms/Logo'
import NavBar from 'components/molecules/NavBar'

import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <Logo />
    <NavBar />
  </S.Wrapper>
)

export default Header
