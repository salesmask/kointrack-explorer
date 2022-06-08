import React from 'react';
import TableTab from './TableTab';

export default function Table() {
    return (
        <div>
            <TableTab />
            {/* <div className='table__container'>
              <table className="table">
                  <thead className="table__head">
                      <tr className="tableRow">
                          <th >#</th>
                          <th >Exchange</th>
                          <th >Pair</th>
                          <th >Spread</th>
                          <th >+2% Depth</th>
                          <th >-2% Depth</th>
                          <th >24h Volume</th>
                          <th >Volume %</th>
                          <th >Last Traded</th>
                          <th >Trust Score</th>
                      </tr>
                  </thead>
                  <tbody>
                      {currentApp.map((coin, index) => {
                          return (
                              <tr className="tableRow">
                                  <td>{index + 1}</td>

                                  <td ><img src={coin.image} style={{ height: "20px" }}></img>&nbsp;&nbsp;<span style={{ textTransform: "uppercase" }}>{coin.symbol}</span></td>
                                  <td>{coin.id}</td>

                                  <td >{coin.name}</td>
                                  <td >{coin.total_volume}</td>

                                  <td >{coin.market_cap}</td>
                                  <td >{coin.current_price}</td>
                                  <td >{coin.price_change_percentage_24h}</td>
                                  <td >{coin.price_change_percentage_24h}</td>
                                  {
                                      (coin.price_change_percentage_24h > 0) ? (
                                          <td ><span class="color-buy" ><svg style={{ height: "22px", width: "22px", justifyContent: "center" }} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7" clipRule="evenodd" />
                                          </svg></span></td>
                                      ) : (
                                          <td ><span class="color-sell"><svg style={{ height: "22px", width: "22px", margin: "0-auto" }} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7" clipRule="evenodd" />
                                          </svg></span></td>
                                      )

                                  }


                              </tr>

                          )
                      })}
                  </tbody>
              </table> */}
        </div>
    );
}
