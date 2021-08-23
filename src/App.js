import React from 'react';
import './App.css';
import Contacts from "./ComponentForm/Contacts";
import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/NewExpense';
// import ComponentKey from './components/ComponentKey';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense />
          <ExpenseItem></ExpenseItem>
          {/* <ComponentKey /> */}
          </header>
          <div className="row">
              <div className="container-fluid">
                <div className="col-md-8 offset-md-1">
                    <Contacts></Contacts>
                </div>
              </div>
          </div>
    </div>
  );
}

export default App;
