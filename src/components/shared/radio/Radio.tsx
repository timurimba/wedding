import { PropsWithChildren, forwardRef } from 'react';

import styles from './Radio.module.scss';
import { IRadio } from './radio.interface';

const Radio = forwardRef<HTMLInputElement, PropsWithChildren<IRadio>>(
	({ children, className, ...rest }, ref) => {
		return (
			<label className={styles.radio + ' ' + className}>
				<input ref={ref} type='radio' {...rest} />
				<div></div>
				<span>{children}</span>
			</label>
		);
	},
);

export default Radio;
