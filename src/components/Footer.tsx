import { ChefHat } from 'lucide-react'

const Footer = () => {
  return (
    <div className='bg-[#f4f2f1] dark:bg-[#191b1f] text-slate-900 dark:text-slate-100 transition-colors duration-300'>
      <footer className="border-t border-neutral-800 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-[#eecd2b] p-1 rounded-lg">
                  <ChefHat />
                </div>
                <h2 className="font-display text-xl font-bold tracking-tight">
                  Essence
                </h2>
              </div>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm">
                The premium recipe finder designed for effortless discovery. Explore curated collections, save your favorites, and plan delicious meals with ease.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold">Explore</h4>
              <ul className="space-y-2 text-slate-500 dark:text-slate-400 text-sm">
                <li>
                  <a className="hover:text-[#eecd2b] transition-colors" href="#">
                    Featured Chefs
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#eecd2b] transition-colors" href="#">
                    Seasonal Guides
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#eecd2b] transition-colors" href="#">
                    Cooking Techniques
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#eecd2b] transition-colors" href="#">
                    Wine Pairings
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold">Company</h4>
              <ul className="space-y-2 text-slate-500 dark:text-slate-400 text-sm">
                <li>
                  <a className="hover:text-[#eecd2b] transition-colors" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#eecd2b] transition-colors" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#eecd2b] transition-colors" href="#">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#eecd2b] transition-colors" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500 uppercase tracking-widest">
            <p>© 2024 Epicure Recipe Finder. All Rights Reserved.</p>
            <div  >
              <p>Created by:{" "}
                <a
                  target='_blank'
                  rel='noopener noreferer'
                  title='Developer link'
                  href="https://rakeshthedev.vercel.app"
                  className=' hover:underline decoration-2 hover:text-[#eecd2b] transition-all underline-offset-2  '
                >Rakesh Patel</a>
              </p>
            </div>
            <div className="flex gap-6">
              <a className="hover:text-[#eecd2b]" href="#">
                Instagram
              </a>
              <a className="hover:text-[#eecd2b]" href="#">
                Pinterest
              </a>
              <a className="hover:text-[#eecd2b]" href="#">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
