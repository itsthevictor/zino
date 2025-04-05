import styled from 'styled-components';

const Wrapper = styled.section`
  border-bottom: 1px solid #dce0e6;

  .burger-menu {
    color: #0d7a5f;
    cursor: pointer;
    border: none !important;
    /* position: absolute; */
  }

  .side-nav {
    position: absolute;
    width: 100vw;
    width: 100%;
    top: 0;
    /* height: 100%; */
    display: none;
    transition: var(--transition);

    .nav-container {
      position: fixed;
      width: 250px;
      left: 0;
      /* top: var(--nav-height); */
      height: 100vh;
      padding-top: var(--nav-height);
      background-color: white;
      opacity: 1;
      transition: 0.5s ease;
      display: flex;
      flex-direction: column;
      padding-left: 15px;
      justify-content: flex-start;
      /* gap: 40px; */

      a {
        padding: 15px 0;
        color: #0d7a5f;
        /* border-bottom: 1px solid black; */
      }
    }

    .nav-overlay {
      width: 100%;
      height: 100vh;
      top: var(--nav-height);
      left: 0;
      position: absolute;

      background: black;
      opacity: 0.2;
      transition: 0.5s ease;
    }

    &.active {
      display: block;
      .nav-container {
        left: 0;
      }
    }
  }
  nav {
    width: var(--fluid-width);
    min-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--nav-height);
    /* box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.15); */

    .mobile-menu {
      display: none;
    }
    .logo h1 {
      color: hsl(var(--accent-logo));
      font-size: var(--fs-500);
      font-weight: 900;
      font-style: italic;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: cornflowerblue;
    }
    .menu {
      display: flex;
      gap: 40px;
      align-items: center;

      .link-btn {
        color: #0d7a5f;
        padding: 8px 25px;
        border: 1px solid #0d7a5f;
        border-radius: var(--round-md);
        margin-left: -15px;
        font-weight: 600;
        &:hover {
          color: hsl(var(--accent-hover));
        }
      }

      .nav-btn {
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 1em;
        font-weight: 500;
        font-family: 'Inter', Arial, Helvetica, sans-serif;
        margin-right: 15px;
      }
    }
  }

  .user-link span {
    padding-left: 5px;
  }

  .user-icon {
    color: hsl(var(--accent-hover));
    margin-bottom: -2px;
  }

  @media (min-width: 1200px) {
    nav {
      .nav-container {
        display: none;
      }
    }
  }
  @media (max-width: 1200px) {
    nav {
      width: 95vw;
      min-width: 95vw;
    }
  }

  @media (max-width: 800px) {
    nav {
      justify-content: center;
      .side-nav .active {
        display: none;
      }
      .menu {
        display: none;
      }

      /* .logo-container {
        position: absolute;
        top: 10;
        margin-left: auto;
      } */

      .mobile-menu {
        display: block;
        position: fixed;
        top: 20px;
        left: 10px;
      }
    }
  }
`;

export default Wrapper;
