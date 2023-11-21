import styled from "styled-components";
import { SearchIcon } from "./searchIcon";
import { InputHTMLAttributes } from "react";

export const InputSearch = styled.input`
    width: 352px;
    border-radius: 8px;
    padding: 10px 16px;

    background-color: var(--bg-secondary);

    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    border: none;
    outline: none;
    color: var(--text-dark);
`;

const InputContainer = styled.div`
    position: relative;
    width: 352px;
    
    svg{
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
`
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export const InputSearchIcon = (props : InputProps) =>{
    return(
        <InputContainer>
            <InputSearch {...props}/>
            <SearchIcon/>
        </InputContainer>
    )
}
