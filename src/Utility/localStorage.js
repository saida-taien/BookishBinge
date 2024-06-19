// import { useState } from 'react'
import toast from 'react-hot-toast'

export const getBooks = () => {
  let Books = []
  const storedBooks = localStorage.getItem('Books')
  if (storedBooks) {
    Books = JSON.parse(storedBooks)
  }
  return Books
}
export const saveBook = book => {
  let Books = getBooks()
  const isExist = Books.find(b => b.bookId === book.bookId)
  if (isExist) {
    return toast.error('Already read!')
  }
  Books.push(book)
  localStorage.setItem('Books', JSON.stringify(Books))
  toast.success('Read Successfully!')
}

export const savBookForWishList = book => {


let wish = getWishBooks();
  const isExistWish = wish.find(b => b.bookId === book.bookId)
  if (isExistWish) {
    return toast.error('Already added in wishList');
  }




  let Books = getBooks()
  const isExist = Books.find(b => b.bookId === book.bookId)
  if (isExist) {
    return toast.error('Already read!')
  }
  const wishBooks = getWishBooks()
  wishBooks.push(book);
  localStorage.setItem('wish', JSON.stringify(wishBooks))
  toast.success('Added to wishlist')
  // console.log(Books);
}



export const getWishBooks = () => {
  let Books = []
  const storedBooks = localStorage.getItem('wish')
  if (storedBooks) {
    Books = JSON.parse(storedBooks)
  }
  return Books
}




export const deleteWishBook = bookId => {
  let Books = getWishBooks()
  const remaining = Books.filter(b => b.bookId !== bookId)
  localStorage.setItem('wish', JSON.stringify(remaining))
  toast.success('book Removed from wishlist!')
}




