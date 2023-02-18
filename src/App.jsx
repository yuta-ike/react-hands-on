import BookList from "./BookList";
import BookCreate from "./BookCreate";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BookList />,
  },
  {
    path: "/create",
    element: <BookCreate />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
