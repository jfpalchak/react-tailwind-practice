
function FooterForm() {
  return (
    <div className="col-span-2 pt-8 md:pt-2">
      <p className="font-bold uppercase">Subscribe to our newsletter</p>
      <p className="py-4">The latest news, articles, and resources, sent to your inbox.</p>
      <form className="flex flex-col sm:flex-row mr-2">
        <input type="email" placeholder="Enter email." className="w-full p-2 mr-4 rounded-md mb-4" />
        <button className="p-2 mb-4">Subscribe</button>
      </form>
    </div>
  );
}

export default FooterForm;