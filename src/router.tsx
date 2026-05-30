import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Diagnose from "./pages/Diagnose";
import Result from "./pages/Result";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/diagnose/:device", element: <Diagnose /> },
  { path: "/result", element: <Result /> },
]);
