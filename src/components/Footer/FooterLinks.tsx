type FooterLinksProps = {
  links: Link[];
  title: string;
}

function FooterLinks({ links, title }: FooterLinksProps ) {
  return (
    <div>
      <h6 className="font-bold uppercase pt-2">{title}</h6>
      <ul>
        {links.map(link => (
          <li className="py-1" key={link.text}><a href={link.href}>{link.text}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinks;