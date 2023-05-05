import HeroImg from '../assets/Hero.jpg';

const Hero = () => {
	return (
		<div>
			{/* <div className="md:h-[80vh] w-full"> */}
			<div className="bg-black h-[30vh] w-full relative md:h-[50vh] xl:h-[70vh]">
				<img
					className="h-full w-full object-cover absolute object-center"
					src={HeroImg}
					alt="Hero Image"
				/>
				<div className="backdrop-brightness-75 w-full h-full grid place-items-center">
					<div className="absolute top-[40%] flex flex-col w-4/5 place-items-center text-center">
						<h1 className="text-lg text-white font-semibold drop-shadow-md md:text-4xl xl:text-6xl">
							Welcome to KAMEcho Solutions!
						</h1>
						<h3 className="text-xs mt-2 text-white drop-shadow-md md:text-xl xl:text-3xl">
							We work hard to provide the solution you need
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
