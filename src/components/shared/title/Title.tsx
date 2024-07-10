import { FC, PropsWithChildren } from 'react';

import styles from './Title.module.scss';

const Title: FC<PropsWithChildren> = ({ children }) => {
	return <h2 className={styles.title}>{children}</h2>;
};

export default Title;
