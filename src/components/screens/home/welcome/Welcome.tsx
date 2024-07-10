import { FC } from 'react';

import Motion from '@/components/shared/motion/Motion';

import styles from './Welcome.module.scss';

const Welcome: FC = () => {
	return (
		<Motion animate='left' className={styles.welcome}>
			<h3>Дорогие родные и близкие!</h3>
			<p>
				Приглашаем Вас разделить с нами счастливый день, в котором мы станем
				семьей!
			</p>
			<strong>20.09.2024</strong>
			<p>Мы будем очень рады видеть Вас в кругу наших гостей!</p>
		</Motion>
	);
};

export default Welcome;
