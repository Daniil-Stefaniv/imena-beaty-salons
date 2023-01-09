import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { Outlet } from 'react-router';

const Layout = () => {
	return (
		<>
			<header>
				<Header />
			</header>

			<main>
				<Outlet />
			</main>

			<footer>
				<Footer size={'big'} />
			</footer>
		</>
	);
};

export default Layout;
