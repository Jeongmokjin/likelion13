import Products from "../Layout/Products";
import axios from "axios";
import React, { useState, useEffect } from "react";



function ShoesPage(){ 
    const [shoes, setShoes] = useState([]); // 게시글

    const getData= ()=>{

        axios
            .get("http://localhost:3000/shoes")
            .then((response) => {
            setShoes(Array.isArray(response.data) ? response.data : []);
            })
            .catch((err) => {
            console.error(err);
            })   
    };

    useEffect(() => {
        getData();
    }, []);

    return(
        <>
        <Products data={shoes} what="shoes"/>
        </>
    )
}

export default ShoesPage;