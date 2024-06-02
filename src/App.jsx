import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Features from "./components/Features";
import Layout from "./components/Layout";
import FAQ from "./components/FAQ";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "about",
        element: <About />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "features",
        element: <Features />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "*",
        element:<Home/>,
      },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}
