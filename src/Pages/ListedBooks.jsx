import { useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { getBooks } from "../Utility/localStorage";
import ReadBooks from "../Components/ReadBooks";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const [sortedBook, setSortedBook] = useState([]);

    const handleSorting = command => {
        if (command === 'page') {
            const book = getBooks();
            const sortedBook = book.sort((a, b) => b.totalPages - a.totalPages);
            setSortedBook(sortedBook);
        }
        else if (command === 'yearOfPublishing') {
            const book = getBooks();
            const sortedBook = book.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setSortedBook(sortedBook);
        }
        else {
            const book = getBooks();
            const sortedBook = book.sort((a, b) => b.rating - a.rating);
            setSortedBook(sortedBook);
        }
    }

// console.log(sortedBook);



    return (
        <div>
            <div className="text-center rounded-xl bg-gray-200 my-10">
                <h1 className="text-4xl font-bold py-5">Books</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
                <details className="dropdown  my-5 ">
                    <summary className="m-1 btn bg-[#891652] text-white hover:bg-[#240A34]">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        {/* <li onClick={handleSortPage()}><a>sort by page</a></li> */}
                        <li><button onClick={() => handleSorting('page')}>Page</button></li>
                        <li><button onClick={() => handleSorting('rating')}>Rating</button></li>
                        <li><button onClick={() => handleSorting('publish')}>Publish Time</button></li>
                    </ul>
                </details>
            </div>
            <div className=' px-6 py-16 mx-auto space-y-12 overflow-hidden'>
                <article className='space-y-8 '>
                    <div className='space-y-6'>
                        <h1 className='text-4xl font-bold md:tracking-tight md:text-5xl'>

                        </h1>

                        <div className='flex flex-col items-start justify-between w-full md:flex-row md:items-center '>
                            <p className='text-sm'>

                            </p>
                            <p className='flex-shrink-0 mt-3 text-sm md:mt-0'>

                            </p>
                        </div>
                        <div className='flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap '>
                            <Link
                                to={``}
                                onClick={() => setTabIndex(0)}
                                className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'
                                    }  `}
                            >
                                <span>Read Books</span>
                            </Link>
                            <Link
                                to={`WishListBooks`}
                                onClick={() => setTabIndex(1)}
                                className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'
                                    }  `}
                            >
                                <span>Wishlist Books</span>
                            </Link>

                        </div>
                    </div>
                    <Routes>
                        <Route index={true} element={<ReadBooks sortedBook={sortedBook}></ReadBooks>}></Route>
                    </Routes>
                    <Outlet />
                </article>
            </div>
        </div>
    );
};

export default ListedBooks;