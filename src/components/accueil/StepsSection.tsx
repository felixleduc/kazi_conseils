export default function StepsSection() {
  return (
    <div className="grid grid-cols-1 gap-10 pb-28 md:grid-cols-3 md:gap-16">
      <div className="flex items-center gap-6 justify-center md:justify-start">
        <p className="font-finalsix text-6xl font-[900] text-white rounded-full px-[20px] py-2 bg-[#1E1F3F]">
          1
        </p>
        <p>
          Coaching ancré dans la <br />
          réalité organisationnelle
        </p>
      </div>
      <div className="flex items-center gap-6 justify-center md:justify-start">
        <p className="font-finalsix text-6xl font-[900] text-white rounded-full px-[17px] py-2 bg-[#1E1F3F]">
          2
        </p>
        <p>
          Expérience issue du <br />
          terrain mise à votre profit
        </p>
      </div>
      <div className="flex items-center gap-6 justify-center md:justify-start">
        <p className="font-finalsix text-6xl font-[900] text-white rounded-full px-[18px] py-2 bg-[#1E1F3F]">
          3
        </p>
        <p>
          Souplesse pour accompagner <br />
          les gestionnaires intermédiaires
        </p>
      </div>
    </div>
  );
}
