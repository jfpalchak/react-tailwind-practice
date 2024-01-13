import { services } from "../../data/data";

function DataServices() {
  return (
    <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 mr-[10%] transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center m-auto shadow-xl gap-2">
      <p>Data Services</p>
      <div className="flex justify-between flex-wrap px-5">
        {services.map(item => (
          <p className="flex px-3 py-2 text-slate-500 gap-2">
            <item.Icon className="h-6 text-indigo-600"/>
            {item.service}
          </p>
        ))}
      </div>
    </div>
  );
}

export default DataServices;