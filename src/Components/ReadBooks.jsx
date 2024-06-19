import { useEffect, useState } from "react";
import { getBooks } from "../Utility/localStorage";
import BookCard from "./BookCard";

const ReadBooks = ({sortedBook}) => {

    
    const [books , setBooks] = useState([]);
    useEffect(() => {
        const savedBooks = getBooks()
        setBooks(savedBooks);
      }, [])
 
    

    
    return (
        <div>
            {
                !sortedBook ? books.map(book => <BookCard key={book.bookId} book = {book}></BookCard>) : Object.keys(sortedBook).map(book => <BookCard key={book.bookId} book = {book}></BookCard>) 
                
                
            }
            
        </div>
    );
};

export default ReadBooks;