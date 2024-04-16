import { PaginationButton, PaginationContent } from "../../Styles/UI-Components";

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      pageButtons.push(
        <PaginationButton
          key={i}
          onClick={() => handlePageChange(i)}
          className={i === currentPage ? 'active' : ''}
        >
          {i}
        </PaginationButton>
      );
    }
    return pageButtons;
  };

  return (
    <PaginationContent className="pagination">
      {renderPageButtons()}
    </PaginationContent>
  );
}
