import * as React from 'react';
import { BlogSection } from '../components/blogSection';
import { Contacts } from '../components/contacts';
import { Header } from '../components/header';
import { MainHero } from '../components/mainHero';
import { WhoAreWe } from '../components/whoAreWe';

const IndexPage = () => {
	return (
		<main>
			<title>Home Page</title>
			<Header />
			<MainHero />
			<WhoAreWe />
			<BlogSection />
			<Contacts />
		</main>
	);
};

export default IndexPage;
