import { GrLocation } from "react-icons/gr";
import { IoPeople } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";
const BookCard = ({ book }) => {
    return (
        <div className=" max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 text-white">
            <div rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full  lg:grid lg:grid-cols-12 bg-[#240A34]">
                <img src={book.image} alt="" className=" h-64 rounded sm:h-96 lg:col-span-4 bg-gray-500" />
                <div className="p-6 space-y-2 lg:col-span-8">
                    <h3 className="text-2xl font-semibold sm:text-3xl ">{book.bookName}</h3>
                    <span className="text-sm text-gray-400">By : {book.author}</span>
                    <p className="text-sm " ><strong className="flex gap-4  items-center">Tag
                        <div className="flex gap-3">
                            <div className="px-3 py-1 border rounded-full bg-[#8916513d] border-[#891652]">
                                <h1 className="font-semibold text-white">{book.tags[0]}</h1>
                            </div>
                            <div className="px-3 py-1 border rounded-full bg-[#8916513d] border-[#891652]">
                                <h1 className="font-semibold  text-white">{book.tags[1]}</h1>
                            </div>
                            <div className="flex gap-1">
                            <GrLocation /> <h4>Year of Publishing : {book.yearOfPublishing}</h4>
                            </div>
                        </div> </strong></p>
                        <div className="flex gap-3">
                            <div className="flex gap-2 items-center justify-center"><IoPeople /> <h4>Publisher : {book.publisher}</h4></div>
                            <div className="flex gap-2 items-center justify-center"><MdOutlineContactPage /> <h4>Page : {book.totalPages}</h4></div>
                        </div>
                    <div className="divider"></div>
                    <div className="flex gap-3">
                        <div className="px-3 py-1 border rounded-full bg-[#8916513d] border-[#891652]"><h2 className=" text-white">Category : {book.category}</h2></div>
                        <div className="px-3 py-1 border rounded-full bg-[#8916513d] border-[#891652]"><h2 className=" text-white">Rating : {book.rating}</h2></div>
                        
                        <div><Link to={`/BookDetails/${book.bookId}`} type="button" className="btn py-2 font-semibold rounded-xl bg-[#240A34] hover:bg-[#891652] text-white">View Details </Link></div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>

        </div>

    );
};

export default BookCard;