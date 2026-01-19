const Pagination = ({ page, totalPages, setPage }) => {
  return (
    <div className="flex gap-2 mt-10 justify-center">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`size-10 rounded-full font-bold ${page === i + 1
              ? "bg-primary text-white"
              : "border"
            }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
