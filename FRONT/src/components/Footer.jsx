import { Link } from 'react-router-dom';
import logo from '../../public/images/logo.svg';
import Portfolio from './Portfolio';

function Footer() {
  return (
    <footer className='mt-300 flex flex-col justify-center items-center mt-10'>
			<Link to={'/'}><img src={logo} alt='Logo photopets' className='h-10'/></Link>
			<span className='text-[#D9D9D9] text-sm'>by</span>
			<Portfolio />
      <p>© 2023 Hack a Boss</p>
    </footer>
  );
}

export default Footer;
