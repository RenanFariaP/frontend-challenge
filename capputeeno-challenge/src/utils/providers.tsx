import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query"

type Props = {
    children: ReactNode
}

export const Provider = ({children} : Props) =>{
    const queryClient = new QueryClient();

    return(
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}