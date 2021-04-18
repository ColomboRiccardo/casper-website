import React from 'react';
import { BlogGrid } from '../components/blogGrid/blogGrid';
import { Layout } from '../components/layoutFolder/Layout';

const Blog = () => (
	<div>
		<Layout>
			<h2 className=''>I nostri post</h2>
			<p className=''>
				Storie, articoli, quello che pensiamo e quello per cui lottiamo.
			</p>
			<BlogGrid />
		</Layout>
	</div>
);

export default Blog;
