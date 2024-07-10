import { ITimer } from './timer.interface';

export const useTimer = () => {
	const calculateTime = () => {
		const difference = +new Date('2024-09-20') - +new Date();
		let timeLeft: ITimer = {} as ITimer;

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}
		return timeLeft;
	};

	return { calculateTime };
};
