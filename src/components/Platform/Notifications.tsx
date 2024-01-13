import { CheckIcon } from "@heroicons/react/24/outline";

function Notifications() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
      {Array(8)
        .fill(['Notifications', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'])
        .map(([title, text]) => (
        <div className="flex">
          <div>
            <CheckIcon className="w-7 mr-4 text-green-600" />
          </div>
          <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-lg pt-2 pb-4">{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notifications;