import React from 'react';
import Header from './components/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>

    <Routes>
      <Route path='/' element={<ProductListing/>}/>
      <Route path='/product/:productId' element={<ProductDetail/>}/>

    </Routes>
 
    </BrowserRouter>


    
    
    </>
  )
}

export default App