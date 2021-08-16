import React, { useState } from "react";

import Input from '../Input/Input'
import TransactionList from '../Transaction/TransactionList';

const DUMMY_DATA = [{
    id: 1,
    iznos: 1000,
    date: "11/02/2021",
    sort: "Odjeća",
    name: "Valentin",
    currency: "EUR",
    description: "Gucci jacket",
  },
  {
    id: 2,
    iznos: 1500,
    date: "11/02/2021",
    sort: "Odjeća",
    name: "Marko",
    currency: "HRK",
    description: "Majce",
  }];

function Transactions(props) {
 const [arrayOfTransactions, setTransactions] = useState(DUMMY_DATA);

  const addNewTransactionHandler = (newTransaction) => {
    setTransactions((prevTransactions) => {
      return prevTransactions.concat(newTransaction);
    });
  }; 
  return (
    <div >
      <Input onAddTransaction={addNewTransactionHandler} data={DUMMY_DATA}></Input>
      <TransactionList transaction={arrayOfTransactions} />
    </div>
  );
}

export default Transactions;
