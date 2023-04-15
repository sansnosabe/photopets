import { Link } from 'react-router-dom';
import logo from '../../public/images/logo.svg';

function Header() {
  return (
    <header className='mt-14'>
      <Link to={'/'}>
        <img src={logo} alt='Logo photopets' />
      </Link>
    </header>
  );
}

export default Header;
