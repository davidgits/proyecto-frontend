import React from 'react'
import { Link } from 'react-router-dom'

export default function Pagination({ studsPerPage, totalStuds, paginate }) {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalStuds / studsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {/* <li className="page-item"><a className="page-link" href="#">Previous</a></li> */}
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <Link
                            onClick={() => paginate(number)}
                            className="page-link"
                            to="#"
                        >
                            {number}
                        </Link>
                    </li>
                ))}
                {/* <li className="page-item"><a className="page-link" href="#">Next</a></li> */}
            </ul>
        </nav>
    )
}
