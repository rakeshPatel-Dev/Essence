import { Share2 } from "lucide-react";

export const ShareButton = ({ title }: any) => {
  const handleShare = async () => {
    const shareData = {
      title,
      text: `Check out this recipe: ${title}`,
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert("Link copied to clipboard");
      }
    } catch (err) {
      console.error("Share failed:", err);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center justify-center gap-2 h-12 rounded-xl bg-[#f0ebea] dark:bg-[#2d2422] font-bold hover:opacity-90"
    >
      <Share2 size={18} />
      Share
    </button>
  );
};
