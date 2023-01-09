import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import languageContext from './Components/GlobalContext/GlobalContext';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MasterCabLogin from './Components/Pages/MasterCabinet/MasterCabLogin';
import ClientCabLogin from './Components/Pages/ClientCabinet/ClientCabLogin';
import MainPage from './Components/Pages/MainPage/MainPage';
import Layout from './Components/Pages/Layout/Layout';

function App() {
	const [selectedLanguage, setSelectedLanguage] = useState('RU');

	return (
		<languageContext.Provider
			value={{ selectedLanguage, setSelectedLanguage }}
		>
			<div className="App selection:text-white selection:bg-red-400">
				<div className=" w-full overflow-x-hidden">
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<MainPage />} />
							<Route
								path="/Master'sLogin"
								element={<MasterCabLogin />}
							/>
							<Route
								path="/Client'sLogin"
								element={<ClientCabLogin />}
							/>
						</Route>
					</Routes>
				</div>
			</div>
		</languageContext.Provider>
	);
}

export default App;
