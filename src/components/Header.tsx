import { useAuth } from "@/context/AuthContext";
import { ChefHat, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

const Header = () => {
  const headerData = [
    { label: "All Recipes", href: "/all-recipes" },
    { label: "My Kitchen", href: "/my-kitchen" },
  ];

  const { user } = useAuth();
  const userName = user?.displayName;
  const userImage = user?.photoURL;

  const placeholderChef =
    "https://imgs.search.brave.com/lhD1Ovn5gxDzqTfn5FvlGbLeUZDCYriKlDPh2PrfH7U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMx/NjY1OTM1L3ZlY3Rv/ci9jaGVmLWhhdC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/d0M0U0M5eWtZMTBK/RDJxdzdzLVBBeUVv/ZHNUTktES3Z4T0g4/eEFuY3NKdz0";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#eecd2b]/10 bg-[#f4f2f1]/80 dark:bg-[#191b1f]/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            {/* Left Section */}
            <div className="flex items-center gap-4 md:gap-12">
              <Link to="/">
                <div className="flex items-center gap-3 cursor-pointer">
                  <div className="bg-[#eecd2b] p-1.5 rounded-lg flex items-center justify-center">
                    <ChefHat />
                  </div>
                  <h1 className="font-display text-xl font-bold tracking-tight">
                    Essence
                  </h1>
                </div>
              </Link>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-8">
                {headerData.map((item, idx) => (
                  <Link
                    to={item.href}
                    key={idx}
                    className="text-sm font-medium hover:text-[#eecd2b] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Profile */}
              <Link to="/profile" className="hidden md:flex items-center gap-2">
                <div
                  className="size-8 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${userImage || placeholderChef})` }}
                />
                <span className="text-sm font-medium">
                  {userName || "Guest Chef"}
                </span>
              </Link>

              {/* Mobile Menu Trigger */}
              <Sheet>
                <SheetTrigger className="md:hidden">
                  <Menu size={22} />
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle className="text-lg font-semibold flex items-center gap-2">
                      <div
                        className="size-8 rounded-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${userImage || placeholderChef})` }}
                      />
                      {userName || "Guest Chef"}
                    </SheetTitle>
                  </SheetHeader>

                  <div className="mt-6 flex px-6 flex-col gap-4">
                    {headerData.map((item, idx) => (
                      <SheetClose asChild key={idx}>
                        <Link
                          to={item.href}
                          className="text-base border-b py-2 font-medium hover:text-[#eecd2b] bg-muted rounded px-4 transition-all"
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}

                    <SheetClose asChild>
                      <Link
                        to="/profile"
                        className="text-base border-b py-2 bg-muted rounded px-4 font-medium hover:text-[#eecd2b] transition-all"
                      >
                        Profile
                      </Link>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-15" />
    </>
  );
};

export default Header;
