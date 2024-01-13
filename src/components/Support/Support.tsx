import SupportCards from './SupportCards';
import supportImage from '../../assets/support.jpg';

function Support() {
  return (
    <section id="support" className="w-full mt-24">

      <div className="absolute w-full h-[700px] bg-gray-900/90">
        <img src={supportImage} alt="Group of support representatives." className="w-full h-full object-cover mix-blend-overlay"/>
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">

        <div className="px-4 py-12">
          <h3 className="text-3xl pt-8 text-slate-300 uppercase text-center">Support</h3>
          <h2 className="text-5xl font-bold py-6 text-center">Find the Right Team</h2>
          <p className="py-4 text-3xl text-slate-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, pariatur unde impedit numquam totam quaerat iusto nihil sapiente illum error!</p>
        </div>

        <SupportCards />
        
      </div>

    </section>
  );
}

export default Support;