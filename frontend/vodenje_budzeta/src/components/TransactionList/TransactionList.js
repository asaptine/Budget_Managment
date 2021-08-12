import React from "react";
import "./TransactionList.css";

const TransactionList = (props) => {

    console.log(props)
  
  return (
    <div className="list">
      {props.transaction.map((tr) => {
        return (
          <ul className="transaction-list" >
            <li key={tr.id}><h3>Transakcija od {tr.name}</h3></li>
            <li className="transaction-item">{tr.iznos} {tr.currency}</li>
            <li className="transaction-item">{tr.date}</li>
            <li className="transaction-item">{tr.sort}</li>
            <li className="transaction-item">{tr.description}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default TransactionList;
