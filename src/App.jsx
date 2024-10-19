import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import Layout from "./routes/Layout.jsx";
import Page404 from "./pages/Page404.jsx";
import "./App.scss";

export default function App() {
  const router = createBrowserRouter([
    { 
      element: <Layout />,
      errorElement: <Page404 />,
      children: routes,
    }, 
  ]);
  return <RouterProvider router={router} />;
}
