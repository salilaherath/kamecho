import Picture1 from "../assets/Picture1.webp";
import Picture3 from "../assets/Picture3.webp";
import Picture2 from "../assets/coco.jpg";
import betel1 from "../assets/Betel1.webp";
import betel2 from "../assets/Betel2.webp";
import business1 from "../assets/business1.webp";
import business2 from "../assets/business2.webp";

const Products = () => {
  return (
    <div
      className="mt-8 w-full flex flex-col items-center xl:mt-20"
      id="products"
    >
      <div className="relative z-[1] w-4/5 ">
        <h1 className="text-xl text-center font-semibold md:text-4xl xl:text-5xl">
          PRODUCTS AND SERVICES
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
            <h3 className="text-md md:text-lg font-medium mt-3">
              Semi Husked Coconut - Product Specifications
            </h3>

            <table>
              <tr className="mt-2 border-b">
                <td className="font-medium px-3">Type:</td>
                <td className="px-3 py-2">Semi Husked</td>
              </tr>
              <tr className="mt-2 border-b">
                <td className="font-medium px-3">Size:</td>
                <td className="px-3 py-2">&gt; 11 cm</td>
              </tr>
              <tr className="mt-2 border-b">
                <td className="font-medium px-3">Color:</td>
                <td className="px-3 py-2">Golden Brown Color</td>
              </tr>
              <tr className="mt-2 border-b">
                <td className="font-medium px-3">Variety:</td>
                <td className="px-3 py-2">Matured Coconut</td>
              </tr>
              <tr className="mt-2 border-b">
                <td className="font-medium px-3">Weight (Per Nut):</td>
                <td className="px-3 py-2">&gt; 500g</td>
              </tr>
              <tr className="mt-2 border-b">
                <td className="font-medium px-3">Characteristics:</td>
                <td className="px-3 py-2">
                  No Sprout <br /> No Cracked / Broken <br /> Crested with 3
                  eyes
                </td>
              </tr>
            </table>
          </div>
          <div className="relative w-[100%] flex justify-between -z-[99] mt-6 md:mt-12">
            <img
              src={Picture1}
              alt="Coconut Products"
              className="w-[49%] h-60 object-cover rounded-lg shadow-lg md:h-60 xl:h-80"
            />
            <img
              src={Picture2}
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
              Betel cultivation is a significant agricultural practice in the
              area, primarily driven by the demand for betel leaves, which are
              widely used in traditional and cultural practices such as chewing
              betel quids.
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
        <div className="flex flex-col-reverse mt-6 md:flex-row md:items-center md:gap-6 xl:mt-16">
          <div className="text-black text-center md:text-left md:w-[90%]">
            <h2 className="text-lg mt-4 font-semibold md:text-2xl xl:text-3xl">
              BUSINESS CONSULTATION
            </h2>
            <p className="text-base text-justify md:text-lg mt-4 xl:mt-12 lg:text-lg xl:text-xl">
              Unlock Your Business's Full Potential - Expert consultation in IT,
              Marketing, HR, and Strategic Management for growth-driven success.
              Visit us for personalized solutions.
            </p>
          </div>
          <div className="relative w-[100%] flex justify-between -z-[99] mt-6 md:mt-12">
            <img
              src={business1}
              alt="Coconut Products"
              className="w-[49%] h-60 object-cover rounded-lg shadow-lg md:h-60 xl:h-80"
            />
            <img
              src={business2}
              alt="Coconut Products"
              className="w-[49%] h-60 object-cover rounded-lg shadow-lg md:h-60 xl:h-80 absolute -top-[10%] right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
