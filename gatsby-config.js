module.exports = {
	siteMetadata: {
		title: 'casper-website',
	},
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-netlify-cms`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `notes`,
				path: `${__dirname}/src/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`,
			},
		},
	],
	siteMetadata: {
		title: 'CAsPer - Centro Antiviolenza sulla Persona',
		description:
			"Sito ufficiale dell' associazone CAsPer, Centro Antiviolenza sulla Persona,",
		copyright: 'Copyright 2021 - CAsPer',
	},
};
