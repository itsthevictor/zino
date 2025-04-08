import SearchBar from '../components/SearchBar';
import { useEffect, useState } from 'react';
import Wrapper from '../assets/Wrappers/SearchBar';
const Home = () => {
  const [position, setPosition] = useState({ lat: '', long: '' });

  const time = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  const date = new Date().toLocaleDateString([], {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  });

  useEffect(() => {
    const geo = navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      (error) => {
        console.error(error);
      },
      { enableHighAccuracy: true }
    );
  }, []);

  return (
    <Wrapper>
      <div className='landing-container'>
        <div className='wrapper'>
          <div className='title'>What are we doing this weekend?</div>
          <SearchBar />
          <span className='geo'>{`${position.lat} ${position.long}`}</span>
          <span className='date'>{date}</span>
          <div className='bottom'>
            <span className='left'></span>
            <div className='time'>
              <span>{time}</span>
            </div>
            <span className='right'></span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Home;
