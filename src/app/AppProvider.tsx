import { Toaster } from "@/components"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient()

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <Toaster />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}