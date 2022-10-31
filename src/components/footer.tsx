export const Footer = () => {
  return (
    <div className="flex justify-around text-center bg-orange-200">
      <a className="flex-1 border" href="">
        <img src="vehicle.png" alt="" />
      </a>
      <a className="flex-1 border" href="">
        Subscribe to Newsletter
      </a>
      <div className="flex-1 border">
        <a className="block" href="contact-us">
          Contact Us
        </a>
        <a className="block" href="manufacturing">
          Manufacturing
        </a>
        <a className="block" href="solar">
          Solar Generation
        </a>
      </div>
    </div>
  );
};
