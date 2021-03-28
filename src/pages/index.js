import * as React from 'react';
import { BlogSection } from '../components/blogSection/blogSection';
import { Contacts } from '../components/contacts/contacts';
import { Header } from '../components/header/header';
import { MainHero } from '../components/mainHero/mainHero';
import { WhoAreWe } from '../components/whoAreWe/whoAreWe';

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
