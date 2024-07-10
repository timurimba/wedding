import { AnimatePresence, motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';

import styles from './Timer.module.scss';
import { useTimer } from './useTimer';

const Timer: FC = () => {
	const { calculateTime } = useTimer();

	const [time, setTime] = useState(calculateTime());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTime(calculateTime());
		}, 1000);

		return () => clearTimeout(timer);
	});

	return (
		<div className={styles.timer}>
			<h5>До свадьбы осталось</h5>
			{!!time ? (
				<div>
					<div>
						<AnimatePresence>
							<motion.time
								initial={{ y: 30, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: -30, opacity: 0, position: 'absolute' }}
								transition={{ duration: 0.5 }}
								key={time.days}
							>
								{time.days}
							</motion.time>
						</AnimatePresence>
						<span>дней</span>
					</div>

					<div>
						<AnimatePresence>
							<motion.time
								initial={{ y: 30, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: -30, opacity: 0, position: 'absolute' }}
								transition={{ duration: 0.5 }}
								key={time.hours}
							>
								{time.hours}
							</motion.time>
						</AnimatePresence>
						<span>часов</span>
					</div>

					<div>
						<AnimatePresence>
							<motion.time
								initial={{ y: 30, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: -30, opacity: 0, position: 'absolute' }}
								transition={{ duration: 0.5 }}
								key={time.minutes}
							>
								{time.minutes}
							</motion.time>
						</AnimatePresence>
						<span>минут</span>
					</div>
					<div>
						<AnimatePresence>
							<motion.time
								initial={{ y: 30, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: -30, opacity: 0, position: 'absolute' }}
								transition={{ duration: 0.5 }}
								key={time.seconds}
							>
								{time.seconds}
							</motion.time>
						</AnimatePresence>
						<span>секунд</span>
					</div>
				</div>
			) : (
				<p>Свадьба состоялась!</p>
			)}
		</div>
	);
};

export default Timer;
