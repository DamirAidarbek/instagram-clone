import {Suspense} from "react";
import {AppRouterProps} from "./router.tsx";
import {Route, Routes} from "react-router-dom";
import Loader from "../../ui/Loader/Loader.tsx";

const AppRouter = () => {

    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                {Object.values(AppRouterProps)
                    .map(({ path, element }) =>
                        <Route
                            path={path}
                            element={element}
                            key={path}
                        />)
                }
            </Routes>
        </Suspense>
    )
}

export default AppRouter;
