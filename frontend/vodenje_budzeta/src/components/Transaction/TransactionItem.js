import React from "react";
import "./TransactionItem.css";

const TransactionItem = (props) => {
  console.log(props);
  return (
    <li key={props.id} className="transaction-item">
      <div className="transaction-item__info">
        <h3>Transakcija od {props.name}</h3>
        <hr></hr>
        <div className="transaction-item__content">
          <div className="transaction-item__desc">
            <h3>{props.sort}</h3>
            <p>{props.description}</p>
          </div>
          <div className="transaction-item__amount">
            <h2>
              {props.amount}/{props.currency}
            </h2>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TransactionItem;
