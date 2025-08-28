export default function StepsSection() {
  return (
    <div className="grid gap-8 pb-28 md:grid-cols-3 md:gap-16">
      <div className="flex items-center gap-6 mx-auto w-full max-w-[360px]">
        <p className="font-finalsix text-6xl font-[900] text-white rounded-full w-16 h-16 shrink-0 flex items-center justify-center bg-[#1E1F3F]">
          1
        </p>
        <p className="text-left">
          Coaching ancré dans la <br className="hidden xl:block" />
          réalité organisationnelle
        </p>
      </div>
      <div className="flex items-center gap-6 mx-auto w-full max-w-[360px]">
        <p className="font-finalsix text-6xl font-[900] text-white rounded-full w-16 h-16 shrink-0 flex items-center justify-center bg-[#1E1F3F]">
          2
        </p>
        <p className="text-left">
          Expérience issue du <br className="hidden xl:block" />
          terrain mise à votre profit
        </p>
      </div>
      <div className="flex items-center gap-6 mx-auto w-full max-w-[360px]">
        <p className="font-finalsix text-6xl font-[900] text-white rounded-full w-16 h-16 shrink-0 flex items-center justify-center bg-[#1E1F3F]">
          3
        </p>
        <p className="text-left">
          Souplesse pour accompagner <br className="hidden xl:block" />
          les gestionnaires intermédiaires
        </p>
      </div>
    </div>
  );
}
