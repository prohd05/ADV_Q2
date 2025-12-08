// There are 3 parts for this kind of lab.
// 1. Usage of useState hook to create a state that holds image objects
// 2. Usage of useEffect hook to fetch images from given url
// 3. Rendering the images using .map() function

import {useState, useEffect} from 'react';
function FRQLab(){
//1.
    const [id, setID]=useState(102);
    const [image, setImages]=useState()

    function rng(){
        setID(parseInt(Math.random() * (206 - 102 + 1))+ 102);
    }
//2. UseEffect has 3 parts. arrow function, cleanup and dependency array

    useEffect(
        ()=>{
            async function loadImage(){
                const response = await fetch("https://picsum.photos/v2/list?page=2&limit=100")
                const data= await response.json();
            }
            loadImage();
        },
        []
    );

    useEffect(
        ()=>{setImages("https://picsum.photos/id/"+id+"/400/400"); console.log(id)}, [id]
    )


    return(
        <div>
            <img style={{color:"black"}} src={image} alt="ID Doesn't exist within List"/> <br/> 
            <button onClick={rng}> Load New Image </button>
        </div>
    );
}

export default FRQLab;