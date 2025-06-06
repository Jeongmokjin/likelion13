import Products from "../Layout/Products";
import axios from "axios";
import React, { useState, useEffect } from "react";

function ClothingPage(){ //분류 토글과 상품들 출력
    const [clothes, setClothes] = useState([]); // 게시글

    const getData= ()=>{

        axios
            .get("http://localhost:3000/clothes")
            .then((response) => {
            setClothes(Array.isArray(response.data) ? response.data : []);
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
            <Products data={clothes} what="clothes"/>
        </>
    )
}

export default ClothingPage;