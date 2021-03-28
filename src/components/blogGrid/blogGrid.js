import React from 'react';
import './blogGrid.style.scss';
import { BlogCard } from '../blogCard/blogCard';

export const BlogGrid = () => (
	<div className='blog-grid'>
		<BlogCard />
		<BlogCard />
		<BlogCard />
		<BlogCard />
	</div>
);
