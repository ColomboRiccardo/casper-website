import React from 'react';
import { Header } from '../headerFolder/Header';
import { Footer } from '../footer/footer';
import './layout.style.scss';

export const Layout = ({ children }) => (
	<div>
		<Header />
		{children}
		<Footer />
	</div>
);
