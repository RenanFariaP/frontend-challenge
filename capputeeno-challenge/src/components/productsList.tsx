"use client"

import { useProducts } from "@/hooks/useProducts"

export const ProductList = () =>{

    const { data } = useProducts();
    console.log(data);
    return(
        <></>
    )
}