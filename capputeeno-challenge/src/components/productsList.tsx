"use client"

import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "./productCard";
import styled from "styled-components";

const ListContainer= styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    grid-gap: 32px;
    max-width: 100%;
`

export const ProductList = () =>{

    const { data } = useProducts();
    console.log(data);
    return(
        <ListContainer>
            {data?.map(product => <ProductCard
            key={product.id} 
            title={product.name} 
            price={product.price_in_cents} 
            image={product.image_url} 
            />)}
        </ListContainer>
            
    )
}