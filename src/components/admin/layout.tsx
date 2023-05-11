import Header from "./header";
import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Layout = ({children, title}:any) => {
    return (
        <>
            <Header title={title} />
            <Navbar />
            <Sidebar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;