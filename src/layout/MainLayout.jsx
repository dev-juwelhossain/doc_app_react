import { Outlet } from "react-router-dom";
import Home from "../pages/Home";


const MainLayout = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default MainLayout;