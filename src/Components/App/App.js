import React from 'react';
import './App.css';

//Import Components
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Reasons from '../Reasons/Reasons';
import Articles from '../Articles/Articles';
import Footer from '../Footer/Footer';
function App() {
  return (
    <div className='App'>
      <Nav />
      <Header />
      <Reasons />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
