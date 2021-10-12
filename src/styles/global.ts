import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    /*     
    @media (max-width: 579px) {
      background-color: red;
      font-size: 40%;
    }
    */
    @media (max-width: 600px) {
      font-size: 42%;
    }

    @media (min-width: 900px) {
      font-size: 60.5%;
    }

    @media (min-width: 1200px) {
      font-size: 62.5%;
    }

    @media (min-width: 1800px) {
      font-size: 70%;
    }
  }

  body {
    color: ${(props) => props.theme.colors.primary_shadow};
    font: 400 14px Nunito Sans, sans-serif;
    font-size: 1.6rem;
    background-color: ${(props) => props.theme.colors.landscape};
  }

  header {
    background-color: ${(props) => props.theme.colors.background_light};
  }

  h1 {
    font: 600 2.5rem Nunito Sans;
  }

  h2 {
    font: 400 1.9rem Nunito Sans;
  }
  
  h3 {
    font: 400 1.7rem Nunito Sans;
  }
  
  h4 {
    font: 400 1.2rem Nunito Sans;
  }

  h5 {
    font: 400 1rem Nunito Sans;
  }

  p {
    font: 400 10px Nunito Sans;
  }

  
`;
