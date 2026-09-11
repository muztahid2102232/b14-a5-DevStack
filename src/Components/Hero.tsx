import banner from '../assets/banner-stack.png';
const Hero = () => {
    return (
      <section className="grid grid-cols-2 items-center container mx-auto mt-24 ">
        <div>
          <h1 className="font-extrabold text-[60px]">
            Build Your Ideal <br />
            <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p>
            Explore frontend, backend, database, and tooling options,
            <br /> compare them side by side, and put together the stack that
            fits your next project.
          </p>
          <button className="bg-linear-to-r from-[#F97316] to-[#EC4899] rounded-lg px-4 py-3">
            Explore Technologies
          </button>
          <button>Learn More</button>
        </div>
        <div>
          <img src={banner} alt="banner-pic" />
        </div>
      </section>
    );
};

export default Hero;