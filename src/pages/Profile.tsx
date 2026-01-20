import React from 'react'

const Profile = () => {
  return (
    <div className='bg-[#f4f2f1] dark:bg-[#191b1f] font-sans text-slate-900 dark:text-slate-100'>
      <main className="max-w-[1200px] mx-auto w-full px-6 py-10">
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-3xl font-bold font-display">Settings</h1>
          <p className="text-[#608573] text-sm">
            Manage your account preferences and public profile
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-3">
            <nav className="flex flex-col gap-1">
              <a
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#2c6e72]/5 text-[#2c6e72] font-bold transition-all"
                href="#"
              >
                <span className="material-symbols-outlined">person</span>
                <span className="text-sm">Public Profile</span>
              </a>
              <a
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#608573] hover:bg-[#2c6e72]/5 hover:text-[#2c6e72] transition-all"
                href="#"
              >
                <span className="material-symbols-outlined">manage_accounts</span>
                <span className="text-sm">Account Settings</span>
              </a>
              <a
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#608573] hover:bg-[#2c6e72]/5 hover:text-[#2c6e72] transition-all"
                href="#"
              >
                <span className="material-symbols-outlined">tune</span>
                <span className="text-sm">Preferences</span>
              </a>
              <a
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#608573] hover:bg-[#2c6e72]/5 hover:text-[#2c6e72] transition-all"
                href="#"
              >
                <span className="material-symbols-outlined">security</span>
                <span className="text-sm">Security</span>
              </a>
            </nav>
          </aside>
          <div className="lg:col-span-9 flex flex-col gap-10">
            <section className="flex flex-col gap-6">
              <h3 className="text-xl font-bold font-display border-b border-[#eaf0ed] dark:border-[#2c6e72]/20 pb-4">
                Profile Information
              </h3>
              <div className="flex items-center gap-8">
                <div className="relative group">
                  <div
                    className="w-24 h-24 rounded-full bg-center bg-cover bg-no-repeat ring-4 ring-[#2c6e72]/10 group-hover:opacity-80 transition-opacity"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuApdv80nyFEcnx-Y9wm3u4fmBhPSS-q15hVhTmHt0AeJuKLNxBX15nku-vme5ur26bGebTmDgIsuxkoOYEJ4Uts_q7ZRM5zdlvcQry0fquV2Q9z7PyKMJ-ueW2REU2Uo0Q510hHhVkkWwYzBzPGKnislIcp6dS2HMPJa7wCvR2Wgawh6-FLrx1PmCqe_Ucz6Rb37whcsk3cBJJ5q0PP3rnMvBcw210-6FeXxjKE4dSXE0-VXar9G1YM-e2-3HHVVEv8HqvBndDRUr0V")'
                    }}
                  />
                  <button className="absolute bottom-0 right-0 bg-[#2c6e72] text-white p-1.5 rounded-full shadow-lg border-2 border-white dark:border-[#191b1f]">
                    <span className="material-symbols-outlined text-sm">
                      photo_camera
                    </span>
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-[#2c6e72] text-white text-xs font-bold rounded-lg hover:opacity-90 transition-opacity">
                      Upload New Photo
                    </button>
                    <button className="px-4 py-2 border border-[#d6e1db] dark:border-[#2c6e72]/20 text-[#608573] text-xs font-bold rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                      Remove
                    </button>
                  </div>
                  <p className="text-[10px] text-[#608573] uppercase tracking-wider">
                    JPG, GIF or PNG. Max size 2MB.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#111814] dark:text-[#f9fbfa]">
                    Display Name
                  </label>
                  <input
                    className="form-input rounded-lg bg-transparent border-[#d6e1db] dark:border-[#2c6e72]/20 focus:ring-1 focus:ring-[#2c6e72] focus:border-[#2c6e72] text-sm p-3"
                    type="text"
                    defaultValue="Julianne Sterling"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#111814] dark:text-[#f9fbfa]">
                    Location
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#608573] text-lg">
                      location_on
                    </span>
                    <input
                      className="form-input w-full rounded-lg bg-transparent border-[#d6e1db] dark:border-[#2c6e72]/20 focus:ring-1 focus:ring-[#2c6e72] focus:border-[#2c6e72] text-sm p-3 pl-10"
                      type="text"
                      defaultValue="San Francisco, CA"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-bold text-[#111814] dark:text-[#f9fbfa]">
                    Short Bio
                  </label>
                  <textarea
                    className="form-input rounded-lg bg-transparent border-[#d6e1db] dark:border-[#2c6e72]/20 focus:ring-1 focus:ring-[#2c6e72] focus:border-[#2c6e72] text-sm p-3"
                    rows={3}
                    defaultValue={
                      "Home chef & culinary enthusiast specializing in French-Mediterranean fusion. Exploring the balance of texture and flavor in every season."
                    }
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-bold text-[#111814] dark:text-[#f9fbfa]">
                    Culinary Specialties
                  </label>
                  <input
                    className="form-input rounded-lg bg-transparent border-[#d6e1db] dark:border-[#2c6e72]/20 focus:ring-1 focus:ring-[#2c6e72] focus:border-[#2c6e72] text-sm p-3"
                    type="text"
                    defaultValue="French Pastries, Mediterranean Grills, Sourdough"
                  />
                  <p className="text-xs text-[#608573] italic">
                    Comma-separated tags for your profile specialties.
                  </p>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-6">
              <h3 className="text-xl font-bold font-display border-b border-[#eaf0ed] dark:border-[#2c6e72]/20 pb-4">
                Social Media Presence
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#111814] dark:text-[#f9fbfa]">
                    Instagram
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-[#d6e1db] dark:border-[#2c6e72]/20 bg-gray-50 dark:bg-[#2c6e72]/10 text-[#608573] text-sm">
                      @
                    </span>
                    <input
                      className="form-input flex-1 rounded-r-lg bg-transparent border-[#d6e1db] dark:border-[#2c6e72]/20 focus:ring-1 focus:ring-[#2c6e72] focus:border-[#2c6e72] text-sm p-3"
                      type="text"
                      defaultValue="jules_cooks"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#111814] dark:text-[#f9fbfa]">
                    Personal Website
                  </label>
                  <input
                    className="form-input rounded-lg bg-transparent border-[#d6e1db] dark:border-[#2c6e72]/20 focus:ring-1 focus:ring-[#2c6e72] focus:border-[#2c6e72] text-sm p-3"
                    placeholder="https://yourwebsite.com"
                    type="url"
                  />
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-6 p-8 bg-[#2c6e72]/5 rounded-xl border border-[#2c6e72]/10">
              <div>
                <h3 className="text-xl font-bold font-display mb-1">
                  Cooking Preferences
                </h3>
                <p className="text-sm text-[#608573]">
                  We'll tailor your recipe discovery based on these choices.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-sm font-bold mb-4">Dietary Restrictions</p>
                  <div className="flex flex-wrap gap-2">
                    <label className="cursor-pointer">
                      <input
                        defaultChecked=""
                        className="hidden peer"
                        type="checkbox"
                      />
                      <span className="px-4 py-2 rounded-full border border-[#d6e1db] dark:border-[#2c6e72]/20 text-sm peer-checked:bg-[#2c6e72] peer-checked:text-white peer-checked:border-[#2c6e72] transition-all inline-block">
                        Vegetarian
                      </span>
                    </label>
                    <label className="cursor-pointer">
                      <input className="hidden peer" type="checkbox" />
                      <span className="px-4 py-2 rounded-full border border-[#d6e1db] dark:border-[#2c6e72]/20 text-sm peer-checked:bg-[#2c6e72] peer-checked:text-white peer-checked:border-[#2c6e72] transition-all inline-block">
                        Vegan
                      </span>
                    </label>
                    <label className="cursor-pointer">
                      <input
                        defaultChecked=""
                        className="hidden peer"
                        type="checkbox"
                      />
                      <span className="px-4 py-2 rounded-full border border-[#d6e1db] dark:border-[#2c6e72]/20 text-sm peer-checked:bg-[#2c6e72] peer-checked:text-white peer-checked:border-[#2c6e72] transition-all inline-block">
                        Gluten-Free
                      </span>
                    </label>
                    <label className="cursor-pointer">
                      <input className="hidden peer" type="checkbox" />
                      <span className="px-4 py-2 rounded-full border border-[#d6e1db] dark:border-[#2c6e72]/20 text-sm peer-checked:bg-[#2c6e72] peer-checked:text-white peer-checked:border-[#2c6e72] transition-all inline-block">
                        Keto
                      </span>
                    </label>
                    <label className="cursor-pointer">
                      <input className="hidden peer" type="checkbox" />
                      <span className="px-4 py-2 rounded-full border border-[#d6e1db] dark:border-[#2c6e72]/20 text-sm peer-checked:bg-[#2c6e72] peer-checked:text-white peer-checked:border-[#2c6e72] transition-all inline-block">
                        Paleo
                      </span>
                    </label>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold mb-4">Favorite Cuisines</p>
                  <div className="flex flex-wrap gap-2">
                    <label className="cursor-pointer">
                      <input
                        defaultChecked=""
                        className="hidden peer"
                        type="checkbox"
                      />
                      <span className="px-4 py-2 rounded-full border border-[#d6e1db] dark:border-[#2c6e72]/20 text-sm peer-checked:bg-[#2c6e72] peer-checked:text-white peer-checked:border-[#2c6e72] transition-all inline-block">
                        French
                      </span>
                    </label>
                    <label className="cursor-pointer">
                      <input
                        defaultChecked=""
                        className="hidden peer"
                        type="checkbox"
                      />
                      <span className="px-4 py-2 rounded-full border border-[#d6e1db] dark:border-[#2c6e72]/20 text-sm peer-checked:bg-[#2c6e72] peer-checked:text-white peer-checked:border-[#2c6e72] transition-all inline-block">
                        Italian
                      </span>
                    </label>
                    <label className="cursor-pointer">
                      <input
                        defaultChecked=""
                        className="hidden peer"
                        type="checkbox"
                      />
                      <span className="px-4 py-2 rounded-full border border-[#d6e1db] dark:border-[#2c6e72]/20 text-sm peer-checked:bg-[#2c6e72] peer-checked:text-white peer-checked:border-[#2c6e72] transition-all inline-block">
                        Japanese
                      </span>
                    </label>
                    <label className="cursor-pointer">
                      <input className="hidden peer" type="checkbox" />
                      <span className="px-4 py-2 rounded-full border border-[#d6e1db] dark:border-[#2c6e72]/20 text-sm peer-checked:bg-[#2c6e72] peer-checked:text-white peer-checked:border-[#2c6e72] transition-all inline-block">
                        Mexican
                      </span>
                    </label>
                    <label className="cursor-pointer">
                      <input className="hidden peer" type="checkbox" />
                      <span className="px-4 py-2 rounded-full border border-[#d6e1db] dark:border-[#2c6e72]/20 text-sm peer-checked:bg-[#2c6e72] peer-checked:text-white peer-checked:border-[#2c6e72] transition-all inline-block">
                        Thai
                      </span>
                    </label>
                    <label className="cursor-pointer">
                      <input className="hidden peer" type="checkbox" />
                      <span className="px-4 py-2 rounded-full border border-[#d6e1db] dark:border-[#2c6e72]/20 text-sm peer-checked:bg-[#2c6e72] peer-checked:text-white peer-checked:border-[#2c6e72] transition-all inline-block">
                        Mediterranean
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </section>
            <div className="flex items-center justify-end gap-4 border-t border-[#eaf0ed] dark:border-[#2c6e72]/20 pt-8">
              <button className="px-6 py-3 text-sm font-bold text-[#608573] hover:text-[#111814] transition-colors">
                Discard Changes
              </button>
              <button className="px-8 py-3 bg-[#2c6e72] text-white text-sm font-bold rounded-lg shadow-lg shadow-[#2c6e72]/20 hover:opacity-90 transition-all">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Profile
