import React from 'react';

export const Header = () => (
	<header>
		<div className='h-8  py-5 px-6 flex flex-row items-center justify-between'>
			<p className='mx-4'>E-mail: casper.liguria@gmail.com</p>
			<p className='mx-4'>Tel: +39 338 229 5037</p>
		</div>
		<div className='h-16  py-6 px-6 flex flex-row items-center justify-between bg-pink-300'>
			<p className='mx-4 text-lg'>CAsPER</p>
			<div className='flex flex-row float-left'>
				<p className='mx-4 text-lg'>Home</p>
				<p className='mx-4 text-lg'>Blog</p>
				<p className='mx-4 text-lg'>Contatti</p>
			</div>
		</div>
	</header>
);
