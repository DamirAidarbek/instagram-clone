import AppHeader from "./components/layout/AppHeader/AppHeader.tsx";
import Container from "./components/layout/Container/Container.tsx";
import {useEffect} from "react";
import {useUserStore} from "./store/userStore.ts";
import AppRouter from "./config/router/AppRouter.tsx";

function App() {
    const init = useUserStore(state => state.initUser)

    useEffect(() => {
        init()
    }, []);

  return (
      <>
        <AppHeader />
        <Container>
            <AppRouter />
        </Container>
      </>
  )
}

export default App
