import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './global/styles';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
       <div>
        <BrowserRouter>
            <GlobalStyles/>
            <Routes/>
        </BrowserRouter>
    </div>
  );
}
export default App;
