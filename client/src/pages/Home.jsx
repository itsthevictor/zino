import SearchBar from '../components/SearchBar';
import { useEffect, useState } from 'react';

// Helper function to convert decimal degrees to DMS format
const toDMS = (decimal) => {
  if (decimal === null || decimal === undefined || isNaN(decimal)) {
    return 'Invalid value';
  }
  const degrees = Math.floor(decimal);
  const minutesDecimal = Math.abs((decimal - degrees) * 60);
  const minutes = Math.floor(minutesDecimal);
  const seconds = Math.round((minutesDecimal - minutes) * 60);
  return `${degrees}° ${minutes}' ${seconds}"`;
};

const Home = () => {
  const [position, setPosition] = useState({
    lat: 'Fetching...',
    long: 'Fetching...',
  });

  const time = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  const date = new Date().toLocaleDateString('ro-RO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latDMS = toDMS(position.coords.latitude);
        const longDMS = toDMS(position.coords.longitude);
        console.log('New position in DMS:', { lat: latDMS, long: longDMS }); // Debugging
        setPosition({ lat: `${latDMS} N`, long: `${longDMS} E` });
      },
      (error) => {
        console.error(error);
        setPosition({
          lat: 'Error fetching latitude',
          long: 'Error fetching longitude',
        });
      },
      { enableHighAccuracy: true }
    );
  }, []);

  return (
    <div className="grid place-items-center h-screen w-screen  p-8   font-oxanium text-white  bg-black/13  bg-[url('https://res.cloudinary.com/dgp67jheg/image/upload/v1744192852/zno/cropped_igdxfn.jpg')] bg-blend-overlay bg-cover bg-no-repeat bg-top  ">
      <div className='border-1 w-full h-full border-transparent flex flex-col items-center justify-center '>
        <div className='text-7xl  -mt-10 text-wrap text-center'>
          What are we <span className=' text-orange-500'>doing </span> <br />{' '}
          this weekend?
        </div>
        <SearchBar />
      </div>
      <span className='absolute left-0 rotate-270 -ml-9 text-xs'>
        {position.lat && position.lat}, {position.long && position.long}
      </span>
      <span className='absolute right-76 bottom-7 text-xs uppercase'>
        {time}
      </span>
      <span className='absolute right-0 rotate-90 capitalize text-xs  top-75'>
        {date}
      </span>
      <span className='border-b-1 border-l-1 border-white absolute bottom-8 left-8 w-30 h-10'></span>
      <span className='border-r-1 border-white absolute bottom-8 right-8 w-10 h-50'></span>
    </div>
  );
};
export default Home;
