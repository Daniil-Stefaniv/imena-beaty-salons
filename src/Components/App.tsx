import React, { useState } from 'react';
import languageContext from './GlobalContext/GlobalContext';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import MasterCabLogin from './Pages/MasterCabinet/MasterCabLogin';

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
						<Footer size={'small'} />
					</footer>
				</div>
			</div>
		</languageContext.Provider>
	);
}

export default App;
