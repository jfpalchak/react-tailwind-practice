import { ArrowRightIcon } from "@heroicons/react/24/outline";

function SupportCard({ Icon, title, text }: { Icon: HeroIconType, title: string, text: string }) {
  return (
    <div className="bg-white rounded-xl shadow-2xl">
      <div className="p-8">
        <Icon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]"/>
        <h3 className="font-bold text-2xl my-6" >{title}</h3>
        <p className="text-gray-600 text-xl" >{text}</p>
      </div>
      <div className="bg-slate-100 pl-8 py-4" >
        <p className="flex items-center text-indigo-600">Contact Us <ArrowRightIcon className="w-5 ml-2"/></p>
      </div>
    </div>
  );
}

export default SupportCard;