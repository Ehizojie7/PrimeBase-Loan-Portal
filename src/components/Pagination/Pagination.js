export const Pagination = ({ currentPage, itemsPerPage, totalItems, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevPage = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="flex items-center justify-center mt-5 gap-3">
      <button
        className="bg-[blue] text-white w-[130px] p-3 text-center rounded-[10px]"
        onClick={handlePrevPage}
        disabled={currentPage === 1 && true}>
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="bg-[blue] text-white w-[130px] p-3 text-center rounded-[10px]"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};
