import Cookies from "universal-cookie";
import "./NavBar.css";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
export default function NavBar(){
    const cookie = new Cookies();
    const token = cookie.get("Bearer");
    const nav = useNavigate();
    async function handlLogOut(){
        await axios.post("http://127.0.0.1:8000/api/logout",null,{
            headers:{
                Authorization: "Bearer " + token,
            },
        });
        cookie.remove("Bearer");
        nav('/');
        window.location.reload();
    } 
    return(
        <div className="navbar p-0 justify-content-center z-3 navbar-expand-lg fixed-top">
            <div className="container-fluid p-2">
                <a className="navbar-brand text-light fw-medium fs-4" href="#">Articles</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <i className="nav-item mx-1">
                            <Link className=" nav-link text-light fs-5 mx-2 " to="/">Home</Link>
                        </i>
                        {!token ? (
                            <>
                                <i className="nav-item mx-1 auth-btn bg-main rounded-pill">
                                    <Link className=" nav-link text-light fs-5 mx-2" to="/login">Log In</Link>
                                </i>
                                <i className="nav-item mx-1 auth-btn bg-main rounded-pill">
                                    <Link className=" nav-link text-light fs-5 mx-2" to="/register">Sing Up</Link>
                                </i>
                            </>
                        ):(
                            <>
                                <i className="nav-item mx-1">
                                    <Link className=" nav-link text-light fs-5 mx-2 " to="/articles">Read Articles</Link>
                                </i>
                                <i className="nav-item mx-1">
                                    <Link className=" nav-link text-light fs-5 mx-2 " to="/writeArticles">Write Articles</Link>
                                </i>
                                <i className="nav-item mx-1 auth-btn bg-main rounded-pill">
                                    <Link className=" nav-link text-light fs-5 mx-2" onClick={handlLogOut}>Log Out</Link>
                                </i>
                            </>
                        )

                        }
                    </ul>
                </div>
            </div>
        </div>



    )
}