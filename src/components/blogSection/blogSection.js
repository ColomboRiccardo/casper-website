import React from 'react';
import { BlogGrid } from '../blogGrid/blogGrid';
import './blogSection.style.scss';

export const BlogSection = () => (
	<section className='blog-section'>
		<h2>I nostri articoli</h2>
		<p>
			Qui puoi trovare alcuni dei nostri articoli più recenti. Per leggere tutti
			i nostri articoli, vai al blog
		</p>
		<BlogGrid />
	</section>
);
