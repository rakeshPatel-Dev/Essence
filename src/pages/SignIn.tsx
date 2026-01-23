import { ArrowRight, ChefHat, Lock } from 'lucide-react'
import { signInWithGoogle } from '@/lib/auth'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'

const SignIn = () => {

  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // 🚫 Block logged-in users
  if (!loading && user) {
    return <Navigate to="/profile" replace />;
  }

  const handleLogin = async () => {
    await signInWithGoogle();
    navigate("/profile", { replace: true });
  };

  return (
    <div>
      <div className="font-display bg-[#f4f3f1] dark:bg-[#191b1f] min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Layer: High-quality blurred kitchen scene */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f4f3f1]/40 dark:to-[#eecd2b]/10" />
        </div>
        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-120 px-6 py-12">
          {/* Authentication Card */}
          <div className=" rounded-xl border border-white/20 dark:border-white/5 shadow-2xl p-8 md:p-12 flex flex-col items-center">
            {/* Logo Section */}
            <div className="mb-8 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#eecd2b] rounded-full flex items-center justify-center mb-4 shadow-lg">
                <ChefHat className="text-white text-4xl" />
              </div>
              <h1 className="text-[#191b1f] dark:text-white tracking-tight text-[32px] font-bold leading-tight text-center">
                Essence
              </h1>
              <h2 className="text-[#191b1f]/70 dark:text-white/70 text-base font-normal leading-tight tracking-tight text-center mt-2">
                Discover Saved Premium Recipes in Your kitchen.
              </h2>
            </div>
            {/* [#eecd2b] CTA: Google Sign In */}
            <div className="w-full space-y-4">
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleLogin}
                  className="flex w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-lg h-14 px-6 bg-white dark:bg-white/10 text-[#1b190d] dark:text-white border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/20 transition-all duration-200 shadow-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  <span className="truncate font-semibold text-base">
                    Sign in with Google
                  </span>
                </button>
              </div>
              {/* Divider */}
              <div className="relative flex items-center justify-center py-4">
                <div className="grow border-t border-gray-200 dark:border-white/10" />
                <span className="px-4 text-[#191b1f]/40 dark:text-white/40 text-sm font-medium">
                  or
                </span>
                <div className="grow border-t border-gray-200 dark:border-white/10" />
              </div>
              {/* Secondary Action */}
              <div className="flex flex-col items-center">
                <Link to="/">
                  <button
                    className="group flex items-center gap-2 text-[#191b1f]/80 dark:text-white/80 hover:text-[#eecd2b] dark:hover:text-[#eecd2b] transition-colors text-base font-medium">
                    Continue as Guest
                    <ArrowRight className=" text-sm transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
            </div>
            {/* Footer / Trust Indicators */}
            <div className="mt-12 w-full pt-8 border-t border-gray-200 dark:border-white/10">
              <div className="flex items-center justify-center gap-2 text-[#191b1f]/40 dark:text-white/40 mb-4">
                <Lock size={20} className="material-symbols-outlined text-sm" />
                <span className="text-xs uppercase tracking-widest font-semibold">
                  Secure &amp; Encrypted
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-xs text-[#191b1f]/60 dark:text-white/40">
                <a className="hover:text-[#eecd2b] transition-colors" href="#">
                  Terms of Service
                </a>
                <span className="opacity-30">•</span>
                <a className="hover:text-[#eecd2b] transition-colors" href="#">
                  Privacy Policy
                </a>
                <span className="opacity-30">•</span>
                <a className="hover:text-[#eecd2b] transition-colors" href="#">
                  Help Center
                </a>
              </div>
            </div>
          </div>
          {/* Quote/Inspiration below card (Optional for desktop premium feel) */}
          <div className="mt-8 text-center hidden md:block">
            <p className="italic text-[#191b1f]/60 dark:text-white/60 text-sm">
              "Cooking is like love. It should be entered into with abandonment or not
              at all."
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SignIn
