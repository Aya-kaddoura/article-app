import axios from 'axios';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
export default function ShowArtices({onClose,...props}){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [image,setImage] = useState("");
    const cookie = new Cookies();
    const getToken = cookie.get("Bearer");
        useEffect(()=>{
            axios.get(`http://127.0.0.1:8000/api/product/showbyid/${props.id}`,{
                headers:{
                    Accept: "application/json",
                    Authorization: "Bearer " + getToken,
                },
            })
            .then((data)=>{
                setTitle(data.data[0].title);
                setDescription(data.data[0].description);
                setImage(data.data[0].image);
            })
        },[]);



    return(
        
        <div className="d-flex justify-content-center align-items-center position-absolute border-0 top-0" style={{backdropFilter:"blur(55px)"}}>
            <button onClick={onClose} className=' position-absolute opacity-100 fw-medium border-0' style={{top:"50px",right:"25vw"}}><X /></button>
            <div className="px-3 col-10 col-lg-5 opacity-100 mt-5">
                <div className="border-0 rounded-4">
                    <img src={`${image}`} className="card-img-top rounded-top-4" alt="..." />
                    <div className="bg-dark bg-gradient text-light rounded-bottom-4">
                        <h5 className="ms-3 py-3 fs-3">{title}</h5>
                        <p className=" fw-light lh-lg overflow-hidden mx-3 py-3">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}