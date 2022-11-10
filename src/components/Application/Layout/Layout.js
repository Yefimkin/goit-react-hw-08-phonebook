import { Suspense } from "react";
import { Outlet } from 'react-router-dom';

import { RouteLoader } from "../Loader/Loader";
import { UserMenu } from "components/Application/UserMenu/UserMenu";

export const Layout = () => {
    return <div style={{ padding: "0 25px"}}>
        <UserMenu />
        <Suspense fallback={<RouteLoader />}>
            <Outlet />
        </Suspense>
    </div>
}