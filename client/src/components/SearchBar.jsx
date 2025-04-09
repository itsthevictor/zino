import { Form } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';

// const firstActivity = firstActivity;

const SearchBar = () => {
  return (
    <div className='search-bar-container font-oxanium '>
      <Form method='post' className='flex mt-15' action='/search'>
        <input
          type='text'
          className='bg-white py-3  px-4 placeholder-shown .placeholder-gray-200  text-gray-500 w-70'
          placeholder='search for a place or an activity...'
          style={{
            clipPath: 'polygon(4% 0, 100% 0, 100% 100%, 0 100%, 0 28%)',
          }}
        />
        {/* <button type='submit' className='bg-orange-500 px-3 py-2'> */}
        <button
          className='bg-orange-500  text-white font-bold py-2 px-4 hover:bg-orange-400 cursor-pointer'
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 75%, 80% 100%, 0 100%)',
          }}
        >
          <MdArrowForward size={24} />
        </button>
      </Form>
    </div>
  );
};
export default SearchBar;
