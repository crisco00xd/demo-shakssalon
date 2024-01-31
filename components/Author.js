import React from 'react';

export default function Author({ author }) {
	const { title, name, email, shortBio } = author.fields;
	return (
		<div className='author'>
			<h3 className='author__name'>{name}</h3>
			<h4 className='author__title'>{title}</h4>
			<h4 className='author__email'>{email}</h4>
			<p className='author__bio'>{shortBio}</p>
		</div>
	);
}
