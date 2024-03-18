import React from "react"

const NextStep = (props) => {
  if(props.scenario == "IngenDeclineNoQualifiedItems"){ //1
    return (
        <h5 id="nextStep">Next Step: <p>Please inform customer that offer was successful with date and store information.</p></h5>
      )
  } else if(props.scenario == "IngenDeclineUnmetQualification"){ //2
    return (
        <h5 id="nextStep">Next Step: <p>Please instruct consumer to try purchase against at store and ensure purchase requirement is met. Please see the Offer Details above for the offer requirements.</p></h5>
      )
  } else if(props.scenario == "IngenDeclineClipDeleted" || "IngenDeclineNoPurse" || "IngenDeclineClipExpired" || "IngenDeclineNoClips"){ //3
    return (
        <h5 id="nextStep">Next Step: <p>Please reclip offer for the consumer and instruct to purchase again at store.</p></h5>
      )
  } else if(props.scenario == "AccountErrorLimitExceeded" || "AccountErrorInsufficientFunds" || "AccountErrorSuspectedFraud"){ //4
    return (
        <h5 id="nextStep">Next Step: <p>Please inform consumer that offer was already redeemed successfully with date and store information.</p></h5>
      )
  } else if(props.scenario == "IngenDeclineLimitExceeded" || "IngenDeclineOfferExpired" || "AccountErrorCardExpired"){ //5
    return (
        <h5 id="nextStep">Next Step: <p>Please inform consumer that the offer has expired on consumer expiration date and propose to reclipping offer if offer end date has not yet passed.</p></h5>
      )
  } else if(props.scenario == "IngenDeclineOfferInactive" || "IngenDeclineOfferNotYetActive" || "IngenDeclineClipNotActive"){ //6
    return (
        <h5 id="nextStep">Next Step: <p>Please inform consumer that the offer does not begin until offer start date and to retry purchase on or after that date.</p></h5>
      )
  } else if(props.scenario == "IngenDeclineRetailerExcluded" || "IngenDeclineRetailerNotIncluded" || "ApplicationErrorTranNotPermitted"){ //7
    return (
        <h5 id="nextStep">Next Step: <p>Please inform consumer that that only certain retailers participate in the program and to provide a list of participating retailers.</p></h5>
      )
  } else if(props.scenario = "ApplicationErrorGenericDecline" || "ProcessingErrorDataElement" || "AccountErrorCardInvalid" || "AccountErrorNoActionTaken" || "ApplicationErrorInvalidTransaction"){ //8
    return (
        <h5 id="nextStep">Next Step: <p>Please reclip offer for the consumer and instruct to purchase again at store.</p></h5>
      )
  }
};

export default NextStep;
