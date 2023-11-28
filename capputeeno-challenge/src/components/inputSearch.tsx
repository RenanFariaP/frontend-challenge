import styled from "styled-components";
import { SearchIcon } from "./icons/searchIcon";
import { InputHTMLAttributes } from "react";

export const InputSearch = styled.input`
    width: 100%;
    border-radius: 8px;
    padding: 10px 16px;

    background-color: var(--bg-secondary);

    font-family: inherit;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    border: none;
    outline: none;
    color: var(--text-dark);

    @media (min-width: 968px){
        font-size: 14px;
        line-height: 22px;
    }
`;

const InputContainer = styled.div`
    position: relative;
    width: 250px;
    
    svg{
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }

    @media (min-width: 968px){
        width: 352px;
    }
`
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    value: string,
    handleChange: (value: string) => void

}

export const InputSearchIcon = (props : InputProps) =>{
    return(
        <InputContainer>
            <InputSearch onChange={(event)=>props.handleChange(event.target.value)} {...props}/>
            <SearchIcon/>
        </InputContainer>
    )
}
