"use client";
import { BackButton } from "@/components/BackButton";
import { DefaultPageLayout } from "@/components/defaultPageLayout";
import { AddCartIcon } from "@/components/icons/AddCartIcon";
import { useConvertPrice } from "@/hooks/useConvertPrice";
import { useProduct } from "@/hooks/useProduct";
import { QueryClient, QueryClientProvider } from "react-query";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 22px;
`;

const ProductInfo = styled.section`
  display: flex;
  gap: 32px;
`;

const AddCart = styled.button`
  display: flex;
  width: 100%;
  background-color: #115d8c;
  color: #fff;
  align-items: center;
  justify-content: center;
  height: 44px;
  font-size: 16px;
  border-radius: 4px;
  gap: 10px;
  border: none;
  cursor: pointer;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover{
    transform: scale(1.05);
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.7);
  }
`;

const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 640px;
    height: 580px;
  }

  span {
    font-size: 16px;
    line-height: 24px;
    color: var(--text-dark);
    margin-bottom: 12px;
  }

  h1 {
    font-size: 32px;
    line-height: 48px;
    font-weight: 300;
    color: var(--text-dark);
    margin-bottom: 4px;
  }

  h2 {
    font-size: 20px;
    line-height: 30px;
    font-weight: 600;
    color: var(--shapes-dark);
    margin-bottom: 24px;
  }

  h3 {
    font-size: 16px;
    line-height: 24px;
    color: var(--text-dark);
    font-weight: 500;
    margin-top: 58px;
    margin-bottom: 8px;
  }

  p {
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;
    color: var(--text-dark);
    margin-bottom: 24px;
  }

  > div {
    > div {
      p {
        font-size: 14px;
        line-height: 21px;
        font-weight: 400;
        color: var(--text-dark);
        margin-bottom: 24px;
      }
    }
  }
`;

const ProductPage = ({ searchParams }: { searchParams: { id: string } }) => {
  const { data } = useProduct(searchParams.id);
  const price = useConvertPrice(data?.price_in_cents);
  return (
    <DefaultPageLayout>
      <Container>
        <BackButton navigate="/" />
        <ProductInfo>
          <img src={data?.image_url} />
          <ProductDetail>
            <div>
              <span>{data?.category === 'mugs' ? "Canenca" : "Camiseta"}</span>
              <h1>{data?.name}</h1>
              <h2>R${price}</h2>
              <p>
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$900,00.
              </p>
              <div>
                <h3>DESCRIÇÃO</h3>
                <p>{data?.description}</p>
              </div>
            </div>
            <AddCart>
              <AddCartIcon />
              ADICIONAR AO CARRINHO
            </AddCart>
          </ProductDetail>
        </ProductInfo>
      </Container>
    </DefaultPageLayout>
  );
};

export default ProductPage;
