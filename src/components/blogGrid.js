import React from 'react';
import { BlogCard } from './blogCard';

export const BlogGrid = () => (
	<div className='flex flex-col sm:flex-row sm:flex-wrap justify-center items-center'>
		<BlogCard />
		<BlogCard />
		<BlogCard />
		<BlogCard />
	</div>
);
