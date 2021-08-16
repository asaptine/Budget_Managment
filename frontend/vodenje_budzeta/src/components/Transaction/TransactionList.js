import React from "react";
import "./TransactionList.css";
import TransactionItem from "./TransactionItem";

const TransactionList = (props) => {
 
  return (
    <ul className="list">
      {props.transaction.map((tr) => {
        return <TransactionItem
          id={tr.id}
          amount={tr.iznos}
          date={tr.date}
          sort={tr.sort}
          name={tr.name}
          currency={tr.currency}
          description={tr.description}
        />;
      })}
    </ul>
  );
};

export default TransactionList;
