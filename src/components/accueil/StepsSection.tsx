export default function StepsSection() {
  return (
    <div className="grid grid-cols-1 gap-10 pb-28 px-4 md:gap-12 md:px-16 lg:grid-cols-3 lg:gap-16 lg:px-0">
      <div className="flex items-center gap-6 w-full max-w-md mx-auto justify-start lg:max-w-full lg:mx-0 lg:justify-center">
        <p className="font-finalsix text-6xl font-[900] text-white rounded-full px-[20px] py-2 bg-[#1E1F3F]">
          1
        </p>
        <p className="text-left">
          Coaching ancré dans la <br className="hidden min-[1400px]:inline" />
          réalité organisationnelle
        </p>
      </div>
      <div className="flex items-center gap-6 w-full max-w-md mx-auto justify-start lg:max-w-full lg:mx-0 lg:justify-center">
        <p className="font-finalsix text-6xl font-[900] text-white rounded-full px-[17px] py-2 bg-[#1E1F3F]">
          2
        </p>
        <p className="text-left">
          Expérience issue du <br className="hidden min-[1400px]:inline" />
          terrain mise à votre profit
        </p>
      </div>
      <div className="flex items-center gap-6 w-full max-w-md mx-auto justify-start lg:max-w-full lg:mx-0 lg:justify-center">
        <p className="font-finalsix text-6xl font-[900] text-white rounded-full px-[18px] py-2 bg-[#1E1F3F]">
          3
        </p>
        <p className="text-left">
          Souplesse pour accompagner <br className="hidden min-[1400px]:inline" />
          les gestionnaires intermédiaires
        </p>
      </div>
    </div>
  );
}
