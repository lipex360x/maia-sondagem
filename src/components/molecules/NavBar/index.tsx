import MediaMatch from 'components/bosons/MediaMatch'
import { FiMenu } from 'react-icons/fi'

import * as S from './styles'

const NavBar = () => (
  <>
    <MediaMatch greaterThan="medium">
      <S.List>
        <S.Item>
          <S.Link href="#">Home</S.Link>
        </S.Item>
        <S.Item>
          <S.Link href="#">Sobre nós</S.Link>
        </S.Item>
        <S.Item>
          <S.Link href="#">Serviços</S.Link>
        </S.Item>
        <S.Item>
          <S.Link href="#">Parceiros</S.Link>
        </S.Item>
        <S.Item>
          <S.Link href="#">Contato</S.Link>
        </S.Item>
      </S.List>
    </MediaMatch>

    <MediaMatch lessThan="medium">
      <S.MenuMobile>
        <FiMenu />
      </S.MenuMobile>
    </MediaMatch>
  </>
)

export default NavBar
