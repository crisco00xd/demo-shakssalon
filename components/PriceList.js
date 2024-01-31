import React, { useState, useRef } from 'react';
import { CaretUp } from 'phosphor-react';

export default function PriceList({ priceList }) {
	const { title, sectionTitle, priceData, description } = priceList.fields;
	const tableData = priceData.tableData;
	const [setActive, setActiveState] = useState('');
	const [setHeight, setHeightState] = useState('0px');
	const [setRotate, setRotateState] = useState('');

	const content = useRef(null);

	function toggleAccordion() {
		setActiveState(setActive === '' ? 'accordion--active' : '');
		setRotateState(setRotate === '' ? 'accordion__icon--close' : '');
		setHeightState(
			setActive === 'accordion--active'
				? '0px'
				: `${content.current.scrollHeight}px`
		);
	}

	return (
		<div className='accordion__section'>
			<h3 className={`accordion ${setActive}`} onClick={toggleAccordion}>
				{sectionTitle}
				<CaretUp
					className={`accordion__icon ${setRotate}`}
					size={21}
					weight='light'
				/>
			</h3>
			<div
				ref={content}
				style={{ maxHeight: `${setHeight}` }}
				className='accordion__content'>
				<h3 className='accordion__subtitle '>{title}</h3>
				<p className='accordion__description'>{description}</p>
				<table className='accordion__table'>
					{tableData[0][1].length > 0 && (
						<thead>
							<tr>
								{tableData[0].map((item, index) => (
									<th key={index}>{item}</th>
								))}
							</tr>
						</thead>
					)}

					<tbody>
						{tableData.slice(1).map((tableData, index) => (
							<tr key={index}>
								{tableData.map((item, index) => (
									<td key={index}>{item}</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
