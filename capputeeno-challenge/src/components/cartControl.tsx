import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./icons/cartIcon";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFilter } from "@/hooks/useFilter";

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  background-color: var(--delete-color);
  color: #fff;
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
  cursor: pointer;
`;

const Message = styled.div`
  position: absolute;
  left: 13px;
  top: 100%;
  transform: translateX(-50%);
`;

const AlertMessage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--alert-box);
  width: 200px;
  border-radius: 4px;
  padding: 8px;
  font-size: 14px;
  color: #fff;
  font-weight: 500;
  z-index: 99;

  button {
    border: none;
    background-color: #fff;
    color: var(--alert-box);
    font-weight: 500;
    padding: 5px 0;
    width: auto;
    cursor: pointer;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    margin-top: -25px;
    left: 50%;
    transform: translateX(-50%);
    border: 10px solid;
    border-color: transparent transparent var(--alert-box) transparent;
  }
`;

interface CartProps {
  navigate: string;
}

export const CartControl = ({ navigate }: CartProps) => {
  const { cartCount } = useFilter();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleNavigate = () => {
    if (cartCount > 0) {
      router.push(navigate);
    } else {
      setIsOpen(true);
    }
  };
  const handleCloseModal = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setIsOpen(false);
  };

  return (
    <Container onClick={handleNavigate}>
      <CartIcon />
      {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
      <Message>
        {isOpen && (
          <AlertMessage>
            <p>Você não tem itens carrinho!</p>
            <button
              onClick={(e: React.MouseEvent<HTMLElement>) =>
                handleCloseModal(e)
              }
            >
              OK
            </button>
          </AlertMessage>
        )}
      </Message>
    </Container>
  );
};
