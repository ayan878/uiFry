import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Features from "./components/Features";
import Layout from "./components/Layout";
import Hero from "./components/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Hero />,
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
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}
