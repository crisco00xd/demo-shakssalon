import Link from 'next/link';
import Image from 'next/image';

export default function ServiceCard({ service }) {
	const { title, slug, thumbnail, excerpt } = service.fields;

	return (
		<div className='service-card'>
			<Link href={'/services/' + slug} scroll={false}>
				<div className='service-card__image'>
					<Image
						src={'https:' + thumbnail.fields.file.url}
						alt={thumbnail.fields.title}
						// width={thumbnail.fields.file.details.image.width}
						// height={thumbnail.fields.file.details.image.height}
						// layout='fill'
						fill
						loading='lazy'
					/>
				</div>
				<h3 className='service-card__title--not-overlay'>{title}</h3>
				<div className='service-card__overlay'>
					<h3 className='service-card__title'>{title}</h3>
					<p className='service-card__description'>{excerpt}</p>
				</div>
			</Link>
		</div>
	);
}
