import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'
import Building from './Building/Building.js'
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {data} from '../utils/utils.js'
import '../blocks/App.scss'
import '../blocks/Root.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navigation />
        <Routes>
          <Route path='/mgu/*' element={<Building data={data.msu}/>}/>
          <Route path="/kotelnicheskaya/*" element={<Building data={data.kotelnicheskaya}/>}/>
          <Route path="/mid/*" element={<Building data={data.mid}/>}/>
          <Route path="/ukr/*" element={<Building data={data.ukr}/>}/>
          <Route path="/kudrinskaya/*" element={<Building data={data.kudrinskaya}/>}/>
          <Route path="/vorota/*" element={<Building data={data.vorota}/>}/>
          <Route path="/leningradksya/*" element={<Building data={data.leningradksya}/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
