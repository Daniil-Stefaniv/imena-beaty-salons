import React from 'react';

const FooterFirstLine = () => {
	return (
		<div className=" border-b-2 broder-[rgba(255,255,255,.3)] px-[279px] py-11 flex">
			<div className=" w-[30%] mr-[10%]">
				<span></span>
				<h2 className=" leading-[130%]  text-[46px] font-black text-white mb-[54px]">
					Свяжитесь с нами
				</h2>
				<p className=" text-lg font-light text-white">
					Мы будем рады проконсультировать вас по вопросам
					обслуживания или открытия студии в коворкинге.
				</p>
			</div>
			<div className=" w-7/12">
				<form action="">
					<div className="w-full mb-[53px]">
						<input
							placeholder="Ваше имя *"
							className=" pb-[14px] placeholder:text-white text-white w-1/2 bg-inherit border-b-2 border-red-400"
							type="text"
						/>
						<input
							placeholder="Ваш email *"
							className=" pb-[14px] placeholder:text-white text-white w-1/2 bg-inherit border-b-2 border-red-400"
							type="text"
						/>
					</div>
					<input
						placeholder="Напишите ваш вопрос здесь *"
						className="  h-[110px] w-full placeholder:text-white placeholder:align-top text-white bg-inherit border-b-2 border-red-400"
						type="text"
					/>
					<div className="flex">
						<span className=" text-xs text-white">
							Нажимая на кнопку, вы даете согласие на обработку
							персональных данных и соглашаетесь с политикой
							конфиденциальности.
						</span>
						<label>
							<input
								className=" cursor-pointer bg-red-400 px-[112px] text-white"
								type="submit"
								value="подробнее"
							/>
							<div></div>
						</label>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FooterFirstLine;
