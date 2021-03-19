import React from 'react';
import postPicture from '../images/post2.jpg';

export const BlogCard = () => (
	<div className='w-72 m-4 pb-4 border rounded-xl'>
		<h3 className='m-2 text-center text-2xl font-semibold'>This is a title</h3>
		<img src={postPicture} />
		<h4 className='m-2'>This is a subtitle, more articulated</h4>
		<p className='m-2'>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
			molestiae quas vel sint commodi repudiandae consequuntur voluptatum
			laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
			praesentium optio, eaque rerum!
		</p>
		<span className='m-2'>Read more...</span>
	</div>
);
