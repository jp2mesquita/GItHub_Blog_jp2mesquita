import logo from '../../assets/logo.svg'
import leftEffect from '../../assets/left-effect.svg'
import rightEffect from '../../assets/right-effect.svg'
import { HeaderContainer, HeaderContent } from './styles'

export function Header(){
  return (
    <HeaderContainer>

      <img src={leftEffect} alt="" />
      <HeaderContent >

          <img src={logo} alt="" />
      </HeaderContent>
      <img src={rightEffect} alt="" />

    </HeaderContainer>
  )
}