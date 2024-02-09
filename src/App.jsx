import './App.css';
import React, {useEffect, useState} from 'react';
import ProductDetails from './components/productDetails';
import RedemptionCard from './components/redemptionCard';

function App() {
  return (
    <div className="card">
      <ProductDetails/>
      <h5 id="nextStep">Next Step: <p>Please inform customer that offer was successful with date and store information</p></h5>
      <RedemptionCard/>
    </div>
  );
}

export default App;
