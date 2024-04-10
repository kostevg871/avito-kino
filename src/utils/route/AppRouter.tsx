import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import LayoutApp from "../../app/LayoutApp";
import SingleMovie from "../../pages/SingleMovie";

export const appRouter = createBrowserRouter([
  {
    element: <LayoutApp />,
    errorElement: <div>Error</div>,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/movie/:id", element: <SingleMovie /> },
    ],
  },
]);
