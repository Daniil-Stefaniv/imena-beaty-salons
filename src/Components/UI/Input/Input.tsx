import React from 'react';
import InputProps from './InputTypes';

const Input = ({
	type,
	prioritet,
	theme,
	placeholder,
	name,
	value,
}: InputProps) => {
	const styles = {
		commonStyles:
			'outline-none transition-all focus-visible:border-red-400 bg-inherit border-b-2 pb-2',
		lightBG: 'placeholder:text-[#93A0B9] text-[#173343] border-[#93A0B9]',
		darkBG: 'placeholder:text-white text-white border-white ',
		submit: 'cursor-pointer transition-all bg-red-400 hover:bg-red-500 active:bg-red-700 text-white w-full h-full',
	};

	if (type === 'submit') {
		return (
			<label className="w-full h-full relative">
				<input
					name={name}
					className={styles.submit}
					type={type}
					value={placeholder}
				/>
				<span className="bg-white absolute h-[2px] w-10 top-[calc(50%_-_2px)] left-[calc(100%_-_40px)]"></span>
			</label>
		);
	}

	return prioritet ? (
		<input
			name={name}
			className={`${styles.commonStyles} ${
				theme === 'light' ? styles.lightBG : styles.darkBG
			}`}
			required
			type={type}
			placeholder={placeholder}
		/>
	) : (
		<input
			name={name}
			className={`${styles.commonStyles} ${
				theme === 'light' ? styles.lightBG : styles.darkBG
			}`}
			type={type}
			placeholder={placeholder}
		/>
	);
};

export default Input;
