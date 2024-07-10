import { FC } from 'react';

import Motion from '@/components/shared/motion/Motion';

import img from '@/assets/images/1.jpg';

import styles from './Banner.module.scss';

const Banner: FC = () => {
	return (
		<div className='container'>
			<Motion className={styles.banner} animate='right'>
				<header>
					<div></div>
					<span>Приглашение на свадьбу</span>
					<div></div>
				</header>
				<h1>Назар и Сабина</h1>
				<img src={img} alt='Фотография' />
			</Motion>
		</div>
	);
};

export default Banner;
