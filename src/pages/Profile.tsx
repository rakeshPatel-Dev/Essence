import axios from "axios";
import { BookHeart, BookOpenCheck, Edit, Quote, ShieldCheck, Verified } from "lucide-react"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {

  const [quotes, setQuotes] = useState([])
  console.log(quotes);

  const url = "https://dummyjson.com/quotes/random";

  const fetchQuotes = async () => {
    try {
      const res = await axios.get(url);
      setQuotes(res.data);
      // console.log(res.data.quotes);
    } catch (error) {
      console.error("Error fetching quotes: ", error);
    }
  }

  useEffect(() => {
    fetchQuotes();
  }, [])

  return (
    <div className=" bg-[#f4f3f1] dark:bg-[#191b1f]">
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Profile Header Section */}
        <div className="flex flex-col items-center mb-16">
          <div className="relative mb-6">
            <div className="w-40 h-40 rounded-full border-4 border-[#eecd2b] p-1 shadow-2xl">
              <div
                className="w-full h-full rounded-full bg-cover bg-center"
                data-alt="High resolution professional headshot of chef Julianne"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5lyyYA5l8Tn8cc486h5TqV6q0JFA_ofM_Anu3AJKRYZJdA4nc6x1y9Pl9B0hzPmociNkj11n3yY6AUFsAGoxvfdBCbRQc1I0zl6XLf4q0DfaRyWpuuQnOLjg1-K9_Xln_W5OJMTJ8oNQUd0xYzbdv9q6YbkaHJ8_R0-4PPNmuC9MBa9lv6xxB9MO78Rt_yxP6kc4xjSclGi38U55oIriGGRQajJdURqwTv7C5dt7nDzI6l2u0eDT_hH-RoVJ9Qk719fo2teo9hzrh")'
                }}
              />
            </div>
            <div className="absolute bottom-2 right-2 bg-[#eecd2b] text-[#191b1f] p-2 rounded-full flex items-center justify-center shadow-lg">
              <Verified className=" text-sm font-bold" />
            </div>
          </div>
          <div className="text-center mb-6">
            <h1 className="font-display text-4xl font-bold mb-2 tracking-tight">
              Julianne Sterling
            </h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              @jsterling • julianne.s@essence.com
            </p>
          </div>
          <div className="flex gap-4">
            <Link to="/user/setting">
              <button className="bg-[#eecd2b] hover:bg-[#eecd2b]/90 text-[#191b1f] font-bold py-2.5 px-8 rounded-lg transition-all shadow-md flex items-center cursor-pointer gap-2">
                <Edit className=" text-lg" />
                Edit Profile
              </button>
            </Link>
            <button className="bg-slate-200 dark:bg-[#2C2F33] hover:bg-slate-300 dark:hover:bg-border-dark text-slate-800 dark:text-white font-bold py-2.5 px-4 rounded-lg transition-all">
              <span className="material-symbols-outlined">share</span>
            </button>
          </div>
        </div>
        {/* Quote Section */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <div className="text-[#eecd2b]  mb-4">
            <Quote size={50} className=" text-4xl mx-auto opacity-50" />
          </div>
          <h3 className="font-display text-2xl italic text-slate-700 dark:text-slate-200 leading-relaxed px-4">
            "{quotes.quote}"
          </h3>
          <div className="w-16 h-1 bg-[#eecd2b]/30 mx-auto mt-6 rounded-full" />
        </div>
        {/* Kitchen Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white dark:bg-[#2C2F33] border border-slate-200 dark:border-border-dark p-8 rounded-xl flex flex-col items-center text-center transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-[#eecd2b]/10 rounded-full flex items-center justify-center text-[#eecd2b] mb-4">
              <ShieldCheck className=" text-2xl" />
            </div>
            <p className="font-display text-4xl font-bold mb-1">42</p>
            <p className="text-sm uppercase tracking-widest font-bold text-slate-400">
              Recipes Mastered
            </p>
          </div>
          <div className="bg-white dark:bg-[#2C2F33] border border-slate-200 dark:border-border-dark p-8 rounded-xl flex flex-col items-center text-center transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-[#eecd2b]/10 rounded-full flex items-center justify-center text-[#eecd2b] mb-4">
              <BookOpenCheck className=" text-2xl" />
            </div>
            <p className="font-display text-4xl font-bold mb-1">12</p>
            <p className="text-sm uppercase tracking-widest font-bold text-slate-400">
              Collections Created
            </p>
          </div>
          <div className="bg-white dark:bg-[#2C2F33] border border-slate-200 dark:border-border-dark p-8 rounded-xl flex flex-col items-center text-center transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-[#eecd2b]/10 rounded-full flex items-center justify-center text-[#eecd2b] mb-4">
              <BookHeart className="text-2xl" />
            </div>
            <p className="font-display text-4xl font-bold mb-1">158</p>
            <p className="text-sm uppercase tracking-widest font-bold text-slate-400">
              Total Saved
            </p>
          </div>
        </div>
        {/* Lower Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Culinary Tags */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#eecd2b]">label</span>
              <h4 className="font-display text-xl font-bold">Culinary Tags</h4>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="bg-[#eecd2b]/10 text-[#eecd2b] border border-[#eecd2b]/20 px-4 py-2 rounded-full text-sm font-bold hover:bg-[#eecd2b] hover:text-[#191b1f] cursor-pointer transition-colors">
                #PastryLover
              </span>
              <span className="bg-[#eecd2b]/10 text-[#eecd2b] border border-[#eecd2b]/20 px-4 py-2 rounded-full text-sm font-bold hover:bg-[#eecd2b] hover:text-[#191b1f] cursor-pointer transition-colors">
                #VeganChef
              </span>
              <span className="bg-[#eecd2b]/10 text-[#eecd2b] border border-[#eecd2b]/20 px-4 py-2 rounded-full text-sm font-bold hover:bg-[#eecd2b] hover:text-[#191b1f] cursor-pointer transition-colors">
                #SourdoughScience
              </span>
              <span className="bg-[#eecd2b]/10 text-[#eecd2b] border border-[#eecd2b]/20 px-4 py-2 rounded-full text-sm font-bold hover:bg-[#eecd2b] hover:text-[#191b1f] cursor-pointer transition-colors">
                #UmamiHunter
              </span>
              <span className="bg-[#eecd2b]/10 text-[#eecd2b] border border-[#eecd2b]/20 px-4 py-2 rounded-full text-sm font-bold hover:bg-[#eecd2b] hover:text-[#191b1f] cursor-pointer transition-colors">
                #FarmToTable
              </span>
              <span className="bg-[#eecd2b]/10 text-[#eecd2b] border border-[#eecd2b]/20 px-4 py-2 rounded-full text-sm font-bold hover:bg-[#eecd2b] hover:text-[#191b1f] cursor-pointer transition-colors">
                #SlowFood
              </span>
            </div>
          </div>
          {/* Appearance Theme Settings */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#eecd2b]">palette</span>
              <h4 className="font-display text-xl font-bold">Display Theme</h4>
            </div>
            <div className="flex p-1 bg-slate-200 dark:bg-[#2C2F33] border border-slate-300 dark:border-border-dark rounded-xl">
              <button className="flex-1 flex flex-col items-center gap-2 py-4 rounded-lg transition-all hover:bg-slate-300 dark:hover:bg-border-dark">
                <span className="material-symbols-outlined">light_mode</span>
                <span className="text-xs font-bold uppercase tracking-wider">
                  Light
                </span>
              </button>
              <button className="flex-1 flex flex-col items-center gap-2 py-4 rounded-lg bg-white dark:bg-border-dark shadow-sm border border-slate-200 dark:border-white/10 ring-2 ring-[#eecd2b]">
                <span className="material-symbols-outlined text-[#eecd2b]">
                  dark_mode
                </span>
                <span className="text-xs font-bold uppercase tracking-wider">
                  Dark
                </span>
              </button>
              <button className="flex-1 flex flex-col items-center gap-2 py-4 rounded-lg transition-all hover:bg-slate-300 dark:hover:bg-border-dark">
                <span className="material-symbols-outlined">settings_brightness</span>
                <span className="text-xs font-bold uppercase tracking-wider">
                  System
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Profile
