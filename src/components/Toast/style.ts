import styled from 'styled-components';

export const ToastContainer = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 50px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  z-index: 100;
  
  div {
    position: relative;
    padding: 10px 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background: #16a34a;
    height: 100%;
    gap: 10px;
    border-radius: 7px;
    color: white;

    svg {
      font-size: 1.5rem;
    }
  }
`