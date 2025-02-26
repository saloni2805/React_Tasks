import { NavLink } from "react-router-dom"
import './App.css'

const NavBar = () => {
    // Used to redirecting or navigating to
    //  one component /page to another component without reloading of our web browser/page i.e SPA
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand mx-3" to="/logo">React Router</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center " id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" to="/">Home <span className="sr-only"></span></NavLink>
                    <NavLink className="nav-item nav-link" to="/about">About</NavLink>
                    <NavLink className="nav-item nav-link" to="/services">Services</NavLink>

                </div>
            </div>
        </nav>
    )
}

export default NavBar