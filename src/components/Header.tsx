import { ChefHat } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () => {

  const headerData = [
    { label: "All Recipes", href: "/all-recipes" },
    { label: "Categories", href: "/categories" },
    { label: "My Kitchen", href: "/my-kitchen" },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#eecd2b]/10 bg-[#f4f2f1]/80 dark:bg-[#191b1f]/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-12">
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
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 pl-6">
                <Link to="/profile">
                  <button className="flex items-center cursor-pointer gap-2">
                    <div
                      className="size-8 rounded-full bg-cover bg-center"
                      data-alt="User profile avatar portrait"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCRw14TUKxb5rImR90Doh8et0b2uLr4z-RLudcrKixkvruEHu7NPL2km0T_PBKx4BO_rVfFyChmZuDgLjWJiLw1LRnUs2oxspNhhUKderDDFff2vbOqKjzxZZ8ty2udQowx5PGOf6M_xBKRa_kdvOp9pYC2dELelW9lSbiwHai-aSfnjD2wmsAhrE8prmKrczgNYej4auq4y3Dq675WFMcHQ7Y6VUz_Qat-e02ORmeq2n5zAXqJbmj1JmOM902KVDRG5lOClfZWTdiw")'
                      }}
                    />
                    <span className="hidden lg:block text-sm font-medium">
                      Rakesh Patel
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Add padding to prevent content from hiding under fixed nav */}
      <div className="pt-15" />
    </>
  )
}

export default Header