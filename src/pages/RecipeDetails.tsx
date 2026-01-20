import React from 'react'

const RecipeDetails = () => {
  return (
    <div className='bg-[#f4f2f1] dark:bg-[#191b1f] font-sans text-slate-900 dark:text-slate-100'>
      <main className="mx-auto w-full max-w-[1200px] flex-1 px-6 md:px-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Media & Core Info */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <div
                className="aspect-[4/3] w-full bg-cover bg-center transition-transform hover:scale-105 duration-700"
                data-alt="Close up of classic Margherita pizza with bubbling mozzarella and fresh basil"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCYERlZej6XGLE4ds1lCGXk7kz1bG5dlzOo24X0eJOVk7vB-pIeSlinw9-fVPq6UPUxIWN98ikxlyUMJm6xZxROkn6pOKwqhxB8OK0bFBIHB9s5qWGa6gaKr7ZvgLxwDNSAOW64mDm_9blBLgacYGE5cpyo50brrxD3N-BZYPS4vTq73V8ityelyfLyO6sLAS4kr5fcpU49aWrAIRpgSTWJzMU8-JeZi-25kpeVVtNqnEssK73GQvOVRJ99xyCW5S5F-3Ef0eLzCmzX")'
                }}
              ></div>
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#2c6e72]">
                  Editor's Choice
                </span>
              </div>
            </div>
            {/* Page Heading */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex-1 min-w-[300px]">
                  <h1 className="text-5xl font-black font-display leading-tight tracking-tight">
                    Classic Margherita Pizza
                  </h1>
                  <p className="mt-2 text-lg text-[#86675f] dark:text-[#b0948e] font-display italic">
                    A timeless Italian masterpiece with hand-crushed San Marzano
                    tomatoes and creamy buffalo mozzarella.
                  </p>
                </div>
              </div>
              {/* Rating & Chips */}
              <div className="flex flex-wrap items-center gap-6 py-4 border-y border-[#f0ebea] dark:border-[#2d2422]">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black text-[#2c6e72]">4.6</span>
                  <div className="flex text-[#2c6e72]">
                    <span className="material-symbols-outlined filled-icon text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined filled-icon text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined filled-icon text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined filled-icon text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg">
                      star_half
                    </span>
                  </div>
                  <span className="text-sm font-medium text-[#86675f]">
                    (98 reviews)
                  </span>
                </div>
                <div className="h-4 w-px bg-[#f0ebea] dark:bg-[#2d2422] hidden sm:block" />
                <div className="flex flex-wrap gap-2">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2c6e72]/10 text-[#2c6e72] text-xs font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-sm">speed</span>{" "}
                    Easy
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0ebea] dark:bg-[#2d2422] text-[#181211] dark:text-white text-xs font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-sm">
                      restaurant
                    </span>{" "}
                    Italian
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0ebea] dark:bg-[#2d2422] text-[#181211] dark:text-white text-xs font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-sm">
                      local_fire_department
                    </span>{" "}
                    300 kcal
                  </span>
                </div>
              </div>
            </div>
            {/* Quick Info Bar */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#f4f2f1] dark:bg-[#2d2422] border border-[#f0ebea] dark:border-[#3d3432]">
                <span className="material-symbols-outlined text-[#2c6e72] mb-1">
                  timer
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#86675f]">
                  Prep Time
                </span>
                <span className="text-lg font-bold">20 min</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#f4f2f1] dark:bg-[#2d2422] border border-[#f0ebea] dark:border-[#3d3432]">
                <span className="material-symbols-outlined text-[#2c6e72] mb-1">
                  cooking
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#86675f]">
                  Cook Time
                </span>
                <span className="text-lg font-bold">15 min</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#f4f2f1] dark:bg-[#2d2422] border border-[#f0ebea] dark:border-[#3d3432]">
                <span className="material-symbols-outlined text-[#2c6e72] mb-1">
                  group
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#86675f]">
                  Servings
                </span>
                <span className="text-lg font-bold">4 people</span>
              </div>
            </div>
            {/* Instructions */}
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-black font-display tracking-tight">
                Instructions
              </h3>
              <div className="flex flex-col gap-8">
                <div className="flex gap-6">
                  <span className="flex-shrink-0 size-10 flex items-center justify-center rounded-full bg-[#2c6e72] text-white font-black font-display italic shadow-lg shadow-[#2c6e72]/20">
                    1
                  </span>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-lg">Prepare the Dough</h4>
                    <p className="text-[#86675f] dark:text-[#b0948e] leading-relaxed font-display">
                      In a large bowl, mix 00 flour, yeast, and sea salt. Gradually
                      add lukewarm water and olive oil, kneading until a smooth,
                      elastic ball forms. Let it rise in a warm spot for at least 2
                      hours until doubled in size.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="flex-shrink-0 size-10 flex items-center justify-center rounded-full bg-[#2c6e72] text-white font-black font-display italic shadow-lg shadow-[#2c6e72]/20">
                    2
                  </span>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-lg">San Marzano Base</h4>
                    <p className="text-[#86675f] dark:text-[#b0948e] leading-relaxed font-display">
                      Hand-crush the San Marzano tomatoes in a bowl. Season with a
                      pinch of sea salt and a splash of extra virgin olive oil. Avoid
                      over-processing to keep the rustic texture of the tomatoes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="flex-shrink-0 size-10 flex items-center justify-center rounded-full bg-[#2c6e72] text-white font-black font-display italic shadow-lg shadow-[#2c6e72]/20">
                    3
                  </span>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-lg">Assembly &amp; Bake</h4>
                    <p className="text-[#86675f] dark:text-[#b0948e] leading-relaxed font-display">
                      Stretch the dough thinly on a floured surface. Spread a thin
                      layer of tomatoes, top with torn buffalo mozzarella, and a few
                      whole basil leaves. Bake at your oven's highest setting (ideally
                      500°F/260°C) for 12-15 minutes until the crust is charred and
                      cheese is bubbling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column: Ingredients & Actions */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Sticky Sidebar Content */}
            <div className="sticky top-24 flex flex-col gap-8">
              {/* Actions Card */}
              <div className="p-6 rounded-xl bg-white dark:bg-[#1d1615] shadow-xl border border-[#f0ebea] dark:border-[#2d2422]">
                <div className="flex flex-col gap-4">
                  <button className="w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-[#2c6e72] text-white font-bold transition-transform active:scale-95">
                    <span className="material-symbols-outlined">bookmark</span>
                    Save Recipe
                  </button>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-2 h-12 rounded-xl bg-[#f0ebea] dark:bg-[#2d2422] text-[#181211] dark:text-white font-bold hover:bg-[#e1d8d5] dark:hover:bg-[#3d3432]">
                      <span className="material-symbols-outlined">print</span>
                      Print
                    </button>
                    <button className="flex items-center justify-center gap-2 h-12 rounded-xl bg-[#f0ebea] dark:bg-[#2d2422] text-[#181211] dark:text-white font-bold hover:bg-[#e1d8d5] dark:hover:bg-[#3d3432]">
                      <span className="material-symbols-outlined">share</span>
                      Share
                    </button>
                  </div>
                </div>
              </div>
              {/* Ingredients Checklist */}
              <div className="p-8 rounded-xl bg-white dark:bg-[#1d1615] shadow-xl border border-[#f0ebea] dark:border-[#2d2422]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-black font-display">Ingredients</h3>
                  <button className="text-xs font-bold uppercase text-[#2c6e72] hover:underline">
                    Clear All
                  </button>
                </div>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-4 group cursor-pointer">
                    <input
                      className="size-5 rounded border-[#e1d8d5] text-[#2c6e72] focus:ring-[#2c6e72]"
                      type="checkbox"
                    />
                    <span className="flex-1 font-medium group-hover:text-[#2c6e72] transition-colors">
                      400g Tipo 00 Flour
                    </span>
                  </li>
                  <li className="flex items-center gap-4 group cursor-pointer">
                    <input
                      className="size-5 rounded border-[#e1d8d5] text-[#2c6e72] focus:ring-[#2c6e72]"
                      type="checkbox"
                    />
                    <span className="flex-1 font-medium group-hover:text-[#2c6e72] transition-colors">
                      1 can San Marzano Tomatoes
                    </span>
                  </li>
                  <li className="flex items-center gap-4 group cursor-pointer">
                    <input
                      className="size-5 rounded border-[#e1d8d5] text-[#2c6e72] focus:ring-[#2c6e72]"
                      type="checkbox"
                    />
                    <span className="flex-1 font-medium group-hover:text-[#2c6e72] transition-colors">
                      250g Buffalo Mozzarella
                    </span>
                  </li>
                  <li className="flex items-center gap-4 group cursor-pointer">
                    <input
                      className="size-5 rounded border-[#e1d8d5] text-[#2c6e72] focus:ring-[#2c6e72]"
                      type="checkbox"
                    />
                    <span className="flex-1 font-medium group-hover:text-[#2c6e72] transition-colors">
                      1 bunch Fresh Basil
                    </span>
                  </li>
                  <li className="flex items-center gap-4 group cursor-pointer">
                    <input
                      className="size-5 rounded border-[#e1d8d5] text-[#2c6e72] focus:ring-[#2c6e72]"
                      type="checkbox"
                    />
                    <span className="flex-1 font-medium group-hover:text-[#2c6e72] transition-colors">
                      Extra Virgin Olive Oil
                    </span>
                  </li>
                  <li className="flex items-center gap-4 group cursor-pointer">
                    <input
                      className="size-5 rounded border-[#e1d8d5] text-[#2c6e72] focus:ring-[#2c6e72]"
                      type="checkbox"
                    />
                    <span className="flex-1 font-medium group-hover:text-[#2c6e72] transition-colors">
                      7g Active Dry Yeast
                    </span>
                  </li>
                  <li className="flex items-center gap-4 group cursor-pointer">
                    <input
                      className="size-5 rounded border-[#e1d8d5] text-[#2c6e72] focus:ring-[#2c6e72]"
                      type="checkbox"
                    />
                    <span className="flex-1 font-medium group-hover:text-[#2c6e72] transition-colors">
                      1 tsp Sea Salt
                    </span>
                  </li>
                </ul>
                <button className="mt-8 w-full py-3 rounded-xl border-2 border-dashed border-[#e1d8d5] dark:border-[#3d3432] text-sm font-bold text-[#86675f] hover:border-[#2c6e72]/50 hover:text-[#2c6e72] transition-all">
                  + Add to Shopping List
                </button>
              </div>
              {/* Rating Summary */}
              <div className="p-6 rounded-xl bg-[#f0ebea] dark:bg-[#2d2422]">
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#86675f] mb-4">
                  Reviews
                </h4>
                <div className="grid grid-cols-[auto_1fr_40px] items-center gap-x-4 gap-y-2">
                  <span className="text-xs font-bold">5</span>
                  <div className="h-1.5 rounded-full bg-[#e1d8d5] overflow-hidden">
                    <div className="h-full bg-[#2c6e72]" style={{ width: "70%" }} />
                  </div>
                  <span className="text-[10px] text-right font-bold">70%</span>
                  <span className="text-xs font-bold">4</span>
                  <div className="h-1.5 rounded-full bg-[#e1d8d5] overflow-hidden">
                    <div className="h-full bg-[#2c6e72]" style={{ width: "20%" }} />
                  </div>
                  <span className="text-[10px] text-right font-bold">20%</span>
                  <span className="text-xs font-bold">3</span>
                  <div className="h-1.5 rounded-full bg-[#e1d8d5] overflow-hidden">
                    <div className="h-full bg-[#2c6e72]" style={{ width: "5%" }} />
                  </div>
                  <span className="text-[10px] text-right font-bold">5%</span>
                </div>
              </div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 px-2">
                <span className="text-xs font-bold text-[#86675f]">TAGS:</span>
                <a
                  className="text-xs font-bold text-[#2c6e72] hover:underline"
                  href="#"
                >
                  Pizza
                </a>
                <a
                  className="text-xs font-bold text-[#2c6e72] hover:underline"
                  href="#"
                >
                  Dinner
                </a>
                <a
                  className="text-xs font-bold text-[#2c6e72] hover:underline"
                  href="#"
                >
                  Vegetarian
                </a>
                <a
                  className="text-xs font-bold text-[#2c6e72] hover:underline"
                  href="#"
                >
                  Classic
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default RecipeDetails
