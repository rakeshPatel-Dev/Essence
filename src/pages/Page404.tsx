import { UtensilsCrossed, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="min-h-screen bg-[#f4f2f1] dark:bg-[#191b1f] text-slate-900 dark:text-slate-100 flex">
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-2xl w-full text-center flex flex-col items-center gap-10">

          {/* HEADER */}
          <div className="space-y-4">
            <span className="text-[#2c6e72] font-bold tracking-[0.25em] uppercase text-xs">
              Error 404
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black leading-tight">
              This dish isn’t on the menu.
            </h1>
          </div>

          {/* ICON VISUAL */}
          <div className="relative flex items-center justify-center">
            {/* Soft halo */}
            <div className="absolute inset-0 rounded-full bg-[#2c6e72]/10 dark:bg-[#2c6e72]/20 blur-3xl" />

            {/* Icon container */}
            <div className="relative z-10 size-40 sm:size-48 rounded-full border border-[#eaf0ed] dark:border-[#2c6e72]/20 flex items-center justify-center shadow-2xl bg-white/60 dark:bg-[#1d1615]/60 backdrop-blur">
              <UtensilsCrossed className="size-16 sm:size-20 text-[#2c6e72]" />
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="max-w-md space-y-6">
            <p className="text-base sm:text-lg text-[#608573] dark:text-[#8fb7a6] leading-relaxed italic">
              Our chefs searched the entire kitchen, but the page you’re looking for
              seems to have vanished. Maybe it was a secret recipe… or maybe the link
              is just broken.
            </p>

            {/* PRIMARY ACTION */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                to="/"
                className="px-8 py-4 bg-[#2c6e72] text-white text-sm font-bold rounded-xl shadow-xl shadow-[#2c6e72]/25 hover:scale-[1.03] transition-all flex items-center gap-2"
              >
                <ArrowLeft size={18} />
                Back to Home
              </Link>
            </div>

            {/* SECONDARY LINKS */}
            <div className="flex items-center justify-center gap-8 pt-6 border-t border-[#eaf0ed] dark:border-[#2c6e72]/15">
              <Link
                to="/all-recipes"
                className="text-sm font-bold text-[#2c6e72] hover:underline"
              >
                Taste Recipes
              </Link>
              <Link
                to="/my-kitchen"
                className="text-sm font-bold text-[#2c6e72] hover:underline"
              >
                My Kitchen
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page404;
