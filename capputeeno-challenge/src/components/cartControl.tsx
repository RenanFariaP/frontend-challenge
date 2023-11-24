import { useLocalStorage } from "@/hooks/useLocalStorage"
import { CartIcon } from "./icons/cartIcon"
import styled from "styled-components";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    background-color: var(--delete-color);
    color: #FFF;
    position: absolute;
    right: -10px;
    top: 50%;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
`;

const Container = styled.div`
    position: relative;
    margin-left: 20px;
`

export const CartControl = () =>{
    const {value} = useLocalStorage('cart-items', []);
    
    return(
        <Container>
            <CartIcon />
            {value.length !== 0 && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}