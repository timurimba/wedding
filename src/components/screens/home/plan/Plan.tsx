import { FC } from 'react';

import Motion from '@/components/shared/motion/Motion';
import Title from '@/components/shared/title/Title';

import styles from './Plan.module.scss';

const Plan: FC = () => {
	return (
		<div className={styles.plan}>
			<Title>План дня</Title>
			<div>
				<Motion animate='left' className={styles.item}>
					<time dateTime='14:15'>14:15</time>
					<span>
						Сбор гостей возле <br />
						ЗАГСа
					</span>
				</Motion>
				<div></div>
				<div></div>
				<Motion animate='right' className={styles.item}>
					<time dateTime='14:45'>14:45</time>
					<span>Церемония бракосочетания</span>
				</Motion>
				<Motion animate='left' className={styles.item}>
					<time dateTime='17:00'>17:00</time>
					<span>Сбор гостей возле банкетного зала</span>
				</Motion>
				<div></div>
				<div></div>
				<Motion animate='right' className={styles.item}>
					<time dateTime='17:30'>17:30</time>
					<span>Банкет</span>
				</Motion>
				<Motion animate='left' className={styles.item}>
					<time dateTime='00:00'>00:00</time>
					<span>Завершение вечера</span>
				</Motion>
				<div></div>
			</div>
		</div>
	);
};

export default Plan;
