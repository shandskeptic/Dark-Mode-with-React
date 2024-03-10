import { useEffect, useState } from 'react';
import { Sun, Moon } from '@phosphor-icons/react';

export const DarkMode = () => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const defaultStore = localStorage.getItem('theme');

		setDarkMode(defaultStore === 'light');

		document.documentElement.setAttribute('data-theme', defaultStore || 'dark');
	}, [darkMode]);

	const toogleDarkMode = () => {
		setDarkMode(!darkMode);

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		document.documentElement.setAttribute('data-theme', darkMode ? 'light' : 'dark');
	};

	return (
		<>
			<div className="flex flex-col justify-center items-center m-4">
				<p className="m-6">Toggle Mode</p>
				<button onClick={toogleDarkMode}>{darkMode ? <Moon size={32} /> : <Sun size={32} />}</button>
			</div>
		</>
	);
};
