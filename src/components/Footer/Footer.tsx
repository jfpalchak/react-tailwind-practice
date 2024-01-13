import FooterSocials from "./FooterSocials";
import FooterForm from "./FooterForm";
import FooterLinks from "./FooterLinks";
import { footerLinkList } from "../../data/data";

function Footer() {
  return (
    <footer id="footer" className="w-full mt-24 bg-slate-900 text-gray-300 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        {footerLinkList.map(footerLink => (
          <FooterLinks key={footerLink.title} title={footerLink.title} links={footerLink.links} />
        ))}
        <FooterForm />
      </div>
      <FooterSocials />
    </footer>
  );
}

export default Footer;