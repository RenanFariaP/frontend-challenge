import { ProductInCart } from "@/types/product";
import styled from "styled-components";
import { BinIcon } from "../icons/binIcon";
import { useConvertPrice } from "@/hooks/useConvertPrice";
import { ChangeEvent } from "react";

interface CartItemProps {
  product: ProductInCart;
  handleUpdateQuantity(id: string, quantity: number): void;
  handleDeleteProduct(id: string): void;
}

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 31px;
  border-radius: 10px;
  background-color: #fff;
  height: 210px;

  img {
    width: 256px;
    height: 100%;
    border-radius: 10px 0 0 10px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    padding: 16px 24px;
    line-height: 150%;
    color: var(--text-dark2);

    h4 {
      font-size: 20px;
      line-height: 30px;
      font-weight: 300;
      color: var(--text-dark-2);
    }

    p {
      font-size: 12px;
      line-height: 18px;
      font-weight: 400;
      color: var(--text-dark-2);
      max-height: 50%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

        select {
          font-size: 16px;
          line-height: 24px;
          font-weight: 400;
          border: 1px solid #a8a8b3;
          background-color: #f3f5f6;
          width: 65px;
          height: 40px;
          text-align: center;
          border-radius: 8px;
          color: var(--text-dark);
          outline: none;
        }
      }
      span {
        font-size: 16px;
        line-height: 24px;
        font-weight: 600;
        color: var(--shapes-dark);
      }
    }

  button {
    border: none;
    background-color: transparent;
    margin-bottom: 12px;
    cursor: pointer;
  }
`;

export const CartItem = ({
  product,
  handleUpdateQuantity,
  handleDeleteProduct,
}: CartItemProps) => {
  const price = useConvertPrice(product.price_in_cents);
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleUpdateQuantity(product.id, Number(e.target.value));
  };

  return (
    <Item>
      <img src={product.image_url} />
      <div>
        <div>
          <h4>{product.name}</h4>
          <button
            onClick={() => handleDeleteProduct(product.id)}
            aria-label="Delete"
          >
            <BinIcon />
          </button>
        </div>
        <p>{product.description}</p>
        <div>
          <div>
            <select value={product.quantity} onChange={handleChange}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          <span>R${price}</span>
        </div>
      </div>
    </Item>
  );
};
