import {RouteProps} from "react-router-dom";
import {MainPageAsync as MainPage} from "../../pages/MainPage/MainPage.async.tsx";
import {ProfilePageAsync as ProfilePage} from "../../pages/ProfilePage/ProfilePage.async.tsx";

export enum AppRoutes {
    MAIN = 'main',
    PROFILE = 'profile'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PROFILE]: '/profile', // +id
}

export const AppRouterProps: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <MainPage />
    },
    [AppRoutes.PROFILE]: {
        path: RoutePaths.profile,
        element: <ProfilePage />
    }
}
