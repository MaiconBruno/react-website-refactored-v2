import React from 'react';
import {} from './styles';
import Banner from './components/banner';
import Servicos from './components/servicos/';

export default function Home() {
  return (
    <>
      {/* First Section Pasta: components/Banner/index.js*/}
          <Banner/>
      {/* End First Section */}

      {/* Second Section  Paste: components/servicos/index.js*/}
         <Servicos/> 
      {/* End Second Section */}
    </>
  );
}
