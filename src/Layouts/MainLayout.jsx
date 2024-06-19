import Footer from '../Components/Footer';
import Nav from '../Components/Nav';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            <div className='h-16'>
                <Nav />
            </div>
            <div className='min-h-[calc(100vh-117px)]'>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default MainLayout;