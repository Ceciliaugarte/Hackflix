function Pages({ page, setPage, totalPages }) {
  const generatePageNumbers = () => {
    const pagesButtons = [];

    if (page > 1) {
      pagesButtons.push(
        <li key={page - 1} className="page-item">
          <button className="page-link" onClick={() => setPage(page - 1)}>
            {page - 1}
          </button>
        </li>
      );
    }

    pagesButtons.push(
      <li key={page} className="page-item">
        <button className={`page-link active`} onClick={() => setPage(page)}>
          {page}
        </button>
      </li>
    );

    if (page < totalPages) {
      pagesButtons.push(
        <li key={page + 1} className="page-item">
          <button className="page-link" onClick={() => setPage(page + 1)}>
            {page + 1}
          </button>
        </li>
      );
    }

    return pagesButtons;
  };
  generatePageNumbers();
  return (
    <div className="mt-5">
      <div aria-label="Page navigation example">
        <ul className="pagination justify-content-center ">
          <li className="page-item">
            <button
              className="page-link"
              aria-label="Previous"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          {generatePageNumbers()}
          <li className="page-item">
            <button
              className="page-link"
              aria-label="Next"
              onClick={() => setPage(page + 1)}
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pages;
