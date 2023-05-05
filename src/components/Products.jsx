import coco1 from '../assets/Coco1.jpg';
import coco2 from '../assets/Coco2.jpg';
import betel1 from '../assets/Betel1.jpg';
import betel2 from '../assets/Betel2.jpg';

const Products = () => {
	return (
		<div
			className="mt-8 w-full flex flex-col items-center xl:mt-20"
			id="products"
		>
			<div className="relative z-[1] w-4/5 ">
				<h1 className="text-xl text-center font-semibold md:text-4xl xl:text-5xl">
					PRODUCTS
				</h1>
				<div className="flex flex-col-reverse mt-6 md:flex-row md:items-center md:gap-6 xl:mt-16">
					<div className="text-black text-center md:text-left md:w-[90%]">
						<h2 className="text-lg mt-4 font-semibold md:text-2xl xl:text-3xl">
							KAM COCO PRODUCTS
						</h2>
						<p className="text-base text-justify md:text-lg mt-4 xl:mt-12 lg:text-lg xl:text-xl">
							We are suppliers of Eco products such as Coco peat grow bags,
							Activated carbon made out of coconut shell charcoal, Coconut oil,
							Desiccated coconut, Coconut peat and Handcrafts.
						</p>
					</div>
					<div className="relative w-[100%] flex justify-between -z-[99] mt-6 md:mt-12">
						<img
							src={coco1}
							alt="Coconut Products"
							className="w-[49%] h-60 object-cover rounded-lg shadow-lg md:h-60 xl:h-80"
						/>
						<img
							src={coco2}
							alt="Coconut Products"
							className="w-[49%] h-60 object-cover rounded-lg shadow-lg md:h-60 xl:h-80 absolute -top-[10%] right-0"
						/>
					</div>
				</div>
				<div className="flex flex-col-reverse mt-6 md:flex-row-reverse md:items-center md:gap-6 xl:mt-16">
					<div className="text-black text-center md:text-left md:w-[90%]">
						<h2 className="text-lg mt-4 font-semibold md:text-2xl xl:text-3xl">
							KAM BETEL PRODUCTS
						</h2>
						<p className="text-base text-justify md:text-lg mt-4 xl:mt-12 lg:text-lg xl:text-xl">
							We are suppliers of Eco products such as Coco peat grow bags,
							Activated carbon made out of coconut shell charcoal, Coconut oil,
							Desiccated coconut, Coconut peat and Handcrafts.
						</p>
					</div>
					<div className="relative w-[100%] flex justify-between -z-[99] mt-6 md:mt-12">
						<img
							src={betel1}
							alt="Betel Products"
							className="w-[49%] h-60 object-cover rounded-lg shadow-lg md:h-60 xl:h-80"
						/>
						<img
							src={betel2}
							alt="Betel Products"
							className="w-[49%] h-60 object-cover rounded-lg shadow-lg md:h-60 xl:h-80 absolute -top-[10%] right-0 xl:top-[10%]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
