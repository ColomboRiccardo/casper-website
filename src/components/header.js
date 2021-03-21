import React, { useState } from 'react';
import { Link } from 'gatsby';
import CAsPerLogo from '../images/CAsPer-logo.svg';
import MenuIcon from '../images/menu-icon.svg';
import CloseIcon from '../images/close-icon.svg';
import { MobileMenu } from './mobileMenu';

export const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<header className=''>
			<div className='hidden sm:flex h-8 py-5 px-6 flex-row items-center justify-between'>
				<p className='mx-4'>E-mail: casper.liguria@gmail.com</p>
				<p className='mx-4'>Tel: +39 338 229 5037</p>
			</div>
			<div className='h-12 sm:h-16  sm:py-6 px-2 sm:px-6 flex flex-row items-center justify-between bg-pink-300'>
				<div className='flex flex-row items-center'>
					<Link to='/'>
						<img src={CAsPerLogo} alt='CAsPer logo' className='h-6 sm:h-10' />
					</Link>
					<Link to='/'>
						<p className=' mx-2 sm:mx-4 text-2xl sm:text-4xl font-semibold'>
							C.A.s.Per.
						</p>
					</Link>
				</div>
				<div className='flex-row hidden sm:flex'>
					<Link to='/'>
						<p className='mx-4 text-lg'>Home</p>
					</Link>
					<Link to='/blog/'>
						<p className='mx-4 text-lg'>Blog</p>
					</Link>
					<Link to='/#contatti'>
						<p className='mx-4 text-lg'>Contatti</p>
					</Link>
				</div>
				<div className='sm:hidden'>
					<button onClick={() => setOpenMenu(!openMenu)}>
						{openMenu ? (
							<img src={CloseIcon} alt='close menu icon' className=' h-5' />
						) : (
							<img src={MenuIcon} alt='menu icon' className=' h-5' />
						)}
					</button>
				</div>
			</div>
			{openMenu ? <MobileMenu /> : null}
		</header>
	);
};
