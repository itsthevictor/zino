import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { mainFetch } from '../utils/customFetch';

export const initialLoader = async () => {
  let authData = {};
  try {
    const response = await mainFetch('/users/current-user');
    authData = { ...authData, response };
    return response.data;
  } catch (error) {
    return authData;
  }
};

const Main = () => {
  const data = useLoaderData();

  return (
    <>
      {<Navbar authData={data} />}

      <main>
        <Outlet context={data} />
      </main>
      <Footer />
    </>
  );
};
export default Main;
