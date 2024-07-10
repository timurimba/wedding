import { FC } from 'react';

import bg from '@/assets/images/bg.svg';

import Banner from './banner/Banner';
import Dress from './dress/Dress';
import Footer from './footer/Footer';
import Form from './form/Form';
import Places from './places/Places';
import Plan from './plan/Plan';
import Timer from './timer/Timer';
import Welcome from './welcome/Welcome';

const Home: FC = () => {
	return (
		<div>
			<div
				style={{
					backgroundImage: `url(${bg})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					padding: '0 15px',
				}}
			>
				<Banner />
				<Welcome />
			</div>
			<Timer />
			<div
				style={{
					backgroundImage: `url(${bg})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					padding: '0 15px',
				}}
			>
				<Places />
				<Dress />
			</div>
			<Plan />
			<div
				style={{
					backgroundImage: `url(${bg})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}
			>
				<Form />
				<Footer />
			</div>
		</div>
	);
};

export default Home;
