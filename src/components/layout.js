import React from 'react';
import { Header } from './header/header';

const Layout = ({ children }) => (
	<div>
		<Header />
		{children}
	</div>
);

export default Layout;
