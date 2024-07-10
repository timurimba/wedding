import { FC } from 'react';

import Place from '@/components/shared/place/Place';

import banket from '@/assets/images/banket.jpg';
import eka from '@/assets/images/eka.jpg';

const Places: FC = () => {
	return (
		<div className='pt-16'>
			<Place
				title='Место проведения церемонии'
				description='Дворец бракосочетания “Екатерининский Зал”'
				img={eka}
				address='г. Краснодар, ул. Офицерская, 47'
				animate='left'
			/>
			<Place
				title='Место проведения банкета'
				description='Старый город'
				img={banket}
				address='г. Краснодар, ул. Мачуги, 111'
				animate='right'
			/>
		</div>
	);
};

export default Places;
