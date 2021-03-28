import React from 'react';
import './blogCard.style.scss';
import postPicture from '../../images/post2.jpg';

export const BlogCard = () => (
	<div className='blog-card'>
		<h3>This is a title</h3>
		<img src={postPicture} />
		<h4>This is a subtitle, more articulated</h4>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
			molestiae quas vel sint commodi repudiandae consequuntur voluptatum
			laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
			praesentium optio, eaque rerum!
		</p>
		<span>Read more...</span>
	</div>
);
