import SupportCard from "./SupportCard";
import { supportData } from "../../data/data";

function SupportCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
      {supportData.map(card => (
        <SupportCard 
          key={card.title}
          Icon={card.Icon} 
          title={card.title} 
          text={card.text} 
        />
      ))}
    </div>
  );
}

export default SupportCards;