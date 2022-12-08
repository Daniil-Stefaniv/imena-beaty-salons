import React from 'react';
import RandomKey from '../../../RandomKey/RandomKey';
import Logo from '../../GraphicElements/Logo/Logo';
import HeaderSecondLineProps from './HeaderSecondLIneTypes';

const HeaderSecondLine = ({ navMenuItems }: HeaderSecondLineProps) => {
	return (
		<div className="flex items-center justify-between pl-[54px] pr-[47px] pt-[17px] pb-5">
			<a className="" href="#">
				<Logo />
			</a>

			<nav className="">
				<ul className="flex">
					{navMenuItems.map((item: string, idx: number) => {
						return (
							<li key={RandomKey()}>
								<a
									className={
										idx === navMenuItems.length - 1
											? 'text-sm font-bold text-white'
											: 'text-sm font-bold text-white mr-[84px]'
									}
									href=""
								>
									{item}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>

			<div>
				<button className="pr-3 py-3 flex items-center text-sm font-bold text-white hover:bg-slate-600 transition-all rounded-[5px]">
					<div className=" bg-[#ED6B6A] h-px w-[50px] mr-[30px]"></div>
					Найти мастера или коворкинг
				</button>
			</div>
		</div>
	);
};

export default HeaderSecondLine;
