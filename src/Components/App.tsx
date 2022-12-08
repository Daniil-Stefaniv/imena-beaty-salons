import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function App() {
	return (
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
	);
}

export default App;
