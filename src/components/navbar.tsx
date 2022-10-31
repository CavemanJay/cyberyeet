export const Navbar = () => {
  return (
    <div className="flex border border-solid border-black bg-blue-300 text-center">
      <a className="flex-1 border" href="/">
        <img src="main_logo.png" />
      </a>
      <a className="flex-1 border" href="contact-us">
        Contact Us
      </a>
      <a className="flex-1 border" href="manufacturing">
        Manufacturing
      </a>
      <a className="flex-1 border" href="solar">
        Solar Generation
      </a>
      <a className="flex-1 border" href="login">
        Login
      </a>
    </div>
  );
};
