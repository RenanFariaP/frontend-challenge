"use client";

import { BackButton } from "@/components/BackButton";
import { CartItem } from "@/components/cart/cart-item";
import { DefaultPageLayout } from "@/components/defaultPageLayout";
import { useConvertPrice } from "@/hooks/useConvertPrice";
import { useFilter } from "@/hooks/useFilter";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/product";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: column;

  @media (min-width: 968px) {
    flex-direction: row;
  }
`;

const CartListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    font-size: 24px;
    line-height: 36px;
    font-weight: 500;
    color: var(--text-dark);
    text-transform: uppercase;
    margin-bottom: 6px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;
    color: var(--text-dark);
    margin-bottom: 23px;
  }

  span {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: var(--text-dark);
  }
`;

const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const CartResultContainer = styled.div`
  min-width: 352px;
  height: 700px;
  border-radius: 10px;
  background-color: #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    color: var(--text-dark-2);
    text-transform: uppercase;
    margin-bottom: 22px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: var(--text-dark);
  }

  h4 {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: var(--text-dark-2);
  }

  span {
    min-width: 302px;
    min-height: 1px;
    margin: 8px 0;
    background-color: var(--shapes);
  }
`;

const SubtotalItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
`;
const Divider = styled.div`
  width: 302px;
  height: 1px;
  margin: 8px 0;
  background-color: var(--shapes);
`;

const FinishButton = styled.button`
  width: 100%;
  background-color: #51b853;
  height: 44px;
  border: none;
  border-radius: 4px;
  margin-top: 40px;
  text-transform: uppercase;
  cursor: pointer;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 1px 1px 8px rgb(0, 0, 0);
  }

  p {
    color: #fff;
  }
`;
const FinishBuyInfos = styled.div``;

const InfoLinks = styled.div`
  p {
    text-transform: uppercase;
    margin-bottom: 12px;
    color: var(--text-dark);
    cursor: pointer;
    font-weight: 500;

    &:hover {
      color: var(--text-dark-2);
    }
  }
`;

const CartPage = ():JSX.Element => {
  const router = useRouter();
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>(
    "cart-items",
    []
  );
  const { cartCount, setCartCount } = useFilter();
  const calculateTotal = (value: ProductInCart[]) => {
    return value.reduce(
      (sum, item) => (sum += item.price_in_cents * item.quantity),
      0
    );
  };

  const cartTotal = calculateTotal(value);
  const priceTotal = useConvertPrice(cartTotal);
  const priceAndDelivery = useConvertPrice(cartTotal + 4000);
  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = value.map((item) => {
      if (item.id !== id) return item;
      return { ...item, quantity: quantity };
    });
    updateLocalStorage(newValue);
  };

  const handleDeleteProduct = (id: string) => {
    const newValue = value.filter((item) => {
      if (item.id !== id) return item;
    });
    updateLocalStorage(newValue);
    if (newValue.length === 0) {
      router.push("/");
    }
    setCartCount(newValue.length);
  };

  return (
    <DefaultPageLayout>
      <Container>
        <CartListContainer>
          <BackButton navigate="/" />
          <h3>Seu carrinho</h3>
          <p>
            Total ({value.length} produtos) <span>R${priceTotal}</span>
          </p>
          <CartList>
            {value.map((item) => (
              <CartItem
                product={item}
                key={item.id}
                handleUpdateQuantity={handleUpdateQuantity}
                handleDeleteProduct={handleDeleteProduct}
              />
            ))}
          </CartList>
        </CartListContainer>
        <CartResultContainer>
          <FinishBuyInfos>
            <h1>Resumo do pedido</h1>
            <SubtotalItem>
              <p>Subtotal de produtos</p>
              <p>R$ {priceTotal}</p>
            </SubtotalItem>
            <SubtotalItem>
              <p>Entrega</p>
              <p>R$ 40,00</p>
            </SubtotalItem>
            <Divider></Divider>
            <SubtotalItem>
              <h4>Total</h4>
              <h4>R$ {priceAndDelivery}</h4>
            </SubtotalItem>
            <FinishButton>
              <p>Finalizar a compra</p>
            </FinishButton>
          </FinishBuyInfos>
          <InfoLinks>
            <p>Ajuda</p>
            <p>Reembolsos</p>
            <p>Entregas e frete</p>
            <p>Trocas e devoluções</p>
          </InfoLinks>
        </CartResultContainer>
      </Container>
    </DefaultPageLayout>
  );
};


export default CartPage;

