import Button from 'components/atoms/Button'
import Heading from 'components/atoms/Heading'
import { Container } from 'components/bosons/Container'
import * as S from './styles'

const Hero = () => (
  <S.Wrapper>
    <Container>
      <Heading size="huge">Maia Sondagem</Heading>

      <Heading size="medium">
        Somos especialistas em sondagem e análise do solo
      </Heading>
    </Container>

    <Button as="a" href="#">
      Saiba Mais
    </Button>
  </S.Wrapper>
)

export default Hero
