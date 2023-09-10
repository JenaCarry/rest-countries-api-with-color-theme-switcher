import { CountriesProps } from "@/types";
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

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <li key={i}>
          <button
            onClick={() => onPageChange(i)}
            className={`px-3.5 py-1 rounded-lg shadow-md ${
              i === currentPage ? "bg-elements" : ""
            }`}
          >
            {i}
          </button>
        </li>
      );
    }
    return buttons;
  };

  return (
    <ul className="flex justify-center gap-2 pb-12">
      {renderPaginationButtons()}
    </ul>
  );
}
