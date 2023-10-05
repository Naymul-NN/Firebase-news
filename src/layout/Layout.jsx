import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <div className="w-[90%] mx-auto font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;