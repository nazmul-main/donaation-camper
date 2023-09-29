import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className=''>
           <Navbar className="max-w-screen-xl" ></Navbar>
           <Outlet></Outlet>

        </div>
    );
};

export default MainLayout;