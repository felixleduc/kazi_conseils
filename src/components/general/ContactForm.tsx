"use client";

export default function ContactForm() {
  return (
    <div className="rounded-4xl bg-white px-18 py-8 drop-shadow-xl max-w-[1060px] mx-auto">
      <div className="flex flex-col gap-2 items-center pb-12">
        <h3 className="font-finalsix text-[30px] font-bold">
          NAVIGUER ENTRE STRATÉGIE, EXÉCUTION ET HUMAIN.
        </h3>
        <p>Planifions votre consultation gratuite dès maintenant</p>
      </div>
      <form className="flex flex-col gap-10 items-center">
        <div className="flex gap-8 justify-between w-full">
          <div className="relative w-1/2">
            <input
              id="nom"
              type="text"
              placeholder="nom complet"
              className="
                peer w-full border-b-2 pb-[2px] border-[#1E1F3F]
                placeholder:text-xl placeholder:text-[#1E1F3F] placeholder:font-bold
                focus:outline-none focus:ring-0 focus:placeholder-transparent
              "
            />
            <label
              htmlFor="nom"
              className="
                absolute left-0 top-full mt-1 text-sm text-[#1E1F3F]
                opacity-0 -translate-y-1
                transition-all duration-200
                peer-focus:opacity-100 peer-focus:translate-y-0
                peer-[&:not(:placeholder-shown)]:opacity-100
                peer-[&:not(:placeholder-shown)]:translate-y-0
              "
            >
              nom complet
            </label>
          </div>
          <div className="relative w-1/2">
            <input
              id="email"
              type="email"
              placeholder="email"
              className="
                peer w-full border-b-2 pb-[2px] border-[#1E1F3F]
                placeholder:text-xl placeholder:text-[#1E1F3F] placeholder:font-bold
                focus:outline-none focus:ring-0 focus:placeholder-transparent
              "
            />
            <label
              htmlFor="email"
              className="
                absolute left-0 top-full mt-1 text-sm text-[#1E1F3F]
                opacity-0 -translate-y-1
                transition-all duration-200
                peer-focus:opacity-100 peer-focus:translate-y-0
                peer-[&:not(:placeholder-shown)]:opacity-100
                peer-[&:not(:placeholder-shown)]:translate-y-0
              "
            >
              email
            </label>
          </div>
        </div>
        <div className="relative w-full">
          <textarea
            id="message"
            rows={1}
            placeholder="message"
            className="
              peer w-full border-b-2 pb-2 border-[#1E1F3F]
              placeholder:text-xl placeholder:text-[#1E1F3F] placeholder:font-bold
              resize-none focus:outline-none focus:ring-0 focus:placeholder-transparent
            "
            onInput={(e: React.FormEvent<HTMLTextAreaElement>) => {
              const target = e.currentTarget;
              target.style.height = "auto";
              target.style.height = target.scrollHeight + "px";
            }}
          />
          <label
            htmlFor="message"
            className="
              absolute left-0 top-full mt-1 text-sm text-[#1E1F3F]
              opacity-0 -translate-y-1
              transition-all duration-200
              peer-focus:opacity-100 peer-focus:translate-y-0
              peer-[&:not(:placeholder-shown)]:opacity-100
              peer-[&:not(:placeholder-shown)]:translate-y-0
            "
          >
            message
          </label>
        </div>
        <button className="w-fit border-[1px] border-[#1E1F3F] rounded-4xl py-2 px-20 hover:scale-[102%] hover:border-[#DBE7F6] hover:bg-[#DBE7F6] hover:cursor-pointer transition-transform duration-100">
          Envoyer
        </button>
      </form>
    </div>
  );
}
