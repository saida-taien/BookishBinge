import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="navbar bg-base-100 shadow-lg px-4 sm:px-8 fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'text-primary font-bold' : 'font-bold'
                            }
                            to='/'
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'text-primary font-bold' : 'font-bold'
                            }
                            to='/ListedBooks'
                        >
                            Listed Book
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'text-primary font-bold' : 'font-bold'
                            }
                            to='/PagesToRead'
                        >
                            Pages to Read
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'text-primary font-bold' : 'font-bold'
                            }
                            to='/Profile'
                        >
                            Profile
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'text-primary font-bold' : 'font-bold'
                            }
                            to='/Feedback'
                        >
                            Feedback
                        </NavLink>
                    </ul>
                </div>
                <Link
                    to='/'
                    className='btn btn-ghost gap-0 text-[#240A34] normal-case text-2xl font-bold'
                >
                    Bookish<span className='text-[#891652]'>Binge</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 ml-6">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ?'text-[#891652] border border-[#891652]  rounded-xl font-bold text-center' : 'font-bold'
                        }
                        to='/'
                    >
                        <span className="p-10 text-xl">Home</span>
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'text-[#891652] border border-[#891652]  rounded-xl font-bold text-center' : 'font-bold'
                        }
                        to='/ListedBooks'
                    >
                        <span className="p-10 text-xl">Listed Books</span>
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'text-[#891652] border border-[#891652]  rounded-xl font-bold text-center' : 'font-bold'
                        }
                        to='/PagesToRead'
                    >
                        <span className="p-10 text-xl">Pages to Read</span>
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'text-[#891652] border border-[#891652]  rounded-xl font-bold text-center' : 'font-bold'
                        }
                        to='/Profile'
                    >
                        <span className="p-10 text-xl">Profile</span>
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'text-[#891652] border border-[#891652]  rounded-xl font-bold text-center' : 'font-bold'
                        }
                        to='/Feedback'
                    >
                        <span className="p-10 text-xl">Feedback</span>
                    </NavLink>
                    
                </ul>
            </div>
            <div className="navbar-end flex gap-5">
                <a className="btn bg-[#891652] text-white p-4">Sign in </a>
                <a className="btn bg-[#240A34] text-white p-4">Sign up</a>
            </div>
        </div>
    );
};

export default Nav;