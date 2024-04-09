import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import LayoutApp from "../../components/LayoutApp";

export const appRouter = createBrowserRouter([
  {
    element: <LayoutApp />,
    errorElement: <div>Error</div>,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/movies/:id", element: <div>id</div> },
    ],
  },
]);
