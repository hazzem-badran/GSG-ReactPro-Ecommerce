const Nav = () => {
  return (
    <nav className="hidden md:flex items-center md:gap-4 lg:gap-8 ">
      <a href="/" className="hover:underline underline-offset-4">
        Home
      </a>
      <a href="/contact" className="hover:underline underline-offset-4">
        Contact
      </a>
      <a href="/about" className="hover:underline underline-offset-4">
        About
      </a>
      <a href="/signup" className="hover:underline underline-offset-4">
        Sign Up
      </a>
    </nav>
  );
};

export default Nav;
