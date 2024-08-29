import { useContext, useState } from "react";
import NavBar from "../../../components/NavBar";
import "./SingUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { User } from "../Context/UserContext";

export default function SignUp(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [passwordR,setPasswordR] = useState("");
    const [accept,setAccept] = useState(false);
    const [fetchError,setFetchError] = useState("");
    const userNow = useContext(User);
    const nav = useNavigate();
    const cookie = new Cookies();

    async function submit(e) {
        e.preventDefault();
        setAccept(true);
        try{
            let res = await axios.post('https://pimaerm7.infinityfree.com/api/register',{
                name:name,
                email:email,
                password:password,
                password_confirmation: passwordR,
            })
            const token = res.data.data.token;
            const userDetails = res.data.data.user;
            userNow.setAuth({token,userDetails});
            cookie.set("Bearer", token);
            nav("/");
        }
        catch(err){
            setFetchError(err.response.status);
        }
    }
    return(
        <div className="imgBG d-flex align-items-center">
            <NavBar />
            <div className="row my-form w-100">
                <form onSubmit={submit} className=" d-flex ms-5 border justify-content-center flex-column p-4 rounded-4">
                    <label className=" text-light pt-3 pb-2" htmlFor="name">Name</label>
                    <input 
                        className="text-light fw-light border-0 border-bottom border-light" 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} />
                    {accept && name.length < 1 && <p className="fs-6 text-danger">Name is required</p> }

                    <label className=" text-light pt-3 pb-2" htmlFor="email">Email</label>
                    <input 
                        className="text-light fw-light border-0 border-bottom border-light" 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} required/>
                    {accept && fetchError === 422 && <p className="fs-6 text-danger">The email has already been taken </p>}

                    <label className=" text-light pt-3 pb-2" htmlFor="password">Password</label>
                    <input 
                        className="text-light fw-light border-0 border-bottom border-light" 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} />
                    {accept && password.length < 7 && <p className="fs-6 text-danger">the password should be longer</p>}

                    <label className=" text-light pt-3 pb-2" htmlFor="passwordR">Repeat Password</label>
                    <input 
                        className="text-light fw-light border-0 border-bottom border-light" 
                        type="password" 
                        id="passwordR" 
                        value={passwordR} 
                        onChange={(e) => setPasswordR(e.target.value)} />
                    {accept && password !== passwordR && <p className="fs-6 text-danger">password dosn't match</p>}

                    <button className="border-0 my-3 p-2 w-50 fw-medium rounded-pill mx-auto bg-light text-main" type="submit">Regester</button>
                </form>
            </div>
        </div>
    )
}