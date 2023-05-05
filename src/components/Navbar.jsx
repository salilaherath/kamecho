import { useState } from 'react';
import Logo from '../assets/Logo.png';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import useMediaQuery from '../hooks/useMediaQuery';
import { Link } from 'react-scroll';

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
			<div className="flex items-center justify-between py-6 h-12 md:h-16 w-full fixed z-[99] top-0 bg-white drop-shadow-xl">
				<div className="flex items-center justify-between w-4/5 mx-auto gap-20">
					<div className="flex items-center justify-center gap-2">
						<Link
							to="hero"
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}
							className="cursor-pointer"
						>
							<img className="h-5 md:h-7 xl:h-10 " src={Logo} alt="logo" />
						</Link>
					</div>
					{isAboveMediumScreen ? (
						<div className="flex justify-between items-center w-full">
							<div className="text-black text-base font-medium flex-1 ">
								<ul className="flex gap-12 justify-end ">
									<li>
										<Link
											to="hero"
											spy={true}
											smooth={true}
											offset={-100}
											duration={500}
											className="hover:border-b-secondary-300 active:border-b-secondary-300 border-transparent border-2 cursor-pointer"
										>
											Home
										</Link>
									</li>
									<li>
										<Link
											to="about"
											spy={true}
											smooth={true}
											offset={0}
											duration={500}
											className="hover:border-b-secondary-300 active:border-b-secondary-300 border-transparent border-2 cursor-pointer"
										>
											About Us
										</Link>
									</li>
									<li>
										<Link
											to="products"
											spy={true}
											smooth={true}
											offset={-80}
											duration={500}
											className="hover:border-b-secondary-300 active:border-b-secondary-300 border-transparent border-2 cursor-pointer"
										>
											Products
										</Link>
									</li>
									<li>
										<Link
											to="contact"
											spy={true}
											smooth={true}
											offset={50}
											duration={500}
											className="hover:border-b-secondary-300 active:border-b-secondary-300 border-transparent border-2 cursor-pointer"
										>
											Contact
										</Link>
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
								<Link
									to="hero"
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
									onClick={() => setIsMenuToggled(!isMenuToggled)}
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									to="about"
									spy={true}
									smooth={true}
									offset={0}
									duration={500}
									onClick={() => setIsMenuToggled(!isMenuToggled)}
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									to="products"
									spy={true}
									smooth={true}
									offset={-80}
									duration={500}
									onClick={() => setIsMenuToggled(!isMenuToggled)}
								>
									Products
								</Link>
							</li>
							<li>
								<Link
									to="contact"
									spy={true}
									smooth={true}
									offset={50}
									duration={500}
									onClick={() => setIsMenuToggled(!isMenuToggled)}
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>
			)}
		</motion.nav>
	);
};

export default Navbar;
