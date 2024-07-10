import { FC } from 'react';

import Motion from '@/components/shared/motion/Motion';

import Title from '../title/Title';

import styles from './Place.module.scss';
import { IPlace } from './place.interface';

const Place: FC<IPlace> = ({ address, title, description, img, animate }) => {
	return (
		<Motion className={styles.place} animate={animate}>
			<Title>{title}</Title>
			<img src={img} />
			<p>{description}</p>
			<address>{address}</address>
			<a
				target='_blank'
				href={`https://yandex.ru/maps/?text=${encodeURIComponent(address)}`}
			>
				показать на карте
			</a>
		</Motion>
	);
};

export default Place;
