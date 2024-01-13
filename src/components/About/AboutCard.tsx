type AboutCardProps = {
  metric: string;
  text: string;
}

function AboutCard({ metric, text }: AboutCardProps ) {
  return (
    <div className="border py-8 rounded-xl shadow-xl">
      <p className="text-6xl font-bold text-indigo-600">{metric}</p>
      <p className="text-gray-400 mt-2">{text}</p>
    </div>
  );
}

export default AboutCard;