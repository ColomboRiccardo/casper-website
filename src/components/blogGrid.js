import React from 'react';
import { BlogCard } from './blogCard';

export const BlogGrid = () => (
	<section>
		<h2 className=' text-center text-5xl my-4'>I nostri articoli</h2>
		<p className='text-center'>
			Qui puoi trovare alcuni dei nostri articoli più recenti. Per leggere tutti
			i nostri articoli, vai al blog
		</p>
		<div className='flex flex-row justify-center items-center'>
			<BlogCard />
			<BlogCard />
			<BlogCard />
			<BlogCard />
		</div>
	</section>
);
