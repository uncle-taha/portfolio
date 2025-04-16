import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
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
        }
      ] },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
