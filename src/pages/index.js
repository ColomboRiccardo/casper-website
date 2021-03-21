import * as React from 'react';
import { BlogSection } from '../components/blogSection';
import { Contacts } from '../components/contacts';
import { Header } from '../components/header';
import { MainHero } from '../components/mainHero';

const IndexPage = () => {
	return (
		<main>
			<title>Home Page</title>
			<Header />
			<MainHero />
			<BlogSection />
			<Contacts />
		</main>
	);
};

export default IndexPage;
