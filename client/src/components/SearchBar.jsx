import DropdownSelect from './DropdownSelect';
import { counties } from '../data/counties';
import { activities } from '../data/activities';
import { LISTING_CATEGORY } from '../../../utils/constants';
import Wrapper from '../assets/Wrappers/SearchBar';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { Form } from 'react-router-dom';

// const firstActivity = firstActivity;

const SearchBar = () => {
  return (
    <div className='search-bar-container'>
      <Form method='post' className='search-bar' action='/search'>
        <input type='text' />
        <button type='submit'>go</button>
      </Form>
    </div>
  );
};
export default SearchBar;
