import React from 'react';
import { useApp } from '../../context/appContext';

const Results = () => {
  const {
    state: { areResultsReady, stockPrices },
  } = useApp();

  if (areResultsReady) {
    return (
      <div>
        <table>
          <thead>
          <tr>
            <th>Day</th>
            <th>Price</th>
          </tr>
          </thead>
          <tbody>
          {stockPrices.map((day, index) => (
            <tr key={index}>
              <td>{day.date}</td>
              <td>{day.price}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (<div></div>);
};

export default Results;
