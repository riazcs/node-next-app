import React from 'react';

const Pagination = ({ currentPage, totalPages, perPage, totalEntries, onPageChange }) => {
    const startIndex = (currentPage - 1) * perPage + 1;
    const endIndex = Math.min(startIndex + perPage - 1, totalEntries);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
    return (

        <div className="row">
            <div className="col-sm-12 col-md-5">
                <div className="dataTables_info" id="example2_info" role="status" aria-live="polite">
                    Showing {startIndex} to {endIndex} of {totalEntries} entries
                </div>
            </div><div className="col-sm-12 col-md-7">
                <div className="dataTables_paginate paging_simple_numbers" id="example2_paginate">
                    <ul className="pagination">
                        <li className={currentPage === 1 ? "paginate_button page-item previous disabled" : "paginate_button page-item previous"}
                            id="example2_previous">
                            <a href="#" onClick={() => onPageChange(currentPage - 1)} aria-controls="example2" data-dt-idx="0"
                                className="page-link">Previous</a>
                        </li>
                        {pageNumbers.map(number => (
                            <li className={currentPage === number ? 'paginate_button page-item active' : 'paginate_button page-item'} key={number}>
                                <a href="#" onClick={() => onPageChange(number)} aria-controls="example2" data-dt-idx="1"
                                    className="page-link"> {number}</a>
                            </li>
                        ))}

                        <li className={currentPage === totalPages ? "paginate_button page-item next disabled" : " paginate_button page-item next"} id="example2_next">
                            <a href="#" onClick={() => onPageChange(currentPage + 1)} aria-controls="example2" data-dt-idx="7" className="page-link">Next
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>



    );
};

export default Pagination;
