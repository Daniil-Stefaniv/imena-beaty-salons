import React, { useState } from 'react';
import languageContext from './GlobalContext/GlobalContext';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function App() {
	const [selectedLanguage, setSelectedLanguage] = useState('RU');

	return (
		<languageContext.Provider
			value={{ selectedLanguage, setSelectedLanguage }}
		>
			<div className="App">
				<div className=" w-full overflow-x-hidden">
					<header>
						<Header />
					</header>
					<main>
						<div className="h-[300px]"></div>
					</main>
					<footer>
						<Footer />
					</footer>
				</div>
			</div>
		</languageContext.Provider>
	);
}

export default App;
