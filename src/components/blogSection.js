import React from 'react';
import { BlogCard } from './blogCard';
import { BlogGrid } from './blogGrid';

export const BlogSection = () => (
	<section className='my-6 px-2'>
		<h2 className=' text-center text-4xl sm:text-5xl font-semibold my-4'>
			I nostri articoli
		</h2>
		<p className='text-center'>
			Qui puoi trovare alcuni dei nostri articoli più recenti. Per leggere tutti
			i nostri articoli, vai al blog
		</p>
		<BlogGrid />
	</section>
);
