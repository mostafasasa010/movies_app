import ReactPaginate from "react-paginate";

function Pagination({ getPage, total }) {
  const handlePageClick = (data) => {
    getPage(data.selected + 1);
  };

  const x = total + 500;
  const pageCount = total > 500 ? x - total : total;

  const top = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel={`التالي`}
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel="السابق"
      renderOnZeroPageCount={null}
      pageClassName="pagi-page"
      pageLinkClassName="page-link"
      breakClassName="break-page"
      breakLinkClassName="break-link"
      previousClassName="pre-page"
      previousLinkClassName="pre-link"
      nextClassName="next-page"
      nextLinkClassName="next-link"
      activeClassName="active-page"
      activeLinkClassName="active-link"
      onClick={top()}
    />
  );
}

export default Pagination;
