const Contact = () => {
  return (
    <div
      className=" mt-8 w-full flex flex-col items-center xl:mt-24 bg-bg-green"
      id="contact"
    >
      <div className="w-4/5 ">
        <h1 className="mt-10 xl:mt-20 text-xl text-center font-semibold md:text-4xl xl:text-5xl">
          CONTACT US
        </h1>

        <p className="mb-10 text-black text-base text-center md:text-lg mt-4 xl:mt-12 lg:text-xl xl:text-2xl xl:text-center">
          www.kamecho.lk
          <br />
          0767138197
          <br />
          anuradha@kamecho.lk
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d253136.6057827124!2d80.04632235937501!3d7.5466589062465825!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2d1bc617a6bab%3A0x35ee2f853f29e136!2sDalupotha%20Coconut%20Estate%20%26%20Coconut%20exporters%20Kuliyapitiya!5e0!3m2!1sen!2slk!4v1685255994938!5m2!1sen!2slk"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="border-0 mb-10 h-[400px] w-[350px] md:h-[450px] md:w-[700px] xl:h-[450px] xl:w-[800px]"
      ></iframe>
    </div>
  );
};

export default Contact;
