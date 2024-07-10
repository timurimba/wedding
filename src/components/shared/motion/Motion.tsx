import { motion, useAnimation } from 'framer-motion';
import { FC, PropsWithChildren, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { IMotion } from './motion.interface';

const Motion: FC<PropsWithChildren<IMotion>> = ({
	animate,
	className,
	children,
}) => {
	const controls = useAnimation();

	const [ref, inView] = useInView({
		triggerOnce: true,
		rootMargin: '-150px',
	});

	useEffect(() => {
		if (inView) {
			controls.start({ x: 0, opacity: 1 });
		}
	}, [controls, inView]);

	return (
		<div ref={ref}>
			<motion.div
				initial={{ opacity: 0, x: animate === 'left' ? '-100vw' : '100vw' }}
				animate={controls}
				className={className}
				transition={{ type: 'spring', stiffness: 90, damping: 30 }}
			>
				{children}
			</motion.div>
		</div>
	);
};

export default Motion;
