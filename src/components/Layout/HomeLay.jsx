import Header from "../Nav/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const HomeLay = () => {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    );
    }

export default HomeLay;