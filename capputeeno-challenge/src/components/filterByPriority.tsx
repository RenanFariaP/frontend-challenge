import styled from "styled-components"
import { ArrowIconFilter } from "./ArrowIconFilter"
import { useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { PriorityTypes } from "@/types/priority-types";

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button {
        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: var(--text-dark);
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        cursor: pointer;
        padding: 5px 0 5px 10px;
        border-radius: 3px;

        svg{
            margin-left: 16px;
        }
    }

    button:hover{
        background-color: var(--bg-secondary);
    }
`

const PriorityFilter  = styled.ul`
    position: absolute;
    z-index: 99;
    background-color: #FFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    list-style: none;
    min-width: 176px;
    top: 100%;
    right: 0;

    li{
        color: var(--text-dark);    
        font-size: 14px;
        line-height: 22px;
        cursor: pointer;
        padding: 0 30px;
    }

    li:hover{
        background-color: var(--bg-secondary);
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
    }

    li + li{
        margin-top: 4px;
    }
`

export const FilterByPriority = () =>{
    const [ showFilter, setShowFilter] = useState(false);
    const { setPriority } = useFilter();

    const handleFilterPriority = () =>{
        setShowFilter(prev => !prev);
    }

    const handleUpdatePriority = (value: PriorityTypes) =>{
        setPriority(value);
        setShowFilter(false);
    }
    
    return(
        <FilterContainer>
            <button onClick={handleFilterPriority}>Organizar por
                <ArrowIconFilter/>
            </button>
            {showFilter && 
                <PriorityFilter>
                    <li onClick={() =>handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
                    <li onClick={() =>handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - Menor</li>
                    <li onClick={() =>handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - Maior</li>
                    <li onClick={() =>handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
                </PriorityFilter>}
        </FilterContainer>
    )
}