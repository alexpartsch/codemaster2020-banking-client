import logo from './logo.svg';
import './App.css';
import AccountsTable from './banking/AccountsTable';
import CreateAccountForm from './banking/CreateAccountForm';
import DepositsTable from './banking/DepositsTable';

function App() {
  return (
    <div className="App">
      <CreateAccountForm />
      <AccountsTable />
      <DepositsTable />
    </div>
  );
}

export default App;
