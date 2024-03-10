import { DarkMode } from './DarkMode';

import placeholderImage from '../assets/ph.svg';

export const Card = () => {
	return (
		<>
			<div className="m-8">
				<DarkMode />
				<div className="flex justify-center items-center m-6 center">
					<div className="bg-primary-card drop-shadow-xl rounded-lg w-[60vw] md:w-[40vw] lg:w-[20vw] overflow-hidden">
						<h2 className="p-2">Lorem ipsum dolor sit.</h2>
						<img className="w-[60vw] md:w-[40vw] lg:w-[20vw]" src={placeholderImage} alt="test" />
						<p className="p-2 font-normal"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique pariatur officia molestiae enim iusto harum aut temporibus amet quam sequi.</p>
					</div>
				</div>
			</div>
		</>
	);
};
