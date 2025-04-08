import styled from 'styled-components';

const Wrapper = styled.section`
  .search-bar-container {
    z-index: 9;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: url('https://res.cloudinary.com/dgp67jheg/image/upload/v1744137696/zno/perspectiva-in-franta_scfoyg.jpg')
      rgba(0, 0, 0, 0.2);
    background-blend-mode: multiply;
    /* background: chartreuse; */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .search-bar {
    display: flex;

    border-radius: var(--round-sm);
    background: white;
    margin-top: -3em;
    box-shadow: -8px 13px 15px -3px rgba(0, 0, 0, 0.1);

    .search-bar:first-child {
      border-radius: var(--round-sm);
    }

    select {
      padding: 10px 10px;
      font-size: 1.5em;
      border: none;
      border-radius: var(--round-sm);
      outline: none;
      color: black;
      margin-right: 10px;
      background: white;

      option {
        color: black;
      }
    }

    button {
      padding: 10px 20px;
      font-size: 1.5em;
      border: none;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      cursor: pointer;
      color: white;
      background: hsl(var(--accent));
      text-transform: capitalize;

      span {
        -moz-transform: scale(-1, 1);
        -webkit-transform: scale(-1, 1);
        -o-transform: scale(-1, 1);
        -ms-transform: scale(-1, 1);
        transform: scale(-1, 1);
        margin-bottom: -6px;
      }
    }

    button:hover {
      background: hsl(var(--accent-hover));
    }
  }
  @media only screen and (max-width: 750px) {
    .search-bar {
      flex-direction: column;
    }
  }
  /* @media only screen and (max-width: 500px) {
    .search-bar {
      flex-direction: column;
    }
  } */
`;

export default Wrapper;
