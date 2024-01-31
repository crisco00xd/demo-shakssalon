import React from 'react';
import Image from 'next/image';
const GalleryImage = ({ galleryItem, handleModalOpen }) => {
	const images = galleryItem[0].fields.images;
	if (!galleryItem || !handleModalOpen) return null;
	return (
		<>
			{images.map((image) => (
				<div className='gallery__image' key={image.sys.id}>
					<Image
						src={'https:' + image.fields.file.url}
						alt={image.fields.file.fileName}
						fill
						onClick={() => handleModalOpen(image)}
					/>
				</div>
			))}
		</>
	);
};

export default GalleryImage;
