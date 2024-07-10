import { FC } from 'react';

import Title from '@/components/shared/title/Title';

import img from '@/assets/images/2.jpg';

import styles from './Footer.module.scss';

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<Title>Будем Вас Ждать!</Title>
			<div>
				<img src={img} alt='' />
			</div>
		</footer>
	);
};

export default Footer;
