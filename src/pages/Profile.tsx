import { logout } from "@/lib/auth";
import axios from "axios";
import { Edit, LogOut, MoreVertical, Palette, Quote, Share2, Tags, Verified } from "lucide-react"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/ui/theme-toggle";


const Profile = () => {

  const { user } = useAuth();
  const navigate = useNavigate();

  const [quotes, setQuotes] = useState([])

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

  const handleLogout = async () => {
    await logout();
    navigate("/login", { replace: true });
  };

  const placeholderChef = "https://imgs.search.brave.com/lhD1Ovn5gxDzqTfn5FvlGbLeUZDCYriKlDPh2PrfH7U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMx/NjY1OTM1L3ZlY3Rv/ci9jaGVmLWhhdC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/d0M0U0M5eWtZMTBK/RDJxdzdzLVBBeUVv/ZHNUTktES3Z4T0g4/eEFuY3NKdz0"

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
                  backgroundImage: `url(${user?.photoURL || placeholderChef})`
                }}
              />
            </div>
            <div className="absolute bottom-2 right-2 bg-[#eecd2b] text-[#191b1f] p-2 rounded-full flex items-center justify-center shadow-lg">
              <Verified className=" text-sm font-bold" />
            </div>
          </div>
          <div className="text-center mb-6">
            <h1 className="font-display text-4xl font-bold mb-2 tracking-tight">
              {user?.displayName || "Anonymous Chef"}
            </h1>

            <p className="text-slate-500 dark:text-slate-400 font-medium">
              @{user?.email?.split("@")[0]} • {user?.email}
            </p>

          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-4">

              {/* EDIT CTA */}
              <Link to="/">
                <button className="bg-[#eecd2b] hover:bg-[#eecd2b]/90 text-[#191b1f] font-bold py-2.5 px-8 rounded-lg transition-all shadow-md flex items-center cursor-pointer gap-2">
                  <Edit className="text-lg" />
                  Edit Profile
                </button>
              </Link>

              {/* ACTION MENU */}
              <DropdownMenu>
                <DropdownMenuTrigger className="bg-slate-200 dark:bg-[#2C2F33] hover:bg-slate-300 dark:hover:bg-border-dark text-slate-800 dark:text-white font-bold py-2.5 px-3 rounded-lg transition-all shadow-sm flex items-center">
                  <MoreVertical size={18} />
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="min-w-40">
                  <DropdownMenuItem className="flex items-center gap-2">
                    <Share2 size={16} />
                    Share
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem asChild>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 text-red-600 dark:text-red-400 w-full"
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        {/* Quote Section */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <div className="text-[#eecd2b]  mb-4">
            <Quote size={50} className=" text-4xl mx-auto opacity-50" />
          </div>
          <h3 className="font-display text-2xl italic text-slate-700 dark:text-slate-200 leading-relaxed px-4">
            "{quotes?.quote}"
          </h3>
          <div className="w-16 h-1 bg-[#eecd2b]/30 mx-auto mt-6 rounded-full" />
        </div>

        {/* Lower Content Section */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Culinary Tags */}
          <div className="space-y-6 w-3/12">
            <div className="flex items-center gap-3">
              < Tags className="text-[#eecd2b]" />
              <h4 className="font-display text-xl font-bold">Culinary Tags</h4>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="bg-[#eecd2b]/10 text-[#eecd2b] border border-[#eecd2b]/20 px-4 py-2 rounded-full text-sm font-bold hover:bg-[#eecd2b] hover:text-[#191b1f] cursor-pointer transition-colors">
                #PastryLover
              </span>
            </div>
          </div>
          {/* Appearance Theme Settings */}
          <div className="space-y-6 flex-1">
            <div className="flex items-center gap-3">
              < Palette className=" text-[#eecd2b]" />
              <h4 className="font-display text-xl font-bold">Display Theme</h4>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Profile
