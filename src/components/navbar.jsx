import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center gap-[60px]">
      <h1 className="flex text-2xl font-bold text-white shrink-0">
        Nawa Sapta LMS
      </h1>
      <ul className="flex items-center gap-10">
        <li className="font-semibold transition-all duration-300 hover:text-[#662FFF] text-white">
          <Link to="#">Home</Link>
        </li>
        <li className="font-semibold transition-all duration-300 hover:text-[#662FFF] text-white">
          <Link to="#">Pricing</Link>
        </li>
        <li className="font-semibold transition-all duration-300 hover:text-[#662FFF] text-white">
          <Link to="#">Features</Link>
        </li>
        <li className="font-semibold transition-all duration-300 hover:text-[#662FFF] text-white">
          <Link to="#">Testimonials</Link>
        </li>
      </ul>
    </div>
  );
}
