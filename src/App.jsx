import './App.css';
import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom"
import ProductDetails from './components/productDetails';
import RedemptionCard from './components/redemptionCard';
import NextStep from './components/nextStep';
import CtaButtons from './components/ctaButtons';
import SignIn from './components/signIn';
import Selector from './components/selector';
import ActionsPage from './components/actionsPage';

function App() {
  const [currentScenario, setScenario] = useState();
  useEffect(() => {
    var incomingState = "IngenDeclineNoQualifiedItems"
    switch(incomingState){
      case "IngenDeclineNoQualifiedItems":
        setScenario(1);
        break;
      case "IngenDeclineUnmetQualification":
        setScenario(2);
        break;
      case "IngenDeclineClipDeleted":
      case "IngenDeclineNoPurse":
      default:
        setScenario(0);
    }
  },[]);
  

  return (
    <Routes>
      <Route path='/' element={<SignIn />}/>
      <Route path='/selector' element={<Selector />}/>
      <Route path='/actions' element={ActionsPage}/>
    </Routes>
  );
}

export default App;
