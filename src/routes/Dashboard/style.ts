import styled from 'styled-components';

export const DashContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`
export const DashContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  padding: 0 15px;

  h1 {
    font-size: 2rem;
    color: white;
  }

  .doctor-title {
    margin-top: 5px;
    font-size: 2rem;
    color: white;
  }

  .no-content {
    margin-top: 150px;
    font-size: 1.2rem;
    font-weight: 300;
    opacity: 60%;
  }

  @media (max-width: 500px) {
    padding-bottom: 80px;
    width: 100%;
    h1 {
      font-size: 3rem;
    }
  }

`

export const Patient = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  background: white;
  padding: 20px;
  border-radius: 20px;
  margin-top: 50px;

  .content {
    display: flex;
    flex-direction: column;
    margin: 10px 0;

    h3 {
      font-size: 1.5rem;
      color: #0B181D;
      margin-top: 5px;
    }
    
    span {
      font-size: 0.9rem;
      color: #0B181D;
      opacity: 80%;
    }
  }

  .line {
    width: 100%;
    height: 1px;
    background: #0B181D;
    margin: 15px 0;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`