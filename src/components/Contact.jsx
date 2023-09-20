import Logo from "../assets/Logo.png";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <div className="py-2 w-full xl:mt-24 bg-bg-green" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="mt-10 xl:mt-20 text-xl text-center font-semibold md:text-4xl xl:text-5xl">
          CONTACT US
        </h1>
        <div className="flex items-center flex-col md:flex-row justify-around gap-10 md:gap-20 w-4/5 mt-12">
          <div className="flex flex-col items-center md:items-start justify-center gap-10 ">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer"
            >
              <img className="h-10 md:h-16 xl:h-20 " src={Logo} alt="logo" />
            </Link>
            <p className="mb-10 text-black text-base md:text-lg mt-4 xl:mt-10 lg:text-xl xl:text-xl">
              KAM Echo Solutions (PVT) LTD
              <br />
              Company Reg No - PV 00244261
              <br />
              91, Koshena, Ilukhena, Kuliyapitiya, 60232, Sri Lanka
              <br />
              <a href="http://kamecho.com/" target="blank">
                <>www.kamecho.com</>
              </a>
              <br />
              info@kamecho.lk
              <br />
              +94767138197
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1977.7223665769236!2d80.00046350062837!3d7.526373929128213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2d196180bbbd9%3A0x9bd36f3c3db204f5!2sKAM%20ECHO%20SOLUTIONS%20(PVT)%20LTD!5e0!3m2!1sen!2ssa!4v1695204511338!5m2!1sen!2ssa"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="border-0 mb-10 h-[400px] w-[350px] md:h-[450px] md:w-[700px] xl:h-[450px] xl:w-[800px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
