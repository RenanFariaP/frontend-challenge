"use client";

import { PriorityTypes } from "@/types/priority-types";
import { ProductFilterType } from "@/types/productFilterTypes";
import { createContext, useState, ReactNode, useEffect } from "react";

export const ProductFilterContext = createContext({
  search: "",
  page: 0,
  type: ProductFilterType.ALL,
  priority: PriorityTypes.NEWS,
  cartCount: 0,
  setPriority: (value: PriorityTypes) => {},
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: ProductFilterType) => {},
  setCartCount: (value: number) => {},
});

interface ProviderProps {
  children: ReactNode;
}

export const ProductFilterContextProvider = ({ children }: ProviderProps) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [type, setType] = useState(ProductFilterType.ALL);
  const [priority, setPriority] = useState(PriorityTypes.POPULARITY);
  useEffect(() => {
    const cartItems = localStorage.getItem('cart-items');
    let cartItemsArray = [];
    if(cartItems) {
      cartItemsArray = JSON.parse(cartItems);
    }
    setCartCount(cartItemsArray.length);
  });
  return (
    <ProductFilterContext.Provider
      value={{
        search,
        page,
        type,
        priority,
        cartCount,
        setSearch,
        setPage,
        setType,
        setPriority,
        setCartCount,
      }}
    >
      {children}
    </ProductFilterContext.Provider>
  );
};
