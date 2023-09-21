import '../styles/Pagination.css'

function Pagination({ currentPage, totalPages, onPageChange }) {

    const pageNumbers = []

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }

    return (
        <nav >
            <ul className='pagination'>
                {currentPage > 1 && (
                    <li className='page-item' >
                        <button onClick={() => onPageChange(currentPage - 1)}> &laquo; </button>
                    </li>
                )}
                {pageNumbers.map((number) => (
                    // <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                    //     <button onClick={() => onPageChange(number)}>{number}</button>
                    // </li>
                    <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`} >
                        <button onClick={() => onPageChange(number)}>{number}</button>
                    </li>
                ))}

                {currentPage < totalPages && (
                    <li className="page-item">
                        <button onClick={() => onPageChange(currentPage + 1)}>&raquo;</button>
                    </li>
                )}

            </ul>
        </nav>

    )

}

export default Pagination