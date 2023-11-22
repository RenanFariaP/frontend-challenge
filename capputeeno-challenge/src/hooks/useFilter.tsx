import { ProductFilterContext } from "@/contexts/productsFilterContext";
import {useContext} from "react";

export const useFilter = () =>{

    return useContext(ProductFilterContext)
}