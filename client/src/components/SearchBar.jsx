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
    <Wrapper>
      <div className='search-bar-container'>
        <div className='input'>
          <input type='text' />
        </div>
        <Form method='post' className='search-bar' action='/search'>
          <button type='submit'>
            caută{' '}
            <span>
              <FaMagnifyingGlass size={24} />
            </span>
          </button>
        </Form>
      </div>
    </Wrapper>
  );
};
export default SearchBar;
