import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout'
import Home from '../Pages/Home'
import ListedBooks from '../Pages/ListedBooks'
import PagesToRead from '../Pages/PagesToRead'
import BookDetails from '../Pages/BookDetails'
import ReadBooks from '../Components/ReadBooks'
import WishlistBooks from '../Components/WishlistBooks'
import ErrorPage from '../Components/ErrorPage'
import Profile from '../Pages/Profile'
import Feedback from '../Pages/Feedback'


export const router = createBrowserRouter([
    {
        path : '/',
        element: <MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : () => fetch('/data.json'),
            },
            {
                path:'/BookDetails/:bookId',
                element: <BookDetails></BookDetails>,
                loader : () => fetch('/data.json'),
            },
            {
                path : '/ListedBooks/*',
                element : <ListedBooks></ListedBooks>,
                children : [
                    {
                        index : true,
                        element : <ReadBooks ></ReadBooks>
                    },
                    {
                        path : 'WishListBooks',
                        element : <WishlistBooks></WishlistBooks>
                    }
                ]
            },
            {
                path: '/PagesToRead',
                element : <PagesToRead></PagesToRead>
            },
            {
                path : '/Profile',
                element : <Profile></Profile>
            },
            {
                path : '/Feedback',
                element: <Feedback></Feedback>
            }
        ]
    }
])