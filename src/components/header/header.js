import React, { useState } from 'react';
import './header.style.scss';
import { Link, graphql, useStaticQuery } from 'gatsby';
import CAsPerLogo from '../../images/CAsPer-logo.svg';
import MenuIcon from '../../images/menu-icon.svg';
import CloseIcon from '../../images/close-icon.svg';
import { MobileMenu } from '../mobileMenu/mobileMenu';

export const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);

	const data = useStaticQuery(graphql`
		query SiteInfo2 {
			site {
				siteMetadata {
					copyright
					description
					title
				}
			}
		}
	`);

	const { title } = data.site.siteMetadata;

	return (
		<header className='header'>
			<div className='top-header'>
				<p className='mx-4'>E-mail: casper.liguria@gmail.com</p>
				<p className='mx-4'>Tel: +39 338 229 5037</p>
			</div>
			<div className='bottom-header'>
				<div className='bottom-header-left'>
					<Link to='/'>
						<img src={CAsPerLogo} alt='CAsPer logo' className='casper-logo' />
					</Link>
					<Link to='/'>
						<span className='casper-logo-title'>C.A.s.Per.</span>
					</Link>
				</div>
				<div className='bottom-header-right'>
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
				<div className='bottom-header-right-mobile'>
					<button onClick={() => setOpenMenu(!openMenu)}>
						{openMenu ? (
							<img src={CloseIcon} alt='close menu icon' className='' />
						) : (
							<img src={MenuIcon} alt='menu icon' className='' />
						)}
					</button>
				</div>
			</div>
			{openMenu ? <MobileMenu /> : null}
		</header>
	);
};
