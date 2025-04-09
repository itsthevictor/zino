import { useLoaderData } from 'react-router-dom';
import { SingleListing } from '../components';
import { mainFetch } from '../utils/customFetch';

export const singleListingLoader = async ({ params }) => {
  console.log(params);
  try {
    const response = await mainFetch(`/listings/${params.id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    return error;
  }
};

const ListingPage = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className='container'>{<SingleListing listing={data.listing} />}</div>
  );
};
export default ListingPage;
