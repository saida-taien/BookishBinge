import { Link, useLoaderData } from "react-router-dom";
import Book from "../Components/Book";

const Home = () => {
    const books = useLoaderData();
    return (
        <div>
            <section className="p-6 bg-[#FFEDD8]">
                <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                    <div className=" px-6 py-40 rounded-md sm:px-12 md:px-16 xl:col-span-2 lg:space-y-20 ">
                        <h1 className="text-5xl font-extrabold">BookishBinge: Where Every Page is a New Adventure</h1>

                        <Link to='/ListedBooks' type="button" className="btn  px-7 font-semibold rounded-2xl bg-[#891652]  text-white text-lg hover:bg-[#240A34] ">View the List</Link>

                    </div>
                    <img src='https://i.ibb.co/G5VqfxQ/1-hardcover-book-cover-mockup-Vol3-824x542.jpg' alt="" className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500 dark:bg-gray-500" />
                </div>

            </section>

            <div className="lg:mt-20 mt-10">
                <h1 className="text-5xl text-center font-bold">Books</h1>
                <div className="grid lg:grid-cols-3  grid-cols-1 gap-5 mx-auto container">
                    {
                        books.map((book) => <Book key={book.bookId} book = {book}></Book>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;