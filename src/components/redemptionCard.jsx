import "../App.css"
function RedemptionCard(){
    return(
        <div id="redemptionCard">
            <table id="redemptionTable">
                <tr>
                    <th>Timestamp</th>
                    <th>Action Type</th>
                    <th>Additional Information</th>
                </tr>
                <tr>
                    <td>01/02/2023 @1:15pm</td>
                    <td>Clipped Offer</td>
                    <td>User: Wb</td>
                </tr>
                <tr>
                    <td>03/12/2023 @4:23am</td>
                    <td>No Offer on Barcode</td>
                    <td>N/A</td>
                </tr>
                <tr>
                    <td>11/22/2023 @5:43pm</td>
                    <td>Activation</td>
                    <td>Retailer: Walmart <br/> Store ID: 321 <br/> Bronx, NY</td>
                </tr>
            </table>
            <button id="clipBtn">Unclip Offer</button>
        </div>
    )
}

export default RedemptionCard