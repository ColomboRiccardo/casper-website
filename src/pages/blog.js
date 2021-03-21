import React from 'react';
import { BlogGrid } from '../components/blogGrid';
import Layout from '../components/layout';

const Blog = () => (
	<div>
		<Layout>
			<h2 className=' text-center text-4xl sm:text-5xl font-semibold my-4'>
				I nostri post
			</h2>
			<p className='text-center'>
				Storie, articoli, quello che pensiamo e quello per cui lottiamo.
			</p>
			<BlogGrid />
		</Layout>
	</div>
);

export default Blog;
