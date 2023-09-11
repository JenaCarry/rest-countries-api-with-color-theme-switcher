import {
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

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

  let maxLeft = currentPage - Math.floor(3 / 2);
  let maxRight = currentPage + Math.floor(3 / 2);
  if (maxLeft < 1) {
    maxLeft = 1;
    maxRight = 3;
  }
  if (maxRight > totalPages) {
    maxLeft = totalPages - (3 - 1);
    maxRight = totalPages;
    if (maxLeft < 1) maxLeft = 1;
  }

  const items = new Array();
  for (let i = maxLeft; i <= maxRight; i++) {
    items.push(i);
  }

  function previousPage() {
    if (hasPrev) {
      onPageChange(currentPage - 1);
      window.scrollTo(0, 0);
    }
    if (currentPage > totalPages) {
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
    <ul className="flex items-center justify-center gap-2 pb-12 font-extrabold">
      <li className="hidden sm:block">
        <button
          className={`buttonPagination bg-elements ${
            !hasPrev
              ? "disabled:bg-elements disabled:text-primary-text disabled:opacity-50"
              : null
          }`}
          onClick={() => onPageChange(1)}
          disabled={!hasPrev}
        >
          <FaAngleDoubleLeft className="text-lg" />
        </button>
      </li>
      <li>
        <button
          className={`buttonPagination bg-elements ${
            !hasPrev
              ? "disabled:bg-elements disabled:text-primary-text disabled:opacity-50"
              : null
          }`}
          onClick={previousPage}
          disabled={!hasPrev}
        >
          <FaAngleLeft className="text-lg" />
        </button>
      </li>

      {items.map((item) => (
        <li key={item}>
          <button
            className={`buttonPagination bg-elements ${
              item === currentPage ? "bg-input-text text-white" : null
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
        <button
          className={`buttonPagination bg-elements ${
            !hasNext
              ? "disabled:bg-elements disabled:text-primary-text disabled:opacity-50"
              : null
          }`}
          onClick={nextPage}
          disabled={!hasNext}
        >
          <FaAngleRight className="text-lg" />
        </button>
      </li>
      <li className="hidden sm:block">
        <button
          className={`buttonPagination bg-elements ${
            !hasNext
              ? "disabled:bg-elements disabled:text-primary-text disabled:opacity-50"
              : null
          }`}
          onClick={() => onPageChange(totalPages)}
          disabled={!hasNext}
        >
          <FaAngleDoubleRight className="text-lg" />
        </button>
      </li>
    </ul>
  );
}
