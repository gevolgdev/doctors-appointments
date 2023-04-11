import styled from "styled-components";

export const HomeContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;

  .home-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 50px;
    margin-top: 100px;

    a {
      text-decoration: none;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      flex: 1;
      height: 450px;
      width: 350px;
      border-radius: 90px;
      padding: 80px;
      border: none;
      text-align: center;

      font-size: 3rem;
      font-weight: 500;
      cursor: pointer;
      
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 15px;
        margin-bottom: 20px;
      }
    }

    .button-1 {
      background: #7AE284;
      color: #0B181D;
      
      span {
        background: #0B181D;
        color: #7AE284;
      }
    }
    .button-2 {
      background: transparent;
      border: solid 2px white;
      color: white;
      span {
        background: white;
        color: #0B181D;
      }
    }
  }

  @media (max-width: 1366px) {
    padding: 0 15px 80px;
    .home-content {
      margin-top: 50px;
      flex-direction: column;

      button {
        border-radius: 70px;
        padding: 20px;
        height: 350px;
        font-size: 2.4rem;
      }
    }
  }

`