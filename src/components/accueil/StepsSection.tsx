export default function StepsSection() {
  return (
    <div className="grid grid-cols-1 gap-10 pb-28 place-items-center md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16">
      <div className="flex items-center gap-6 justify-center">
        <p className="font-finalsix text-6xl font-[900] text-white rounded-full bg-[#1E1F3F] w-16 h-16 flex items-center justify-center">
          1
        </p>
        <p className="text-left">
          Coaching ancré dans la <br />
          réalité organisationnelle
        </p>
      </div>
      <div className="flex items-center gap-6 justify-center">
        <p className="font-finalsix text-6xl font-[900] text-white rounded-full bg-[#1E1F3F] w-16 h-16 flex items-center justify-center">
          2
        </p>
        <p className="text-left">
          Expérience issue du <br />
          terrain mise à votre profit
        </p>
      </div>
      <div className="flex items-center gap-6 justify-center">
        <p className="font-finalsix text-6xl font-[900] text-white rounded-full bg-[#1E1F3F] w-16 h-16 flex items-center justify-center">
          3
        </p>
        <p className="text-left">
          Souplesse pour accompagner <br />
          les gestionnaires intermédiaires
        </p>
      </div>
    </div>
  );
}
