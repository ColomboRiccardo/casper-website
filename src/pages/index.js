import * as React from 'react';
import { BlogSection } from '../components/blogSection/blogSection';
import { Contacts } from '../components/contacts/contacts';
import { Header } from '../components/header/header';
import { MainHero } from '../components/mainHero/mainHero';
import { WhoAreWe } from '../components/whoAreWe/whoAreWe';
import { Footer } from '../components/footer/footer';
import { Layout } from '../components/layout/layout';

const IndexPage = () => {
	return (
		<main>
			<Layout>
				<title>Home Page</title>
				<MainHero />
				<WhoAreWe />
				<BlogSection />
				<Contacts />
			</Layout>
		</main>
	);
};

export default IndexPage;
