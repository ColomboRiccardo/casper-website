module.exports = {
	siteMetadata: {
		title: 'gatsby-docs',
		siteUrl: 'https://casper-website.netlify.app/',
	},
	plugins: [
		'gatsby-plugin-netlify-cms',
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		`gatsby-plugin-sass`,
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
	],
};
