import styled from 'styled-components';

const Wrapper = styled.section`
  color: white;
  .landing-container {
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

    .wrapper {
      width: 100vw;
      height: 100vh;
      padding: 2rem;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(20, 1fr);

      .bottom {
        grid-column: 0/12;
        grid-row: 21/21;
        width: 100%;
        display: flex;
        justify-content: space-between;

        .left {
          grid-column: 0/2;
          grid-row: 21/21;
          height: 30px;
          border-bottom: 1px solid white;
        }
      }

      .search-bar-container {
        grid-column: 5/8;
        grid-row: 14/15;
        width: 100%;
        background: chartreuse;

        .search-bar {
          width: 100%;
          display: flex;

          input {
            width: 100%;
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
        }

        button:hover {
          background: hsl(var(--accent-hover));
        }
      }
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
