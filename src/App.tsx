import { Outlet } from 'react-router-dom'
import { GlobalStyle } from './style/GlobalStyle';
import { CSSProperties } from 'react'
import { Header } from './components'

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <GlobalStyle/>
    </>
  )
};

export default App;
