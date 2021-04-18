import * as React from 'react';
import { graphql } from 'gatsby';
import { BlogSection } from '../components/blogSection/blogSection';
import { Contacts } from '../components/contacts/contacts';
import { MainHero } from '../components/mainHero/mainHero';
import WhoAreWe from '../components/whoAreWe/whoAreWe';
import { Layout } from '../components/layout/Layout';

const IndexPage = ({ data }) => {
	return (
		<main>
			<Layout>
				<title>Home Page</title>
				<MainHero />
				<WhoAreWe />
				<Contacts />
			</Layout>
		</main>
	);
};

export const query = graphql`
	query SiteInfo {
		site {
			siteMetadata {
				description
				title
			}
		}
	}
`;

export default IndexPage;
