import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {
  const [enteredAmount, setAmount] = useState("");

  const newTransactionChange = (event) => {
    setAmount(event.target.value);
  };

  const addTransactionHandler = (ev) => {
    ev.preventDefault();

    const newTransaction = {
      id: Math.random(),
      iznos: enteredAmount,
    };

    props.onAddTransaction(newTransaction);
  };

  return (
    <div className="user-input">
      <form className="form-group" onSubmit={addTransactionHandler}>

        <div className="rows">

          <div className="first-row">
            
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  HRK
                </span>
              </div>
              <input
                type="number"
                className="form-control"
                placeholder="Iznos"
                onChange={newTransactionChange}
              ></input>
            </div>

            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  dd/mm/yy
                </span>
              </div>
              <input
                type="date"
                className="form-control"
                placeholder="Datum"
              ></input>
            </div>

            <div className="input-group">
              <div className="input-group-prepend">
                <div className="dropdown">
                <span className="input-group-text" id="basic-addon1">
                 Izaberite
                <div className="dropdown-content">
                  <a>Odjeća</a>
                  <a>Hrana</a>
                  <a>Kozmetika</a>
                  <a>Zabava</a>
                  <a>Djeca</a>
                  <a>Plaća</a>
                  <a>Ostalo</a>
                </div>
                </span>
                
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Vrsta transakcije"
              ></input>
            </div>
          </div>

          <div className="second-row">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  @
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Ime korisnika"
              ></input>
            </div>

            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  Valuta
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Valuta Transakcije"
              ></input>
            </div>

            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  ?
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Opis Transakcije"
              ></input>
            </div>
          </div>
        </div>
        <div className="input-group">
          <button className="addButton" type="submit">
            Dodaj Transakciju
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
