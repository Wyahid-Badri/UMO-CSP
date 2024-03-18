import React from "react"
import ProductDetails from "./productDetails";
import NextStep from "./nextStep";
import CtaButtons from "./ctaButtons";

const ActionsPage = (props) => {
  return (
    <div className="card">
    <ProductDetails/>
    <br/>
    <NextStep scenario={currentScenario}/>
    <br/>
    <RedemptionCard scenario={currentScenario}/>
    <br/>
    <CtaButtons scenario={currentScenario}/>
  </div>
  )
};

export default ActionsPage;
