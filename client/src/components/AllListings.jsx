import SingleListing from './SingleListing';

import { FilterBar } from '../components';
const AllListings = ({ listings }) => {
  return (
    <div className='container'>
      <FilterBar />
      <div className='listings-container'>
        {listings.map((item, _id) => (
          <SingleListing key={_id} listing={item} />
        ))}
      </div>
    </div>
  );
};
export default AllListings;
