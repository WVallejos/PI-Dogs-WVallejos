import { useDispatch } from 'react-redux';
import '../styles/Pagination.css'
import { changePage } from '../redux/action-creators';

function Pagination({ currentPage, totalPages, onPageChange }) {
    const dispatch = useDispatch()
    const pageNumbers = []

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }

    const handlePageChange = (pageNumber) => {
        dispatch(changePage(pageNumber))
      };

    return (
        <nav >
            <ul className='pagination'>
                {currentPage > 1 && (
                    <li className='page-item' >
                        <button onClick={() => handlePageChange(currentPage - 1)}> &laquo; </button>
                    </li>
                )}
                {pageNumbers.map((number) => (
                    <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`} >
                        <button onClick={() => handlePageChange(number)}>{number}</button>
                    </li>
                ))}

                {currentPage < totalPages && (
                    <li className="page-item">
                        <button onClick={() => handlePageChange(currentPage + 1)}>&raquo;</button>
                    </li>
                )}

            </ul>
        </nav>

    )

}

export default Pagination