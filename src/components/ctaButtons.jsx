import React from "react"

const CtaButtons = (props) => {
    console.log(props.scenario)
        if(props.scenario === 1){ //1
            console.log("cta: 1")
            return(
                <>
                    <button className="button1">View Qualifying UPCs</button>
                    <button className="button2">Unclip Offer</button>
                </>
            );
        } else if(props.scenario === "IngenDeclineUnmetQualification"){ //2
            console.log("cta: 2")
            return(
                <>
                    <button className="button1">Unclip Offer</button>
                </>
            );
        } else if(props.scenario === "IngenDeclineClipDeleted"||"IngenDeclineNoPurse"||"IngenDeclineClipExpired"||"IngenDeclineNoClips"||"IngenDeclineLimitExceeded"||"IngenDeclineOfferExpired"||
         "AccountErrorCardExpired"||"ApplicationErrorGenericDecline"||"ProcessingErrorDataElement" 
         ||"AccountErrorCardInvalid"|| "AccountErrorNoActionTaken"||"ApplicationErrorInvalidTransaction"){ // 3,5,8
            console.log("cta: 3,5,8")
                return(
                    <>
                        <button className="button1">Reclip Offer</button>
                    </>
                );
        } else if(props.scenario === "IngenDeclineOfferInactive" || "IngenDeclineOfferNotYetActive" || "IngenDeclineClipNotActive"){ //6
            console.log("cta: 6")
            return(
                <>
                    <button className="button1">Unclip Offer</button>
                </>
            );
        } else if(props.scenario === "IngenDeclineRetailerExcluded" || "IngenDeclineRetailerNotIncluded" || "ApplicationErrorTranNotPermitted"){ //7
            console.log("cta: 7")
            return(
                <>
                    <button className="button1">Show Participating Retailers</button>
                    <button className="button2">Unclip Offer</button>
                </> 
            );
        } else {
            return(<div></div>);
        }
};

export default CtaButtons;
