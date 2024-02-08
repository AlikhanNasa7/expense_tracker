import './App.css';
import IncomeExpenses from './income-expenses/IncomeExpenses';
import Balance from './balance/Balance';
import History from './history/History';
import AddTransaction from './addTransaction/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <h2>Expense Tracker</h2>
        <div className='container'>
          <Balance />
          <IncomeExpenses />
          <History />
          <AddTransaction />
        </div>
      </GlobalProvider>
      
    </div>
  );
}

export default App;
