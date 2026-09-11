import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="flex gap-5 items-center justify-between mt-5 container mx-auto sticky top-0  bg-white ">
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
        <button className="text-[#334155]">Sign In</button>
        <button className="bg-[#D91B7E] rounded-full text-white px-5 py-2.5">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Nav;
