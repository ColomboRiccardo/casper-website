import * as React from 'react';
import { BlogGrid } from '../components/blogGrid';
import { Contacts } from '../components/contacts';
import { Header } from '../components/header';
import { MainHero } from '../components/mainHero';

const IndexPage = () => {
	return (
		<main>
			<title>Home Page</title>
			<Header />
			<MainHero />
			<BlogGrid />
			<Contacts />
		</main>
	);
};

export default IndexPage;
