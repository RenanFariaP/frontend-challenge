import styled from "styled-components";
import { BackIcon } from "./icons/BackIcon";
import { useRouter } from "next/navigation";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  color: var(--secondary-text);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

interface ButtonProps {
    navigate: string;
}

export const BackButton = ({navigate}: ButtonProps) => {
    const router = useRouter();
    const handleNavigate = () =>{
        router.push(navigate);
    }

  return (
    <Button onClick={handleNavigate}>
      <BackIcon />
      Voltar
    </Button>
  );
};
