import React from 'react';
import Grocery from './pages/grocery/Grocery';
import Nav from "./component/NavBar/NavBar";

function App() {
  return (
    <div>
      <nav>
        <Nav />
      </nav>
        <Grocery />
    </div>
  );
}

export default App;
