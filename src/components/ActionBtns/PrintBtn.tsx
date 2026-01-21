import { Printer } from "lucide-react";

export const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="flex items-center justify-center gap-2 h-12 rounded-xl bg-[#f0ebea] dark:bg-[#2d2422] font-bold hover:opacity-90"
    >
      <Printer size={18} />
      Print
    </button>
  );
};
