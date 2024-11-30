import NotFound from "./../pages/NotFound";
import Home from "./../pages/Home";
import Countries from "./../pages/Countries";
import Country from "./../pages/Country";
import About from "./../pages/About";
import App from "./../App";

const routes = [
    {
        path: "neworld",
        children: [
            {
                path: '/',
                element: <App />
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/countries',
                element: <Countries />,
            },
            {
                path: '/country',
                element: <Country />,
            },
            {
                path: '/search',
                element: <About />,
            },
            {
                path: "/404",
                element: <NotFound />,
            },
        ],
        errorElement: <NotFound />,
        // loader: () => {
        //     return true;
        // }
    },
]

export default routes;