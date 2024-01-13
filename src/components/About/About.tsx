import AboutCard from "./AboutCard";

function About () {
  return(
    <section id="about" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Trusted by developers around the world</h2>
          <p className="text-3xl py-6 text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum aperiam blanditiis exercitationem consequuntur dicta earum sequi eius beatae. Ratione, numquam?</p>
        </div>
        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <AboutCard metric={"100%"} text={"Completion"} />
          <AboutCard metric={"24/7"} text={"Delivery"} />
          <AboutCard metric={"100k"} text={"Transactions"} />
        </div>
      </div>
    </section>
  );
}

export default About;