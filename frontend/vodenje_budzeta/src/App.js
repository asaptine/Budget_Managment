import Input from "./components/Input/Input";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import React, { useState } from "react";
import TransactionList from "./components/TransactionList/TransactionList";

function App() {
  const [arrayOfTransactions, setTransactions] = useState([
    {
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
    },
  ]);

  const addNewTransactionHandler = (newTransaction) => {
    setTransactions((prevTransactions) => {
      return prevTransactions.concat(newTransaction);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <Input onAddTransaction={addNewTransactionHandler} />
      <TransactionList transaction={arrayOfTransactions} />
    </div>
  );
}

export default App;
