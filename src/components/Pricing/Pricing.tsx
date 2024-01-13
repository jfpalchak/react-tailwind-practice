import PricePlan from "./PricePlan";

function Pricing() {
  return (
    <section id="pricing" className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>

      <div className="max-w-[1240px] mx-auto py-12">

        <div className="text-center py-8 text-slate-300">
          <h3 className="text-3xl uppercase">Pricing</h3>
          <h2 className="text-5xl font-bold text-white py-8">Choose the right price for your needs.</h2>
          <p className="text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae veritatis natus ipsa beatae esse placeat. Laboriosam non maiores nesciunt fugit!</p>
        </div>

        <div className="grid md:grid-cols-2 ">
          <PricePlan price={"$49"} chipText={"Standard"} />
          <PricePlan price={"$99"} chipText={"Pro Plan"} />
        </div>

      </div>
    </section>
  );
}

export default Pricing;