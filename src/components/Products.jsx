import Picture1 from "../assets/Picture1.webp";
import Picture3 from "../assets/Picture3.webp";
import Picture2 from "../assets/coco.jpg";
import Picture4 from "../assets/coco2.webp";
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
        <div className="flex flex-col-reverse mt-6 xl:flex-row md:items-center md:gap-6 xl:mt-16">
          <div className="text-black text-center md:text-left md:w-[100%]">
            <h2 className="text-lg mt-4 font-semibold md:text-2xl xl:text-3xl">
              KAM COCO PRODUCTS
            </h2>
            <p className="text-base text-justify md:text-lg mt-4 xl:mt-12 lg:text-lg xl:text-xl ">
              KAM Echo Solutions (PVT) LTD, a leading name in the coconut
              industry nestled within the heart of Sri Lanka's coconut triangle,
              Kuliyapitiya. Established on August 25, 2021, our journey began
              with a vision to revolutionize the coconut industry. Our strategic
              location, coupled with a rich history, propels us to specialize in
              the production and distribution of high-quality raw coconuts and a
              range of eco-friendly coconut-based products.
              <br />
              At KAM Echo Solutions, we take pride in our expertise, which
              encompasses:
            </p>
            <h3 className="text-lg xl:text-xl font-medium mt-5">
              Semi Husked Coconut
            </h3>
            <p className="text-justify">
              We are dedicated coconut manufacturers, ensuring that our products
              meet the highest standards of quality and freshness.
            </p>
            <h3 className="text-md md:text-lg font-medium mt-5">
              Specifications
            </h3>

            <table className="text-start xl:ml-0 xl:mr-0 ml-auto mr-auto">
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

            <h3 className="text-lg xl:text-xl font-medium mt-5">
              Coconut Grow Bags
            </h3>

            <p className="text-justify">
              Our Coco Peat Grow Bags are a testament to our commitment to
              eco-friendly and efficient farming practices. Cultivated in the
              heart of Sri Lanka's coconut triangle in Kuliyapitiya, our coco
              peat grow bags are crafted from premium coconut husk fibers, a
              renewable resource abundantly available in our region. <br />
              Our Coco Peat Grow Bags offer a versatile and effective solution
              for nurturing a wide range of plants, from vegetables to
              ornamental plants. The natural properties of coconut peat ensure
              optimal water retention and aeration, promoting healthy root
              development and vigorous plant growth. The biodegradable nature of
              our grow bags emphasizes our dedication to sustainability and
              environmental responsibility. <br />
              At KAM Echo Solutions, we prioritize quality and strive to deliver
              products that meet the highest industry standards. Our Coco Peat
              Grow Bags are meticulously processed and packaged to ensure a
              convenient and user-friendly gardening experience. Join us in
              revolutionizing modern agriculture with our eco-conscious Coco
              Peat Grow Bags and cultivate a greener and more sustainable future
            </p>
          </div>
          <div className="w-[100%] flex flex-col xl:gap-20 justify-between">
            <div className="relative w-[100%] flex justify-between -z-[99] mt-6 md:mt-12">
              <img
                src={Picture1}
                alt="Coconut Products"
                className="w-[49%] h-48 object-cover rounded-lg shadow-lg md:h-60 xl:h-80"
              />
              <img
                src={Picture2}
                alt="Coconut Products"
                className="w-[49%] h-48 object-cover rounded-lg shadow-lg md:h-60 xl:h-80 absolute -top-[10%] right-0"
              />
            </div>
            <div className="relative w-[100%] flex justify-between -z-[99] mt-6 md:mt-12">
              <img
                src={Picture3}
                alt="Coconut Products"
                className="w-[49%] h-48 object-cover rounded-lg shadow-lg md:h-60 xl:h-80"
              />
              <img
                src={Picture4}
                alt="Coconut Products"
                className="w-[49%] h-48 object-cover rounded-lg shadow-lg md:h-60 xl:h-80 absolute -top-[10%] right-0"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse mt-6 xl:flex-row-reverse md:items-center md:gap-6 xl:mt-16">
          <div className="text-black text-center md:text-left md:w-[100%]">
            <h2 className="text-lg mt-4 font-semibold md:text-2xl xl:text-3xl">
              KAM BETEL PRODUCTS
            </h2>
            <p className="text-base text-justify md:text-lg mt-4 xl:mt-12 lg:text-lg xl:text-xl">
              Kuliyapitiya, situated within Sri Lanka's coconut triangle, not
              only thrives in the coconut industry but also holds significant
              potential in the betel products sector. Betel leaves, often
              referred to as "Paan" in the local language, are an integral part
              of Sri Lankan culture and have been consumed traditionally for
              centuries.
              <br />
              The region's favorable climate and soil conditions make it
              conducive for the cultivation of betel leaves. The vibrant betel
              market in Kuliyapitiya is driven by local demand as well as
              exports to various countries with South Asian communities.
            </p>
          </div>
          <div className="relative w-[100%] flex justify-between -z-[99] mt-6 md:mt-12">
            <img
              src={betel1}
              alt="Betel Products"
              className="w-[49%] h-48 object-cover rounded-lg shadow-lg md:h-60 xl:h-80"
            />
            <img
              src={betel2}
              alt="Betel Products"
              className="w-[49%] h-48 object-cover rounded-lg shadow-lg md:h-60 xl:h-80 absolute -top-[10%] right-0 xl:top-[10%]"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse mt-6 xl:flex-row md:items-center md:gap-6 xl:mt-16">
          <div className="text-black text-center md:text-left md:w-[100%]">
            <h2 className="text-lg mt-4 font-semibold md:text-2xl xl:text-3xl">
              MANAGEMENT CONSULTATION AND SERVICES
            </h2>
            <p className="text-base text-justify md:text-lg mt-4 xl:mt-12 lg:text-lg xl:text-xl">
              At KAM Echo Solutions, we extend our expertise to global
              companies, offering diversified management solutions. Our services
              include:
            </p>
            <ul className="list-disc pl-8 text-start ">
              <li>
                Management Consultations for Start-ups: We provide tailored
                advice and strategies to guide start-ups in achieving their
                business objectives.
              </li>
              <li>
                Marketing Solutions: Our marketing solutions are designed to
                enhance brand visibility and reach, ensuring optimal market
                positioning.
              </li>
              <li>
                Web-Based Solutions and Online Stores: We craft engaging and
                functional web-based solutions and online stores, enhancing
                digital presence and customer engagement.
              </li>
              <li>
                Trading Platform: We offer a comprehensive trading platform for
                seamless transactions and business growth.
              </li>
            </ul>
          </div>
          <div className="relative w-[100%] flex justify-between -z-[99] mt-6 md:mt-12">
            <img
              src={business1}
              alt="Coconut Products"
              className="w-[49%] h-48 object-cover rounded-lg shadow-lg md:h-60 xl:h-80"
            />
            <img
              src={business2}
              alt="Coconut Products"
              className="w-[49%] h-48 object-cover rounded-lg shadow-lg md:h-60 xl:h-80 absolute -top-[10%] right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
