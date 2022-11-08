import "./Navbar.css";
import About from "../pages/AbouUs";
import Foryou from "../pages/ForYou";
function Navbar(){
    return(
        <>
        <nav className="navbar">
        <a href="About">ABOUT US</a>
        <a href="Foryou">FOR YOU</a>
        <a href="#">SERVICES</a>
        <a href="#">BLOG</a>
        <a href="#">VLOG</a>
        <a href="#">CONTACT</a>
        </nav>
        </>
    )
}
export default Navbar;