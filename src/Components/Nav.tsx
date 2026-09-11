import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="flex gap-5 items-center justify-between pt-5 mx-auto sticky top-0  bg-white container">
      <div>
        <img src={logo} alt="logo-with-text" />
      </div>
      <div>
        <ul className="flex gap-5 text-[#475569] text-[14px] font-medium list-none">
          <li className="text-[#DB2777] ">
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Technologies</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div className="text-[14px] font-medium flex gap-5 items-center justify-center">
        <button className="text-[#334155] cursor-pointer">Sign In</button>
        <button className="bg-[#D91B7E] rounded-full text-white px-5 py-2.5 cursor-pointer">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Nav;

<nav className="sticky top-0 z-50">
  <div className="grid grid-cols-3 items-center px-4 py-4 md:flex md:justify-between">
    <div className="flex justify-start">
      <button className="md:hidden">☰</button>

      <a href="#" className="hidden md:block">
        MyLogo
      </a>
    </div>

    <div className="flex justify-center md:hidden">
      <a href="#">MyLogo</a>
    </div>

    <ul className="hidden items-center gap-8 md:flex">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li>
        <a href="#">Projects</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
    </ul>

    <div className="flex justify-end gap-2">
      <button>Login</button>
      <button>Sign Up</button>
    </div>
  </div>
</nav>;
