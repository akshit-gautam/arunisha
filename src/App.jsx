import React from 'react';
import './App.css';
import {Navbar} from './component/Navbar/Navbar';
import {Contact} from './component/Contact/Contact';
import { Footer} from './component/Footer/Footer';


export const App = () => {
  return (
    <div>
      <Navbar />
      <Contact />
      <Footer />
    </div>
  )
}
export default App
