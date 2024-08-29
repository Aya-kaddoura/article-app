import axios from "axios";
import { useEffect, useState } from "react"
import Cookies from "universal-cookie";
import NavBar from "../../components/NavBar";
import ShowArtice from "./ShowArticle";
import { Link } from "react-router-dom";
export default function Articales(){
    const [articles,setArlicles] = useState([]);
    const [idArticle,setIdArticle] =useState("")
    const [showTheArticle,setShowTheArticle] = useState(false);
    
    
    const cookie = new Cookies();
    const getToken = cookie.get("Bearer");

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/product/show",{
            headers:{
                Accept: "application/json",
                Authorization: "Bearer " + getToken,
            },
        })
        .then((data) => {
            setArlicles(data.data);
        })
        .catch((err) => console.log(err))
    },[]);

    



    const showArticles = articles.map((article,index) => (
        <div key={index} className="px-3 col-10 col-lg-4">
            <div className="border rounded-4">
                <img src={`${article.image}`} className="card-img-top rounded-top-4" alt="..." style={{height:"200px"}}/>
                <div className="">
                    <h5 className="ms-3 my-3">{article.title}</h5>
                    <p className="overflow-hidden mx-3 text-black-50" style={{maxHeight:"100px"}}>{article.description}</p>
                    <a onClick={() => ( setIdArticle(article.id) , setShowTheArticle(true))} href="#" className="text-light text-decoration-none py-2 bg-main d-block m-3 text-center rounded-pill" style={{width:"100px"}}>Read More</a>
                </div>
            </div>
        </div>
    ))


    return(
        <div className=" position-relative">
            <NavBar />
            <div className="row container w-100 mx-auto row-gap-5 flex-wrap pt-5" style={{marginTop:"61px"}}>
                {showArticles}
            </div>
            {showTheArticle && <ShowArtice id={idArticle} onClose={() => setShowTheArticle(false)}/>}
        </div>
    )
}