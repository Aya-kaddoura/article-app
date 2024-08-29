import { useState } from "react";
import NavBar from "../../components/NavBar";
import "./WriteArticle.css"
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function WriteArticles(){
    const [title,setTitle] = useState("");
    const [story,setStory] = useState("");
    const [image,setImage] = useState("");
    const [accept,setAccept] = useState(false);
    const cookie = new Cookies();
    const token = cookie.get("Bearer");
    const nav = useNavigate();
    const formData = new FormData();
    console.log(image);

    async function submit(e) {
        e.preventDefault();
        setAccept(true);
        try{
            formData.append("title",title);
            formData.append("description",story);
            formData.append("image",image);

            await axios.post("http://127.0.0.1:8000/api/product/create",
                    formData,
                {
                    headers:{
                        Authorization: "Bearer " + token
                    }
                }
            );
            nav("/articles")
        }
        catch(err){
            console.log(err);
        }
    }

    return(
        <div>
            <NavBar />
            <div className="write d-flex align-items-center text-light" style={{width:"100vw",height:"100vh"}}>
                <div className="write-form border p-5 ms-5">
                    <h1 className="mb-3">You Can Start Now</h1>
                    <form onSubmit={submit} className="d-flex flex-column">
                        <label>Title</label>
                        <input 
                            className="mb-2 border-0 border-bottom border-light text-white-50 fw-light" 
                            type="text" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)}/>
                        {accept && title.length <1 && <p className="fw-light text-danger">You should add title</p>}

                        <label>Write Your Story</label>
                        <textarea 
                            className="mb-2 border-0 border-bottom border-light text-white-50 fw-light" 
                            rows="4" 
                            value={story} 
                            onChange={(e) => setStory(e.target.value)}/>

                        <label className="mt-2" htmlFor="img">You Can Add Image</label>
                        <input 
                            className="mb-2 border-0 border-bottom border-light text-white-50"
                            id="img" 
                            type="file" 
                            value={formData.image} 
                            onChange={(e) => setImage(e.target.files.item(0))} 
                        />
                        <button type="submit" className=" border-0 w-50 mx-auto p-2 rounded-pill bg-main text-light mt-4">Create Article</button>
                    </form>
                </div>
            </div>
        </div>
    )
}