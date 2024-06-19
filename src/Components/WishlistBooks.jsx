import { useEffect, useState } from "react";
import { getWishBooks } from "../Utility/localStorage";
import BookCard from "./BookCard";

const WishlistBooks = () => {
    const [wishBook , setWishBook] = useState([]);
    useEffect(() =>
    {
        const wishBooks = getWishBooks();
        setWishBook( wishBooks);
    },[])
    // console.log(wishBook);
    return (
        <div>
        {
            wishBook.map(book => <BookCard key={book.bookId} book = {book}></BookCard>)
        }
    </div>
    );
};

export default WishlistBooks;