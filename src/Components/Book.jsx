import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
    const {bookId} = book;
    return (
        <Link to={`/BookDetails/${bookId}`} className=" w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={book.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="space-y-4 p-5 items-center">
                <div className="flex gap-10">
                    <div className="px-3 py-1 border rounded-full bg-[#8916513d] border-[#891652]">
                        <h1 className="font-semibold text-[#891652]">{book.tags[0]}</h1>
                    </div>
                    <div className="px-3 py-1 border rounded-full bg-[#8916513d] border-[#891652]">
                        <h1 className="font-semibold  text-[#891652]">{book.tags[1]}</h1>
                    </div>
                </div>
                <h2 className="card-title text-2xl font-bold">{book.bookName}</h2>
                <p className="text-[#131313CC] text-lg">By : {book.author}</p>
                <div className="divider"></div>
                <div className="flex gap-5 justify-between">
                    <h4>{book.category}</h4>
                    <div className="flex gap-2 justify-center items-center">{book.rating} <FaRegStar /></div>
                </div>

            </div>
        </Link>

    );
};

export default Book;