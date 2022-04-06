import React from 'react';
import '../../App.css';
import DrinkSection from '../DrinkSection';
import 'bootstrap/dist/css/bootstrap.css';
import Story from '../Story';
import Footer from '../Footer';
function Home() {
  return (
    <>
      <DrinkSection />
      <Story/>
      <Footer/>
    </>
  );
}

export default Home;