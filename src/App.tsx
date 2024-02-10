import AppHeader from "./components/layout/AppHeader/AppHeader.tsx";
import Container from "./components/layout/Container/Container.tsx";
import {useEffect} from "react";
import {useUserStore} from "./store/userStore.ts";
import AppRouter from "./config/router/AppRouter.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
    const init = useUserStore(state => state.initUser)
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false
        }
      }
    })

    useEffect(() => {
        init()
    }, []);

  return (
      <QueryClientProvider client={queryClient}>
        <AppHeader />
        <Container>
            <AppRouter />
        </Container>
      </QueryClientProvider>
  )
}

export default App
