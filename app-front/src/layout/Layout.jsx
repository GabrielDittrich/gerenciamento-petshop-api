import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

function Layout(props) {
    return (
        <div className="app-shell">
            <Header />
            <Nav />
            <main className="app-main">{props.children}</main>
            <Footer />
        </div>
    );
}

export default Layout;
