import {createBrowserRouter} from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { AdvertiseByMarkPage } from "../pages/AdvertisesByMarkPage";
import { HomePage } from "../pages/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
              path: "cars/:markName",
              element: <AdvertiseByMarkPage />,
            },
            {
                path: "",
                element: <HomePage/>,
              },
          ],
    },
]);

export { router }