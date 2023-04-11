import styled from "styled-components";

export const MarkContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 50px;
`;

export const MarkContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  gap: 30px;

  h1 {
    font-size: 3rem;
    color: white;
  }

  .inputs-content {
    display: flex;
    flex-direction: column;

    span{ font-size: .8rem; color: white; opacity: 80%; margin-bottom: 5px;}

    select {
      width: 400px;
      height: 52px;
      padding: 0 15px;
      outline: none;
      border: solid 2px #F1EFF1;
      font-size: 16px;
      background: #F7F5F7;
      border-radius: 10px;
  
      option {
        font-size: 14px;
      }
    }

    input {
      width: 400px;
      height: 52px;
      padding: 0 15px;
      outline: none;
      border: solid 2px #F1EFF1;
      font-size: 16px;
      font-family: 'Inter', sans-serif;
      background: #F7F5F7;
      border-radius: 10px;
    }

  }

  .date-container {
    display: flex;
    flex-direction: column;
    width: 400px; 

    span{ font-size: .8rem; color: white; opacity: 80%; margin-bottom: 5px;}
    
    .date-content {
      display: flex;
      gap: 15px;
      flex-direction: row;
    }

    select {
      display: flex;
      flex: 1;
      height: 52px;
      padding: 0 15px;
      outline: none;
      border: solid 2px #F1EFF1;
      font-size: 16px;
      background: #F7F5F7;
      border-radius: 10px;
  
      option {
        font-size: 14px;
      }
    }

  }

  button {
    width: 400px;
    height: 52px;
    padding: 0 15px;
    outline: none;
    border: none;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    background: #7AE284;
    color: #0B181D;
    border-radius: 10px;
    cursor: pointer;
    
    &:hover {
      background: #4EC559;
    }
  }

  @media (max-width: 500px) {
    padding: 0 15px;
    .inputs-content {
      width: 100%;
      select {
        width: 100%;
      }

      input {
        width: 100%;
      }
    }

    .date-container {
      width: 100%;
    }

    button {
      width: 100%;
    }
  }
`;