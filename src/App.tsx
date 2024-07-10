import { FC } from 'react';
import { Toaster } from 'react-hot-toast';

import Home from './components/screens/home/Home';

const App: FC = () => {
	return (
		<>
			<Toaster position='bottom-center' />
			<div className='container'>
				<Home />
			</div>
		</>
	);
};

export default App;
