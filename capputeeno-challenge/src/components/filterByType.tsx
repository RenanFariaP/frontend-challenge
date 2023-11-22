import { useFilter } from "@/hooks/useFilter";
import { ProductFilterType } from "@/types/productFilterTypes";
import styled from "styled-components";

const FilterList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
`

interface FilterItemProps {
    selected: boolean;
}

const FilterItem = styled.li<FilterItemProps>`
    color: var(--text-dark);
    font-family: inherit;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    text-transform: uppercase;
    border-bottom: ${props => props.selected ? '4px solid var(--orange-low)': '4px solid transparent'};
    font-weight: ${props => props.selected ? '600': '400'};
    list-style: none;
    cursor: pointer;
`

export const FilterByType = ()=>{
    const { type, setType }= useFilter();

    const handleChangeType = (value: ProductFilterType) =>{
        setType(value);
    }

    return (
        <FilterList>
            <FilterItem selected={type === ProductFilterType.ALL}
            onClick={()=>handleChangeType(ProductFilterType.ALL)}>Todos os produtos</FilterItem>
            <FilterItem selected={type === ProductFilterType.SHIRT}
            onClick={()=>handleChangeType(ProductFilterType.SHIRT)}>Camisetas</FilterItem>
            <FilterItem selected={type === ProductFilterType.MUG}
            onClick={()=>handleChangeType(ProductFilterType.MUG)}>Canecas</FilterItem>
        </FilterList>
    )
}