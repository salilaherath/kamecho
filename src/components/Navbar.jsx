import { useState } from 'react';
import Logo from '../assets/Logo.png';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import useMediaQuery from '../hooks/useMediaQuery';

const Navbar = () => {
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	const isAboveMediumScreen = useMediaQuery('(min-width:768px)');
	return (
		<motion.nav
			variants={navVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
		>
			<div className="flex items-center justify-between py-6 w-full">
				<div className="flex items-center justify-between w-4/5 mx-auto gap-20">
					<div className="flex items-center justify-center gap-2">
						<img className="h-8 xl:h-10 " src={Logo} alt="logo" />
					</div>
					{isAboveMediumScreen ? (
						<div className="flex justify-between items-center w-full">
							<div className="text-black text-base font-medium flex-1">
								<ul className="flex gap-12 justify-end">
									<li>
										<a href="">Home</a>
									</li>
									<li>
										<a href="">About Us</a>
									</li>
									<li>
										<a href="">Products</a>
									</li>
									<li>
										<a href="">Contact Us</a>
									</li>
								</ul>
							</div>
						</div>
					) : (
						<button
							className="rounded-full p-2"
							onClick={() => setIsMenuToggled(!isMenuToggled)}
						>
							<Bars3Icon className="h-6 w-6 text-black" />
						</button>
					)}
				</div>
			</div>
			{/* MOBILE NAVBAR */}
			{isMenuToggled && !isAboveMediumScreen && (
				<div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-secondary-300 drop-shadow-xl">
					{/* CLOSING */}
					<div className="flex justify-end p-12">
						<button onClick={() => setIsMenuToggled(!isMenuToggled)}>
							<XMarkIcon className="h-6 w-6 text-white" />
						</button>
					</div>
					{/* LINKS */}
					<div className="ml-[33%] ">
						<ul className="flex flex-col gap-10 text-xl text-white">
							<li>
								<a href="#home">Home</a>
							</li>
							<li>
								<a href="#countries">About Us</a>
							</li>
							<li>
								<a href="">Products</a>
							</li>
							<li>
								<a href="">Contact Us</a>
							</li>
						</ul>
					</div>
				</div>
			)}
		</motion.nav>
	);
};

export default Navbar;
