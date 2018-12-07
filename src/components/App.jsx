import React from 'react';
import Error404 from './Error404';
import Search from './Search';
import Results from './Results';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Search />
      <Results />
      <Error404 />
      <Footer/>
    </div>
  );
}

export default App;