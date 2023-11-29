
import { ProductFetchResponse } from "@/types/productResponse";

import axios, { AxiosPromise } from "axios";
import { useQuery } from "react-query";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (productId: string): AxiosPromise<ProductFetchResponse> => {
  return axios.post(API_URL, { query: `
  query {
    Product(id: "${productId}"){
      id
      name
      description
      category
      price_in_cents
      image_url
    }
  }
  ` });
};

export const useProduct = (id: string) =>{
  const { data } = useQuery({
    queryFn: () => fetcher(id),
    queryKey: ["products", id],
    enabled: !!id,
    staleTime: 1000 * 5 * 60,
  });


    return {
        data: data?.data?.data?.Product
    }
}