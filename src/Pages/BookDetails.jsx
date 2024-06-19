import { useLoaderData, useParams } from "react-router-dom";
import { deleteWishBook, getWishBooks, savBookForWishList, saveBook } from "../Utility/localStorage";

const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const idInt = parseInt(bookId);
    const book = books.find(book => book.bookId === idInt);
    const handleRead = book => {
        saveBook(book);
        const wishBook = getWishBooks();
        const isExist = wishBook.find(b => b.bookId === book.bookId)
        if (isExist) {
            const bookId = book.bookId;
            deleteWishBook(bookId);
        }

    }


    const handleWishList = book => {
        savBookForWishList(book);
    }

    return (
        <div>

            <section className=" p-6  container mx-auto">
                <div className="min-h-[calc(100vh-117px)] grid gap-6   lg:grid-cols-2 xl:grid-cols-5">

                    <img src={book.image} alt="" className=" rounded-md xl:col-span-2 " />

                    <div className="w-full px-6  rounded-md sm:px-12 md:px-16 xl:col-span-2 space-y-2">
                        <h1 className="text-4xl font-bold">{book.bookName}</h1>
                        <p>By : {book.author}</p>
                        <div className="divider"></div>
                        <p>{book.category}</p>
                        <div className="divider"></div>
                        <p><strong>Review : </strong>{book.review}</p>
                        <h1 ><strong className="flex gap-4  items-center">Tag
                            <div className="flex gap-10">
                                <div className="px-3 py-1 border rounded-full bg-[#8916513d] border-[#891652]">
                                    <h1 className="font-semibold text-[#891652]">{book.tags[0]}</h1>
                                </div>
                                <div className="px-3 py-1 border rounded-full bg-[#8916513d] border-[#891652]">
                                    <h1 className="font-semibold  text-[#891652]">{book.tags[1]}</h1>
                                </div>
                            </div> </strong></h1>
                        <div className="divider"></div>
                        <p>Number of pages : <strong>{book.totalPages}</strong></p>
                        <p>Publisher : <strong>{book.publisher}</strong></p>
                        <p>Year of Publishing : <strong>{book.yearOfPublishing}</strong></p>
                        <p>Rating : <strong>{book.rating}</strong></p>
                        <div className="flex gap-3">
                            <button onClick={() => handleRead(book)} type="button" className="btn py-2 font-semibold rounded-xl bg-[#891652] hover:bg-[#240A34] text-white">Read </button>
                            <button onClick={() => handleWishList(book)} type="button" className="btn py-2 font-semibold rounded-xl bg-[#240A34] hover:bg-[#891652] text-white">WishList </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookDetails;