import React from 'react';
import { Link } from 'gatsby';

export const MobileMenu = () => (
	<div className='sm:hidden p-2 bg-pink-200'>
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
