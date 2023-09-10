import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;
  const items = new Array();
  for (let i = 1; i <= totalPages; i++) {
    items.push(i);
  }

  function previousPage() {
    if (hasPrev) {
      onPageChange(currentPage - 1);
      window.scrollTo(0, 0);
    }
  }

  function nextPage() {
    if (hasNext) {
      onPageChange(currentPage + 1);
      window.scrollTo(0, 0);
    }
  }

  return (
    <ul className="flex items-center justify-center gap-2 pb-12">
      <li>
        <button className="buttonPagination bg-elements" onClick={previousPage}>
          <FaAngleLeft className="text-lg" />
        </button>
      </li>
      {items.map((item) => (
        <li key={item}>
          <button
            className={`buttonPagination bg-elements ${
              item === currentPage ? "bg-input-text" : null
            }`}
            onClick={() => {
              onPageChange(item);
              item !== currentPage ? window.scrollTo(0, 0) : null;
            }}
          >
            {item}
          </button>
        </li>
      ))}
      <li>
        <button className="buttonPagination bg-elements" onClick={nextPage}>
          <FaAngleRight className="text-lg" />
        </button>
      </li>
    </ul>
  );
}
