import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Home from "./pages/Home";
import Register, { registerAction } from "./pages/Register";
import Login, { loginAction } from "./pages/Login";
import DashboardLayout from "./layouts/DashboardLayout";
import Main, { initialLoader } from "./layouts/Main";
import Error from "./pages/Error";
import "react-toastify/dist/ReactToastify.css";
import AddTask, { addTaskAction } from "./pages/AddTask";

import Classes, { classesLoader } from "./pages/Classes";
import { searchAction } from "./actions/search";
import ListingPage, { singleListingLoader } from "./pages/ListingPage";
import AddListing from "./pages/AddListing";
import Gallery from "./pages/Gallery";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      loader: initialLoader,
      children: [
        {
          index: true,
          element: <Home />,
          errorElement: <Error />,
        },
        {
          path: "search",
          action: searchAction,
        },
        {
          element: <Classes />,
          errorElement: <Error />,
          path: "list",
          loader: classesLoader,
        },
        {
          element: <ListingPage />,
          errorElement: <Error />,
          path: "listing/:id",
          loader: singleListingLoader,
        },
        {
          path: "register",
          element: <Register />,
          errorElement: <Error />,
          action: registerAction,
        },
        {
          path: "login",
          element: <Login />,
          errorElement: <Error />,
          action: loginAction,
        },
        {
          path: "adauga-anunt",
          element: <AddListing />,
          errorElement: <Error />,
          // action: addListingAction,
        },

        {
          path: "dashboard",
          element: <DashboardLayout />,
          // loader: dashboardLoader,
          errorElement: <Error />,
        },
        {
          path: "add-task",
          element: <AddTask />,
          action: addTaskAction,
          errorElement: <Error />,
        },
        {
          path: "add-gallery",
          element: <Gallery />,

          errorElement: <Error />,
        },
      ],
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
