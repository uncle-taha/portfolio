import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Spinner from "../src/components/Spinner";
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const Baemin = lazy(() => import("./pages/Baemin"));
function App() {
  const routes = createBrowserRouter([
    // prettier-ignore
    { path: "/", 
      element: <MainLayout />, 
      errorElement: <ErrorPage />,
      children:[
        {
          index: true,
          element: <Home/>,
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        { path: "/portfolio/baemin", 
          element: <Baemin /> },
        {
          path: "/blogpage",
          element: <BlogPage/>,
        },
      ] },
  ]);
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default App;
