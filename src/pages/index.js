import * as React from 'react';
import { graphql } from 'gatsby';
import { BlogSection } from '../components/blogSection/blogSection';
import { Contacts } from '../components/contacts/contacts';
import { MainHero } from '../components/mainHeroFolder/mainHero';
import WhoAreWe from '../components/whoAreWeFolder/whoAreWe';
import { Layout } from '../components/layoutFolder/Layout';

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
