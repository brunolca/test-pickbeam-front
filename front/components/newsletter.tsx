import { Squares } from "./svg";

export function Newsletter() {
  return (
    <section className="bg-primary-800 px-4 py-8 text-primary-800">
      <div className="m-auto mb-[68px] max-w-7xl">
        <div className="relative bg-primary-100 pt-[66px] pl-8 pr-[72px] pb-[100px] md:py-[200px] md:pr-16 md:pl-[15%]">
          <h2 className="text-[28px] font-bold">Notre newsletter</h2>
          <h3 className="text-sm">
            Recevez les études de cas exclusives de développement Web Jamstack
            (et bien plus) dans votre boîte mail !
          </h3>
          <form>
            <label className="flex flex-col py-4 lg:flex-row">
              <span className="hidden">Email</span>
              <input
                className="block w-full border border-primary-800 bg-primary-100 py-2 px-4 placeholder-primary-800 outline-none ring-0 md:inline-block"
                type="email"
                placeholder="Votre adresse email"
                required
              />
              <button
                className="mt-2 block w-full border border-primary-800 py-2 px-4 font-semibold outline-0 transition-colors hover:bg-black/10 md:mt-0 md:inline-block md:h-12 md:flex-1 md:px-6"
                title="S'INSCRIRE"
                type="submit"
              >
                S'INSCRIRE
              </button>
            </label>
          </form>
          <div className="absolute top-0 right-0 h-20 w-10 bg-primary-800 md:h-[130px] md:w-[65px]"></div>
          <div className="absolute top-0 right-10 h-10 w-10 bg-primary-400 md:top-[130px] md:right-[65px] md:h-[65px] md:w-[65px]"></div>
          <div className="absolute bottom-0 right-0 h-10 w-20 bg-primary-800 md:h-[65px] md:w-[180px]"></div>
          <Squares className="absolute bottom-2 left-2 h-[60px] w-[100px] text-primary-800" />
          <Squares className="absolute -bottom-[68px] left-2 h-[60px] w-[100px] -scale-y-100 text-primary-100" />
        </div>
      </div>
    </section>
  );
}
