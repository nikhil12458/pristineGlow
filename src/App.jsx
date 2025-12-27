import React, { useContext } from 'react'
import Contact from './components/ContactPage/Contact'
import Nav from './components/navbar/Nav'
import BottomBar from './components/bottomBar/BottomBar'

const App = () => {
  return (
    <div className="main">
      <Nav />
       <Contact />
      <BottomBar />
    </div>
  );
};

export default App;
