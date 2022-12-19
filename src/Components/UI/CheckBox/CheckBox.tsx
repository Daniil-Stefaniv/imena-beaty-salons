import React, { useEffect, useState } from 'react';
import Check from '../../GraphicElements/commonIcons/Check';
import CheckBoxProps from './CheckBoxTypes';

const CheckBox = ({ textContent, handler }: CheckBoxProps) => {
	const [checkStatus, setCheckStatus] = useState<boolean>(false);

	const switchCheckStatus = (e: React.PointerEvent) => {
		if (e.pointerType === 'mouse') {
			if (e.button === 0) {
				checkStatus ? setCheckStatus(false) : setCheckStatus(true);
			}
			return;
		}

		checkStatus ? setCheckStatus(false) : setCheckStatus(true);
	};

	useEffect(() => handler(checkStatus), [checkStatus]);

	return (
		<div
			onPointerUp={switchCheckStatus}
			className="w-fit flex items-center cursor-pointer"
		>
			<span
				className={`mr-3 transition-all w-[18px] h-[18px] border-[1px] border-red-400 rounded-[4px] flex items-center justify-center ${
					checkStatus ? 'bg-red-400' : 'bg-transparent'
				}`}
			>
				<span
					className={
						checkStatus
							? 'transition-all'
							: 'transition-all -z-10 opacity-0'
					}
				>
					<Check />
				</span>
			</span>
			<span className=" select-none">{textContent}</span>
		</div>
	);
};

export default CheckBox;
