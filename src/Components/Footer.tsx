import footerImg from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="container mx-auto mt-48">
      <footer
        className="
         border-t border-slate-200 md:border-none
           mx-auto px-5 py-10
          grid grid-cols-1 gap-8
          md:grid-cols-12 md:gap-8
          text-center md:text-left
        "
      >
        {/* Logo / tagline / social links */}
        <div className="md:col-span-3 flex flex-col items-center md:items-start gap-3">
          <img src={footerImg} alt="footer logo" className="h-8 sm:h-9" />

          <p className="text-xs sm:text-[12px] text-slate-500 font-jakarta ">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <ul
            className="
              flex gap-2 items-center
              md:flex-row md:gap-4 md:items-start
              font-semibold text-sm md:text-base font-jakarta
            "
          >
            <li>Github</li>
            <span className="md:hidden text-slate-300">•</span>
            <li>Twitter</li>
            <span className="md:hidden text-slate-300">•</span>
            <li>Linkedin</li>
          </ul>
        </div>

        {/* PRODUCT / COMPANY / LEGAL — hidden on mobile, visible on desktop */}
        <div className="hidden md:grid col-span-3">
          <p className="font-bold font-jakarta">PRODUCT</p>
          <ul className="text-[12px] text-slate-500 space-y-1 font-jakarta">
            <li>Home</li>
            <li>Technologies</li>
            <li>Products</li>
          </ul>
        </div>

        <div className="hidden md:grid col-span-3 ">
          <p className="font-bold font-jakarta">COMPANY</p>
          <ul className="text-[12px] text-slate-500 space-y-1 font-jakarta">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="hidden  md:grid col-span-3">
          <p className="font-bold font-jakarta">LEGAL</p>
          <ul className="text-[12px] text-slate-500 space-y-1 font-jakarta">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </footer>

      {/* Normal divider — mobile only */}
      <div className="border-t border-slate-200 md:hidden" />

      <div
        className="
          flex flex-col gap-3  mx-auto px-5 py-9
          text-slate-500 text-center font-jakarta
          md:flex-row md:items-center md:justify-between md:text-left
          md:border-t md:border-slate-200
        "
      >
        <span className="text-[11px] md:text-[12px]">
          © 2026 Dev Stack. All rights reserved.
        </span>
        <ul className="flex gap-4 justify-center text-[11px] font-jakarta md:text-[12px] ">
          <li>privacy</li>
          <li>Terms</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
