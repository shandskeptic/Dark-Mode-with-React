import { Card } from './Card';
import { Header } from './Header';

export const Layout = () => {
	return (
		<div className="bg-primary-bg h-screen font-semibold text-primary-slice transition-colors duration-200">
			<Header />
			<Card />
		</div>
	);
};
