import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

function FooterSocials() {
  return (
    <div className="flex-col sm:flex max-w-[1240px] px-2 py-4 m-auto justify-between items-center sm:flex-row text-center text-gray-500">
      <p className="py-4">2024 Brand, LLC. All rights reserved.</p>
      <div className="flex justify-around sm:w-[300px] pt-1 text-2xl">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaGithub />
      </div>
    </div>
  );
}

export default FooterSocials;