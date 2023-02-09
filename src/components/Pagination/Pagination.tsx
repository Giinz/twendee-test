import React from "react";
import "./Pagination.scss";
import { Link } from "react-router-dom";

type Props = {
  totalPosts: number;
  postsPerPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};
const Pagination = ({
  totalPosts,
  postsPerPage,
  currentPage,
  setCurrentPage,
}: Props) => {
  let pages = [];

  const changePage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <ul className="pagination">
      {pages.map((page: number, index: number) => {
        return (
          <Link
            to={`/${page}`}
            className={`pagination__btn ${
              page === currentPage ? "active" : ""
            }`}
            key={index}
            onClick={() => changePage(page)}
          >
            {page}
          </Link>
        );
      })}
    </ul>
  );
};

export default Pagination;
