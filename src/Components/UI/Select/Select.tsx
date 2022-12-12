import React, { PointerEventHandler, useEffect, useState } from 'react';
import RandomKey from '../../../RandomKey/RandomKey';
import SelectIcon from '../../GraphicElements/commonIcons/SelectIcon';
import ContextForSelect from './Context/SelectContext';
import MyOption from './Option/MyOption';
import SelectProps from './SelectTypes';

const Select = ({ opLIst, iconList, styles, handler }: SelectProps) => {
	const [selectedValue, setSelectedValue] = useState<string>(opLIst[0]);
	const [visibilityState, setVsisbilityState] = useState<boolean>(false);

	const visibilitySwitch: React.PointerEventHandler<HTMLDivElement> = () => {
		visibilityState ? setVsisbilityState(false) : setVsisbilityState(true);
	};

	useEffect(() => handler(selectedValue), [selectedValue]);

	return (
		<ContextForSelect.Provider
			value={{ selectedValue, setSelectedValue, setVsisbilityState }}
		>
			<div>
				<div
					tabIndex={0}
					onBlurCapture={() => {
						setVsisbilityState(false);
					}}
					className={
						styles.allContainer
							? `relative ${styles.allContainer}`
							: 'relative '
					}
				>
					<div
						onPointerUp={visibilitySwitch}
						className={`flex items-center select-none w-full px-5 z-50 shadow-sm cursor-pointer ${styles.mainField}`}
					>
						{iconList ? iconList[selectedValue] : undefined}
						<span className=" mr-[13px]">{selectedValue}</span>
						<span
							className={
								visibilityState
									? ' transition-all rotate-180'
									: ' transition-all'
							}
						>
							<SelectIcon />
						</span>
					</div>

					<ul
						className={
							visibilityState
								? `w-full transition-all absolute z-40 ${styles.opContainer}`
								: `w-full transition-all absolute opacity-0 -z-50 ${styles.opContainer}`
						}
					>
						{opLIst.map((op: string) => {
							return (
								<MyOption
									key={RandomKey()}
									Icon={iconList ? iconList[op] : undefined}
									value={op}
									style={styles.option}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		</ContextForSelect.Provider>
	);
};

export default Select;
