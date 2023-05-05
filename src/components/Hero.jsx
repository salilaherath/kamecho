import HeroImg from '../assets/Hero.jpg';

const Hero = () => {
	return (
		<div id="hero">
			{/* <div className="md:h-[80vh] w-full"> */}
			<div className="bg-black h-[30vh] w-full relative md:h-[40vh] xl:h-[70vh] mt-12 md:mt-16">
				<img
					className="h-full w-full object-cover absolute object-center"
					src={HeroImg}
					alt="Hero Image"
				/>
				<div className="backdrop-brightness-75 w-full h-full grid place-items-center">
					<div className="absolute top-[35%] flex flex-col w-4/5 place-items-center text-center">
						<h1 className="text-lg text-white font-semibold drop-shadow-md md:text-4xl xl:text-4xl">
							Welcome to
						</h1>
						<h1 className="text-2xl text-white font-semibold drop-shadow-md md:text-5xl xl:text-6xl">
							KAMEcho Solutions!
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
