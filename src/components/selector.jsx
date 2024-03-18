import React from "react"

const Selector = (props) => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <small><strong>ID:</strong> ABC123</small>
      <br/>
      <small><strong>Barcode:</strong> 951753852</small>
      <table className="selectorTable">
                <tr>
                    <th></th>
                    <th>Offer Start Date</th>
                    <th>Offer End Date</th>
                    <th>Consumer Expiration Date</th>
                    <th>Status</th>
                    {/* <th></th> */}
                </tr>
                <tr>
                    <td>Offer 1</td>
                    <td>03/15/2022</td>
                    <td>05/10/2022</td>
                    <td>05/11/2022</td>
                    <td>Needs Review</td>
                    <button onClick={() => navigate("/actions")}>View Offer</button>
                </tr>
                <tr>
                    <td>Offer 2</td>
                    <td>05/20/2022</td>
                    <td>11/10/2022</td>
                    <td>12/25/2022</td>
                    <td>No Issue</td>
                    <button onClick={() => navigate("/actions")}>View Offer</button>
                </tr>
                <tr>
                    <td>Offer 3</td>
                    <td>10/31/2023</td>
                    <td>11/27/2023</td>
                    <td>12/01/2023</td>
                    <td>Needs Review</td>
                    <button onClick={() => navigate("/actions")}>View Offer</button>
                </tr>
            </table>
    </div>
  )
};

export default Selector;
