import React from 'react'

const MyKitchen = () => {
  return (
    <div className='bg-[#f4f2f1] dark:bg-[#191b1f] font-sans text-slate-900 dark:text-slate-100'>
      {/* Main Content */}
      <main className="flex-1">
        {/* Page Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              My Kitchen
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-lg leading-relaxed">
              A curated collection of your most-loved flavors and future culinary
              experiments.
            </p>
          </div>
          <div className="w-full md:w-96">
            <div className="flex w-full items-stretch rounded-xl h-12 bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden group focus-within:ring-2 focus-within:ring-[#2c6e72] transition-all">
              <div className="flex items-center justify-center pl-4 text-slate-400 group-focus-within:text-[#2c6e72]">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                className="flex-1 border-none bg-transparent focus:ring-0 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm font-medium"
                placeholder="Search your bookmarks..."
                type="text"
              />
              <div className="flex items-center pr-2">
                <button className="p-1 text-slate-400 hover:text-slate-600">
                  <span className="material-symbols-outlined text-lg">tune</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Collections Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight">Collections</h2>
            <button className="text-[#2c6e72] text-sm font-bold flex items-center gap-1 hover:underline">
              View All{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Collection 1 */}
            <div className="folder-card p-6 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:translate-y-[-4px] transition-all cursor-pointer group dark:bg-slate-800">
              <div className="folder-tab border-t border-l border-r border-slate-200 dark:border-slate-800 dark:bg-slate-800" />
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600">
                  <span className="material-symbols-outlined text-3xl">
                    dinner_dining
                  </span>
                </div>
                <span className="text-xs font-bold text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
                  24 Recipes
                </span>
              </div>
              <h3 className="font-display text-xl font-bold mb-1">
                Weeknight Dinners
              </h3>
              <p className="text-sm text-slate-500 line-clamp-2">
                Quick, healthy, and satisfying meals for the busy work week.
              </p>
            </div>
            {/* Collection 2 */}
            <div className="folder-card p-6 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:translate-y-[-4px] transition-all cursor-pointer group dark:bg-slate-800">
              <div className="folder-tab border-t border-l border-r border-slate-200 dark:border-slate-800 dark:bg-slate-800" />
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600">
                  <span className="material-symbols-outlined text-3xl">eco</span>
                </div>
                <span className="text-xs font-bold text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
                  12 Recipes
                </span>
              </div>
              <h3 className="font-display text-xl font-bold mb-1">Healthy Eats</h3>
              <p className="text-sm text-slate-500 line-clamp-2">
                Low-carb and plant-based favorites that don't compromise flavor.
              </p>
            </div>
            {/* Collection 3 */}
            <div className="folder-card p-6 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:translate-y-[-4px] transition-all cursor-pointer group dark:bg-slate-800">
              <div className="folder-tab border-t border-l border-r border-slate-200 dark:border-slate-800 dark:bg-slate-800" />
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-pink-50 dark:bg-pink-900/20 flex items-center justify-center text-pink-600">
                  <span className="material-symbols-outlined text-3xl">
                    bakery_dining
                  </span>
                </div>
                <span className="text-xs font-bold text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
                  8 Recipes
                </span>
              </div>
              <h3 className="font-display text-xl font-bold mb-1">Desserts</h3>
              <p className="text-sm text-slate-500 line-clamp-2">
                Sweet treats and indulgent bakes for special occasions.
              </p>
            </div>
          </div>
        </section>
        {/* All Recipes Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight">All Saved Recipes</h2>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-sm">sort</span> Sort
                By
              </button>
              <button className="bg-[#2c6e72] text-white p-2 rounded-lg shadow-lg shadow-[#2c6e72]/20 hover:scale-105 transition-transform">
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Recipe Card 1 */}
            <div className="recipe-card group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className="size-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-110"
                  data-alt="Vibrant roasted vegetable salad bowl"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAcfvMUXKBsFNnL97Bg3oGNgI2817Ah84uVTdarTuIAQvQTfX99WKyBzHOO_n0Pr_N857CWT7xvm38YWhvLKdiyMDlRFvIRzkanlnLBh6pOCfH2LWlnIh-nHydASh3W4pDbtVGotZKgzU63CIokkOGELlEnXygoDV2wf320rGI9UE9P293GmQgkMnv-oj4nLhxnPrrOPb70rX2tOKVHitrPHIZrQFR9DSkUMKGF_3V5g1AtwfKp1Bw1Ds6nESu-ku-EIIK6OTXN52Vy")'
                  }}
                />
                <div className="recipe-card-overlay absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center gap-4">
                  <button className="w-12 h-12 rounded-full bg-white text-[#2c6e72] flex items-center justify-center hover:bg-[#2c6e72] hover:text-white transition-colors">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white text-accent-red flex items-center justify-center hover:bg-accent-red hover:text-white transition-colors">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2 py-1 rounded bg-white/90 backdrop-blur text-[10px] font-bold text-slate-800 tracking-tighter">
                    VEGAN
                  </span>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 mb-2">
                  <span className="flex items-center gap-1 uppercase tracking-wider">
                    <span className="material-symbols-outlined text-xs">
                      schedule
                    </span>{" "}
                    15 MIN
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="uppercase tracking-wider">320 CAL</span>
                </div>
                <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2 flex-1">
                  Mediterranean Roasted Rainbow Bowl
                </h4>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-1 text-[#2c6e72]">
                    <span className="material-symbols-outlined text-xs">star</span>
                    <span className="material-symbols-outlined text-xs">star</span>
                    <span className="material-symbols-outlined text-xs">star</span>
                    <span className="material-symbols-outlined text-xs">star</span>
                    <span className="material-symbols-outlined text-xs">
                      star_half
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-400">
                    4.8 (124)
                  </span>
                </div>
              </div>
            </div>
            {/* Recipe Card 2 */}
            <div className="recipe-card group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className="size-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-110"
                  data-alt="Classic Italian carbonara with pepper"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC0MxqEQTojp9nblSfiZevZF3K7J_MAufSJo78B4XoD19JDOn9Hbo6ndqCG4MQKPoRaBJ15K-fT3SEgBG5YsOK-4FvfN5drhsVbmv-ZSvnwIlr7O4ZNhJ8AcgEdWkDYz-HR-nwxxcXiUXg9A0uNNdKfI63s7zlc4TW3YNbcsaoRX10yEVy90u7Myk3MpWswMYIohfnM3blN8wUQtK4WrK_qvf5nCS47zozQUWk97kSYYdtu5Yv21tyy01l_yMkfwvX_JDSKy94MsaPs")'
                  }}
                />
                <div className="recipe-card-overlay absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center gap-4">
                  <button className="w-12 h-12 rounded-full bg-white text-[#2c6e72] flex items-center justify-center hover:bg-[#2c6e72] hover:text-white transition-colors">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white text-accent-red flex items-center justify-center hover:bg-accent-red hover:text-white transition-colors">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2 py-1 rounded bg-white/90 backdrop-blur text-[10px] font-bold text-slate-800 tracking-tighter uppercase">
                    Authentic
                  </span>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 mb-2">
                  <span className="flex items-center gap-1 uppercase tracking-wider">
                    <span className="material-symbols-outlined text-xs">
                      schedule
                    </span>{" "}
                    25 MIN
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="uppercase tracking-wider">650 CAL</span>
                </div>
                <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2 flex-1">
                  Guanciale &amp; Pecorino Carbonara
                </h4>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-1 text-[#2c6e72]">
                    <span className="material-symbols-outlined text-xs">star</span>
                    <span className="material-symbols-outlined text-xs">star</span>
                    <span className="material-symbols-outlined text-xs">star</span>
                    <span className="material-symbols-outlined text-xs">star</span>
                    <span className="material-symbols-outlined text-xs">star</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400">
                    5.0 (342)
                  </span>
                </div>
              </div>
            </div>
            {/* Recipe Card 3 */}
            <div className="recipe-card group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className="size-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-110"
                  data-alt="Stack of fluffy blueberry pancakes"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCoVkV7zipTl5Ux91XhGvnre0WcmBMz1uci2vmU1B-F6L8b2kPnuxv8T3lIhjbJVZRnZmnjvs9g5g85lVWOVnDIIThINsKQjznfiRpXXiKktN3MiV1oGOwq0dU9E6-BXJ2A3L27BwUiWEPPSemGinIvdaKiaH8fQfSP1mebOfmG-aJ1_M7WhmQyLOVX7Cl_iz7tRMIDzam82U_BEVE0kt2ZHknONtweRKKYch3dxcuXoOUKsuk7V6YFkQ2Fw9TwRX_tvQ2QFIFTeTcY")'
                  }}
                />
                <div className="recipe-card-overlay absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center gap-4">
                  <button className="w-12 h-12 rounded-full bg-white text-[#2c6e72] flex items-center justify-center hover:bg-[#2c6e72] hover:text-white transition-colors">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white text-accent-red flex items-center justify-center hover:bg-accent-red hover:text-white transition-colors">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 mb-2">
                  <span className="flex items-center gap-1 uppercase tracking-wider">
                    <span className="material-symbols-outlined text-xs">
                      schedule
                    </span>{" "}
                    30 MIN
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="uppercase tracking-wider">410 CAL</span>
                </div>
                <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2 flex-1">
                  Wild Blueberry Buttermilk Pancakes
                </h4>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-1 text-[#2c6e72]">
                    <span className="material-symbols-outlined text-xs">star</span>
                    <span className="material-symbols-outlined text-xs">star</span>
                    <span className="material-symbols-outlined text-xs">star</span>
                    <span className="material-symbols-outlined text-xs">star</span>
                    <span className="material-symbols-outlined text-xs">
                      star_outline
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-400">4.2 (89)</span>
                </div>
              </div>
            </div>
            {/* Recipe Card 4 */}
            <div className="recipe-card group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className="size-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-110"
                  data-alt="Spicy thai green curry bowl"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCRNINRq_9foiu0aLvE6sBp45BPaPec-yPEwacQ6AaXz8riYRY1ej7EC_TsfX8-DyAx_8uRF2emAtXav8qPF_pe-8aZzst_KcTfKMJMGSOlzpIBFNRv0YAqL1zNMm0d4WwXWqXhNQEQyHst9wkpqwDdrZIGaQMimlLcD_ye4lRKUWOHPBocEgE0TDM68LYpxw0NySYMhGRpLOALXblYSAN4jb6CyZNbWAy5c8Mywuz9XImBwWdAqZAmurWJg4lOiAqWpMIRWUoake1o")'
                  }}
                />
                <div className="recipe-card-overlay absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center gap-4">
                  <button className="w-12 h-12 rounded-full bg-white text-[#2c6e72] flex items-center justify-center hover:bg-[#2c6e72] hover:text-white transition-colors">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white text-accent-red flex items-center justify-center hover:bg-accent-red hover:text-white transition-colors">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2 py-1 rounded bg-white/90 backdrop-blur text-[10px] font-bold text-slate-800 tracking-tighter uppercase">
                    Spicy
                  </span>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 mb-2">
                  <span className="flex items-center gap-1 uppercase tracking-wider">
                    <span className="material-symbols-outlined text-xs">
                      schedule
                    </span>{" "}
                    45 MIN
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="uppercase tracking-wider">520 CAL</span>
                </div>
                <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2 flex-1">
                  Spicy Thai Green Curry with Tofu
                </h4>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-1 text-[#2c6e72]">
                    <span className="material-symbols-outlined text-xs">star</span>
                    <span className="material-symbols-outlined text-xs">star</span>
                    <span className="material-symbols-outlined text-xs">star</span>
                    <span className="material-symbols-outlined text-xs">star</span>
                    <span className="material-symbols-outlined text-xs">
                      star_half
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-400">
                    4.7 (215)
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Pagination / Load More */}
          <div className="mt-12 flex justify-center">
            <button className="px-8 py-3 bg-white dark:bg-slate-800 border-2 border-[#2c6e72] text-[#2c6e72] font-bold rounded-full hover:bg-[#2c6e72] hover:text-white transition-all transform hover:scale-105 active:scale-95">
              Load 12 More Recipes
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default MyKitchen
