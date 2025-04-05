import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Home from './pages/Home';
import Register, { registerAction } from './pages/Register';
import Login, { loginAction } from './pages/Login';
import DashboardLayout from './layouts/DashboardLayout';
import Main, { initialLoader } from './layouts/Main';
import Error from './pages/Error';
import 'react-toastify/dist/ReactToastify.css';

import Classes, { classesLoader } from './pages/Classes';
import { searchAction } from './actions/search';
import ListingPage, { singleListingLoader } from './pages/ListingPage';
import AddListing from './pages/AddListing';
import Gallery from './pages/Gallery';
import OrganizerPage from './pages/OrganizerPage';
import Account from './pages/Account';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      loader: initialLoader,
      children: [
        {
          index: true,
          element: <Home />,
          errorElement: <Error />,
        },
        {
          path: 'search',
          action: searchAction,
        },
        {
          element: <Classes />,
          errorElement: <Error />,
          path: 'list',
          loader: classesLoader,
        },
        {
          element: <ListingPage />,
          errorElement: <Error />,
          path: 'event/:id',
          loader: singleListingLoader,
        },
        {
          path: 'signup',
          element: <Register />,
          errorElement: <Error />,
          action: registerAction,
        },
        {
          path: 'signin',
          element: <Login />,
          errorElement: <Error />,
          action: loginAction,
        },
        {
          path: 'adauga-anunt',
          element: <AddListing />,
          errorElement: <Error />,
          // action: addListingAction,
        },

        {
          path: 'dashboard',
          element: <DashboardLayout />,
          // loader: dashboardLoader,
          errorElement: <Error />,
        },
        {
          path: 'organizer/:id',
          element: <OrganizerPage />,
        },
        {
          path: 'my-account',
          element: <Account />,
        },
        {
          path: 'checkout/:id',
          element: <Checkout />,
        },
        {
          path: 'success',
          element: <Success />,
        },
      ],
    },
  ]);

  return (
    <div className='app'>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
