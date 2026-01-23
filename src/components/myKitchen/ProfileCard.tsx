import { Edit, Mail, Share2, User } from 'lucide-react';

const ProfileCard = () => {
  const profileData = {
    name: 'Julianne Sterling',
    handle: '@jsterling_chef',
    email: 'julianne.s@culinaryart.com',
    bio: 'Home chef & culinary enthusiast specializing in French-Mediterranean fusion. Exploring the balance of texture and flavor in every season.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApdv80nyFEcnx-Y9wm3u4fmBhPSS-q15hVhTmHt0AeJuKLNxBX15nku-vme5ur26bGebTmDgIsuxkoOYEJ4Uts_q7ZRM5zdlvcQry0fquV2Q9z7PyKMJ-ueW2REU2Uo0Q510hHhVkkWwYzBzPGKnislIcp6dS2HMPJa7wCvR2Wgawh6-FLrx1PmCqe_Ucz6Rb37whcsk3cBJJ5q0PP3rnMvBcw210-6FeXxjKE4dSXE0-VXar9G1YM-e2-3HHVVEv8HqvBndDRUr0V'
  };

  return (
    <div className="flex  p-8 rounded-xl border border-[#d6e1db] dark:border-[#eecd2b]/20 bg-white/50 dark:bg-[#191b1f]/50 backdrop-blur-sm @container">
      <div className="flex w-full flex-col gap-8 @[720px]:flex-row @[720px]:justify-between @[720px]:items-start">
        <div className="flex flex-col @[520px]:flex-row gap-8 items-center @[520px]:items-start">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 ring-8 ring-[#eecd2b]/5"
            data-alt="Portrait of Julianne Sterling"
            style={{ backgroundImage: `url("${profileData.image}")` }}
          />
          <div className="flex flex-col justify-center text-center @[520px]:text-left">
            <h1 className="text-[#111814] dark:text-[#f9fbfa] text-4xl font-bold leading-tight tracking-tight font-display">
              {profileData.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center @[520px]:justify-start gap-x-4 gap-y-1 mt-1">
              <span className="text-[#eecd2b] font-medium flex items-center gap-1.5 text-sm">
                <User size={20} />
                {profileData.handle}
              </span>
              <span className="text-[#608573] flex items-center gap-1.5 text-sm">
                <Mail size={20} />
                {profileData.email}
              </span>
            </div>
            <p className="text-[#608573] dark:text-[#a0b3a9] text-base font-normal leading-relaxed max-w-xl mt-4 italic">
              {profileData.bio}
            </p>
          </div>
        </div>
        <div className="flex w-full max-w-120 gap-3 @[480px]:w-auto self-center @[720px]:self-start">
          <a
            className="flex min-w-35 cursor-pointer items-center justify-center rounded-lg h-11 px-6 bg-white dark:bg-[#eecd2b]/10 border border-[#d6e1db] dark:border-[#eecd2b]/20 text-[#111814] dark:text-[#f9fbfa] text-sm font-bold tracking-[0.015em] hover:bg-[#eaf0ed] transition-colors"
            href="#edit-profile-modal"
          >
            <Edit size={20} className="mr-2 text-lg" />
            <span>Edit Profile</span>
          </a>
          <button className="flex min-w-35 cursor-pointer items-center justify-center rounded-lg h-11 px-6 bg-[#eecd2b] text-[#f9fbfa] text-sm font-bold tracking-[0.015em] hover:opacity-90 transition-opacity">
            <Share2 size={20} className="material-symbols-outlined mr-2 text-lg" />
            <span>Share Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;