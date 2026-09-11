import banner from "../assets/banner-stack.png";
const Hero = () => {
  return (
    <section className="lg:grid grid-cols-2 items-center container mx-auto pt-24 mb-28  ">
      <div className="flex flex-col gap-4">
        <div className="">
          <h1 className="font-bold text-[50px] leading-none">
            Build Your Ideal <br />
            <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
        </div>

        <div className="">
          <p className="text-[18px] text-[#475569] mb-6">
            Explore frontend, backend, database, and tooling options,
            <br /> compare them side by side, and put together the stack that
            fits your next project.
          </p>
        </div>

        <div className="flex gap-4">
          <button className="bg-linear-to-r from-[#F97316] to-[#EC4899] rounded-lg px-4 py-3 text-white text-[14px] font-semibold cursor-pointer">
            Explore Technologies
          </button>
          <button className="text-[#374151] px-12 py-3 rounded-lg outline outline-[#E5E7EB] text-[14px] cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
      <div>
        <img src={banner} alt="banner-pic" />
      </div>
    </section>
  );
};

export default Hero;
