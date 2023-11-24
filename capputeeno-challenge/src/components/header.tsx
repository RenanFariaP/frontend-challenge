"use client"

import styled from "styled-components";

import { Saira_Stencil_One } from 'next/font/google'
import { InputSearchIcon } from "./inputSearch";
import { CartControl } from "./cartControl";
import { useFilter } from "@/hooks/useFilter";

const sairaStencil = Saira_Stencil_One({ 
  weight: ['400'],
  subsets: ['latin'] 
})

interface HeaderProps {}

const TagHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;
`;

const Logo = styled.div`
  color: var(--logo-color);
  font-size: 40px;
  font-weight: 400;
  line-height: 60px;
  flex: 1;
`;


export const Header = (props: HeaderProps) => {
  const {setSearch, search}= useFilter();
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>
      <InputSearchIcon value={search} handleChange={setSearch} placeholder="Procurando por algo específico?"/>
      <CartControl />
    </TagHeader>
  );
};
