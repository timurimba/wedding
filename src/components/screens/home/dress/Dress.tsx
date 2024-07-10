import { FC } from 'react';

import Motion from '@/components/shared/motion/Motion';
import Title from '@/components/shared/title/Title';

import styles from './Dress.module.scss';

const Dress: FC = () => {
	return (
		<Motion animate='left' className={styles.dress}>
			<Title>Дресс-код</Title>
			<p>
				Мы очень старались сделать торжество красивым и гармоничным. Будем
				благодарны, если Вы поддержите цветовую гамму нашей свадьбы!
			</p>
			<div>
				<div className='bg-[#B9CAE2]'></div>
				<div className='bg-[#4F7BC5]'></div>
				<div className='bg-[#fff]'></div>
				<div className='bg-[#EDDAC7]'></div>
				<div className='bg-[#9B9CA1]'></div>
				<div className='bg-[#000]'></div>
			</div>
		</Motion>
	);
};

export default Dress;
