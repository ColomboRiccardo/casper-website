import React from 'react';
import './mobileMenu.style.scss';
import { Link } from 'gatsby';

export const MobileMenu = () => (
	<div className='mobile-menu'>
		<Link to='/' className='block font-semibold text-right my-2'>
			Home
		</Link>
		<Link to='/blog/' className='block font-semibold text-right my-2'>
			Blog
		</Link>
		<Link to='/#contatti' className='block font-semibold text-right my-2'>
			Contatti
		</Link>
	</div>
);
