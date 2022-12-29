import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>;
};

export default Layout;
