import { HeaderContainer } from './styles'
import logoBlog from '../../assets/header/logo.svg'
import rectangle1Blog from '../../assets/header/rectangle1.svg'
import rectangle2Blog from '../../assets/header/rectangle2.svg'

export function Header() {
  return (
    <HeaderContainer backgroundImage={[rectangle1Blog, rectangle2Blog]}>
      <div />
      <img src={logoBlog} alt="Logo do Github blog" />
      <div />
    </HeaderContainer>
  )
}
