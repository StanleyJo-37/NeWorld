import NotFound from "./../pages/NotFound";
import Home from "./../pages/Home";
import Countries from "./../pages/Countries";
import CountryDetail from "./../pages/CountryDetail";
import About from "./../pages/About";
import App from "./../App";

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'countries',
                element: <Countries />,
            },
            {
                path: 'country-detail/:name',
                element: <CountryDetail />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: "404",
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