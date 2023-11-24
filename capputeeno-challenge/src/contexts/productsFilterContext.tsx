"use client"

import { PriorityTypes } from "@/types/priority-types";
import { ProductFilterType } from "@/types/productFilterTypes";
import { createContext, useState, ReactNode } from "react";

export const ProductFilterContext = createContext({
    search: '',
    page: 0,
    type: ProductFilterType.ALL,
    priority: PriorityTypes.NEWS,
    setPriority: (value: PriorityTypes) =>{},
    setSearch: (value: string) =>{} ,
    setPage: (value: number) =>{} ,
    setType: (value: ProductFilterType) =>{} 
})

interface ProviderProps {
    children: ReactNode
}

export const ProductFilterContextProvider = ({children}: ProviderProps) =>{
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [type, setType] = useState(ProductFilterType.ALL);
    const [priority, setPriority] = useState(PriorityTypes.POPULARITY);
    return(
        <ProductFilterContext.Provider value={{search, page, type, priority, setSearch, setPage, setType, setPriority }}>
            {children}
        </ProductFilterContext.Provider>
    )
}