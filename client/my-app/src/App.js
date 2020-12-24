import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeandExpenses from "./components/IncomeandExpenses";
import TransactionList from "./components/TransactionList";
import Transaction from "./components/Transaction";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeandExpenses />
        <TransactionList />
        <Transaction />
      </div>
    </GlobalProvider>
  );
}

export default App;

/*<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/8.2.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/8.2.1/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>*/

// 2314dfa7a81827f65920cd7eaa2d01ed
