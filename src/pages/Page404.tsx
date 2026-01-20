
const Page404 = () => {
  return (
    <div className="bg-[#f4f2f1] dark:bg-[#191b1f] font-sans text-slate-900 dark:text-slate-100">
      <main className="flex-grow flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full text-center flex flex-col items-center gap-8">
          <div className="space-y-4">
            <span className="text-[#2c6e72] font-bold tracking-[0.2em] uppercase text-xs">
              Error 404
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#111814] dark:text-[#f9fbfa]">
              Looks like this dish isn't on the menu.
            </h1>
          </div>
          <div className="relative w-full max-w-lg aspect-square">
            <div
              className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-90 dark:opacity-80 mix-blend-multiply dark:mix-blend-normal"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuApdv80nyFEcnx-Y9wm3u4fmBhPSS-q15hVhTmHt0AeJuKLNxBX15nku-vme5ur26bGebTmDgIsuxkoOYEJ4Uts_q7ZRM5zdlvcQry0fquV2Q9z7PyKMJ-ueW2REU2Uo0Q510hHhVkkWwYzBzPGKnislIcp6dS2HMPJa7wCvR2Wgawh6-FLrx1PmCqe_Ucz6Rb37whcsk3cBJJ5q0PP3rnMvBcw210-6FeXxjKE4dSXE0-VXar9G1YM-e2-3HHVVEv8HqvBndDRUr0V")',
                filter: "grayscale(0.2) contrast(1.1)",
                borderRadius: "50%"
              }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-4/5 h-4/5 rounded-full border border-[#eaf0ed] dark:border-[#2c6e72]/10 shadow-2xl" />
            </div>
          </div>
          <div className="max-w-md space-y-6">
            <p className="text-lg text-[#608573] dark:text-[#608573] leading-relaxed italic">
              Our chefs have searched every corner of the pantry, but the page you’re
              looking for seems to have been whisked away. Perhaps it was a secret
              recipe that was never meant to be found.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                className="px-8 py-4 bg-[#2c6e72] text-white text-sm font-bold rounded-lg shadow-xl shadow-[#2c6e72]/20 hover:scale-[1.02] transition-all flex items-center gap-2"
                href="/"
              >
                <span className="material-symbols-outlined text-base">
                  restaurant
                </span>
                Return to Kitchen
              </a>
            </div>
            <div className="flex items-center justify-center gap-8 pt-4 border-t border-[#eaf0ed] dark:border-[#2c6e72]/10">
              <a
                className="text-sm font-bold text-[#2c6e72] hover:underline flex items-center gap-1"
                href="#"
              >
                <span className="material-symbols-outlined text-sm">trending_up</span>
                Popular Recipes
              </a>
              <a
                className="text-sm font-bold text-[#2c6e72] hover:underline flex items-center gap-1"
                href="#"
              >
                <span className="material-symbols-outlined text-sm">search</span>
                Search
              </a>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Page404
