import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Motion from '@/components/shared/motion/Motion';
import Radio from '@/components/shared/radio/Radio';
import Title from '@/components/shared/title/Title';

import styles from './Form.module.scss';
import { IForm } from './form.interface';

const Form: FC = () => {
	const { register, handleSubmit, reset } = useForm<IForm>({
		mode: 'onSubmit',
	});

	const [isPending, setIsPending] = useState(false);

	const handlerSubmit: SubmitHandler<IForm> = async ({
		isRegister,
		isWedding,
		name,
	}) => {
		let response = `(${name}): Приветствую Вас Сабина и Назар. `;

		isRegister = isRegister === 'true';
		isWedding = isWedding === 'true';

		if (isRegister && isWedding) {
			response +=
				'Круто, обязательно буду на свадьбе и на регистрации в ЗАГСе, cпасибо огромное за приглашение!';
		}

		if (isRegister && !isWedding) {
			response +=
				'К сожалению не смогу быть на свадьбе :( но на регистрации в ЗАГСе буду, спасибо)';
		}

		if (!isRegister && isWedding) {
			response +=
				'Вау, буду на свадьбе, но на регистрации в ЗАГСе к сожалению не получится, спасибо)';
		}

		if (!isRegister && !isWedding) {
			response +=
				'Блин, не смогу присутствовать на обоих мероприятиях :( спасибо за приглашение!';
		}

		try {
			setIsPending(true);

			await fetch(
				`https://api.telegram.org/bot7200174626:AAF8XSkiCEaHtL4gbBZNwF5wtqv_9giHYDI/sendMessage?chat_id=399363025&text=${response}`,
			);

			setIsPending(false);

			reset();

			toast.success('Анкета отправлена, спасибо!', {
				duration: 3000,
			});
		} catch (error) {
			toast.error('Ошибка, попробуйте еще раз', {
				duration: 3000,
			});
		}
	};

	const handlerError = () => {
		toast.error('Вы не заполнили анкету полностью!', {
			duration: 3000,
		});
	};

	return (
		<Motion className='px-[15px]' animate='right'>
			<form
				onSubmit={handleSubmit(handlerSubmit, handlerError)}
				className={styles.form}
			>
				<Title>Анкета</Title>
				<p>Пожалуйста, ответьте на вопросы</p>
				<div>
					<p>Фамилия и имя (перечислите всех)</p>
					<input
						{...register('name', {
							required: true,
						})}
						type='text'
						placeholder='ФИО'
					/>
				</div>
				<div>
					<p>Сможете ли вы присутствовать на свадьбе?</p>
					<Radio
						{...register('isWedding', {
							required: true,
						})}
						className='mb-2'
						value='true'
					>
						Да
					</Radio>
					<Radio
						{...register('isWedding', {
							required: true,
						})}
						value='false'
					>
						Нет
					</Radio>
				</div>
				<div>
					<p>Сможете ли Вы присутствовать на регистрации в ЗАГСе?</p>
					<Radio
						{...register('isRegister', {
							required: true,
						})}
						className='mb-2'
						value='true'
					>
						Да
					</Radio>
					<Radio
						{...register('isRegister', {
							required: true,
						})}
						value='false'
					>
						Нет
					</Radio>
				</div>
				<button disabled={isPending} type='submit'>
					отправить
				</button>
			</form>
		</Motion>
	);
};

export default Form;
