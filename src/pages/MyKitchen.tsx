import {
  ArrowUpDown,
  Clock,
  Heart,
  Plus,
  Search,
  Utensils,
  UtensilsCrossed
} from "lucide-react"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Button } from "@/components/ui/button"
import ProfileCard from "@/components/myKitchen/ProfileCard";


interface CardProps {
  icon: any;
  value: string;
  label: string;
  desc: string;
}

const MyKitchen = () => {
  const hasRecipes = false // demo toggle

  return (
    <div className="bg-[#f4f2f1] dark:bg-[#191b1f] min-h-screen text-slate-900 dark:text-slate-100">
      <main className="max-w-7xl mx-auto pt-6 px-4">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              My Kitchen
            </h1>
            <p className="text-slate-500 dark:text-slate-400 max-w-lg">
              Your personal space for saved recipes and cooking inspiration.
            </p>
          </div>

          {/* SEARCH */}
          <div className="w-full md:w-80">
            <div className="flex items-center h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus-within:ring-2 focus-within:ring-[#eecd2b]">
              <Search className="ml-4 text-slate-400" />
              <input
                placeholder="Search saved recipes..."
                className="flex-1 px-3 bg-transparent text-sm focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Profile card */}
        <div className=" my-4">
          <h2 className="text-2xl font-bold mb-4">Profile Info</h2>
          <ProfileCard />
        </div>

        {/* STATS (MEANINGFUL) */}
        <section className=" mt-10">
          <h2 className="text-2xl font-bold mb-4">Kitchen Stats</h2>

          <div className="grid grid-cols-2 items-center justify-center md:grid-cols-3 gap-4 mb-14">

            <StatCard label="Saved Recipes" value="20" desc="kjfd fdakjf fdsakjf fasdjf dsaf fd fjaskf ffds fafdsafdfsd fsafdfafd fas" icon={<Utensils />} />
            <StatCard label="Favorites" value="20" desc="kjfd fdakjf fdsakjf fasdjf dsaf fd fjaskf ffds fafdsafdfsd fsafdfafd fas" icon={<Heart />} />
            <StatCard label="Avg Cook Time" value="20" desc="kjfd fdakjf fdsakjf fasdjf dsaf fd fjaskf ffds fafdsafdfsd fsafdfafd fas" icon={<Clock />} />
          </div>
        </section>

        {/* ALL RECIPES */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">All Saved Recipes</h2>

            <div className="flex items-center gap-2">
              <Button className="flex items-center gap-2 px-4 py-2 text-sm border rounded-lg">
                <ArrowUpDown size={16} />
                Sort
              </Button>
              <Button className="bg-[#eecd2b] text-white p-2 rounded-lg shadow-lg shadow-[#eecd2b]/20">
                <Plus size={18} />
              </Button>
            </div>
          </div>

          {/* EMPTY STATE */}
          {!hasRecipes && (
            <div className="py-20">
              <Empty>
                <EmptyHeader>
                  <EmptyMedia variant="icon" className=" size-15">
                    <UtensilsCrossed className=" text-[#eecd2b] size-8" />
                  </EmptyMedia>
                  <EmptyTitle>No saved recipes yet</EmptyTitle>
                  <EmptyDescription>
                    Start building your kitchen by saving recipes you love.
                  </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                  <Button className=" font-semibold">
                    Explore Recipes
                  </Button>
                </EmptyContent>
              </Empty>
            </div>
          )}

          {/* DEMO CARD (ONLY ONE, SIMPLE) */}
          {hasRecipes && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 hover:shadow-lg transition">
                <div className="aspect-4/3 rounded-lg bg-slate-100 dark:bg-slate-700 mb-4" />
                <h3 className="font-bold text-lg mb-1">
                  Classic Margherita Pizza
                </h3>
                <p className="text-sm text-slate-500 mb-3">
                  Simple, authentic Italian comfort food.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#eecd2b] font-semibold">
                    30 min
                  </span>
                  <Heart className="size-4 text-slate-400" />
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

export default MyKitchen

/* ---------------- HELPERS ---------------- */

const StatCard = ({ label, value, icon, desc }: CardProps) => (
  <div className="folder-card p-6 shadow-sm border transition-all rounded-xl bg-[#eecd2b]/10">
    <div className="flex items-start justify-between mb-4">
      <div className="w-12 h-12 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600">
        {icon}
      </div>
      <span className="text-xs font-bold text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
        {value}
      </span>
    </div>
    <h3 className="font-display text-xl font-bold mb-1">{label}</h3>
    <p className="text-sm text-slate-500 line-clamp-2">
      {desc}
    </p>
  </div>

)
