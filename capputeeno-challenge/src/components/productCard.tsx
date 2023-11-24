import styled from "styled-components";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 4px;
  width: 256px;

  img {
    width: inherit;
    height: 300px;
    border-radius: 4px 4px 0 0;
  }

  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);
    padding-top: 10px;
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: var(--shapes-dark);
    padding-bottom: 10px;
  }

  div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    > div {
      width: 228px;
      height: 1px;
      margin: 8px 0;
      background-color: var(--shapes);
    }
  }
`;

export const ProductCard = (props: ProductCardProps) => {
  let priceConverted = (props.price / 100).toString();
  return (
    <Card>
      <img src={props.image} />
      <div>
        <h3>{props.title}</h3>
        <div></div>
        <p>R$ {priceConverted.replace(".", ",")}</p>
      </div>
    </Card>
  );
};
