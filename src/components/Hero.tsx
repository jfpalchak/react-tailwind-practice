import { 
  CloudArrowUpIcon, 
  CircleStackIcon, 
  PaperAirplaneIcon, 
  ServerIcon 
} from "@heroicons/react/24/solid";

import bgImage from '../assets/cyber-bg.png';

function Hero() {
  return (
    <section id="home" className="w-full h-screen bg-zinc-200 flex flex-col justify-between" >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-2">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">Cloud Management</h1>
          <p className="text-2xl">This is our Tech brand.</p>
          <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
        </div>
        <div className="w-full hidden md:flex">
          <img src={bgImage} alt="Tech stack." />
        </div>
        <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 mr-[10%] transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center m-auto shadow-xl gap-2">
          <p>Data Services</p>
          <div className="flex justify-between flex-wrap px-5">
            <p className="flex px-3 py-2 text-slate-500 gap-2"><CloudArrowUpIcon  className="h-6 text-indigo-600"/> App Security</p>
            <p className="flex px-4 py-2 text-slate-500 gap-2"><CircleStackIcon className="h-6 text-indigo-600"/> Dashboard Design</p>
            <p className="flex px-4 py-2 text-slate-500 gap-2"><ServerIcon className="h-6 text-indigo-600"/> Cloud Data</p>
            <p className="flex px-4 py-2 text-slate-500 gap-2"><PaperAirplaneIcon className="h-6 text-indigo-600"/> API</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;