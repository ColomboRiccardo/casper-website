module.exports = {
	siteMetadata: {
		title: 'gatsby-docs',
		siteUrl: 'https://casper-website.netlify.app/',
	},
	plugins: [
		'gatsby-plugin-netlify-cms',
		'gatsby-plugin-postcss',
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
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
