import React, { useState } from 'react';
import { Routes, Route } from 'react-router';
import languageContext from './Components/GlobalContext/GlobalContext';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MasterCabLogin from './Components/Pages/MasterCabinet/MasterCabLogin';

function App() {
	const [selectedLanguage, setSelectedLanguage] = useState('RU');

	return (
		<languageContext.Provider
			value={{ selectedLanguage, setSelectedLanguage }}
		>
			<div className="App selection:text-white selection:bg-red-400">
				<div className=" w-full overflow-x-hidden">
					<header>
						<Header />
					</header>
					<main>
						<MasterCabLogin />
					</main>
					<footer>
						<Footer size={'big'} />
					</footer>
				</div>
			</div>
		</languageContext.Provider>
	);
}

export default App;
