import React from 'react';
import { Calendar } from '@carbon/icons-react';

export default function CallToAction({ cta }) {
	const { title, text, buttonText } = cta.fields;

	return (
		<div className='cta'>
			{title ? <div className='cta__title'>{title}</div> : null}
			{text ? <div className='cta__text'>{text}</div> : null}
			{buttonText ? (
				<a href='#' className='cta__btn btn'>
					{buttonText} <Calendar size={24} />
				</a>
			) : null}
		</div>
	);
}
