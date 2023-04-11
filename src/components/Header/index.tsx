import { HeaderContainer } from './style'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HeaderContainer>
      <Link to='/' className='title'>
        Gevolg
        <span>consultas</span>
      </Link>
    </HeaderContainer>
  )
}

export default Header