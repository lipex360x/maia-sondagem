import MediaMatch from 'components/bosons/MediaMatch'
import { useState } from 'react'

import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

import * as S from './styles'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
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
          <FiMenu aria-label="Open Menu" onClick={() => setIsOpen(true)} />
        </S.MenuMobile>
      </MediaMatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <AiOutlineClose
          aria-label="Close Menu"
          onClick={() => setIsOpen(false)}
        />
      </S.MenuFull>
    </>
  )
}

export default NavBar
