import React from 'react';
import {} from './styles';
import Banner from './components/banner';
import Servicos from './components/servicos/';
import Galeria from './components/galeria';
export default function Home() {
  return (
    <>
      {/* First Section Pasta: components/Banner/index.js*/}
          <Banner/>
      {/* End First Section */}

      {/* Second Section  Paste: components/servicos/index.js*/}
         <Servicos/> 
      {/* End Second Section */}
      {/* Tree Section Pasta: components/galeria/index.js */}
         <Galeria/>
      {/* End Tree Section */}
    </>
  );
}
