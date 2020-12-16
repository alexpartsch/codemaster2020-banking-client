import logo from './logo.svg';
import './App.css';
import AccountsTable from './banking/AccountsTable';
import CreateAccountForm from './banking/CreateAccountForm';

function App() {
  return (
    <div className="App">
      <CreateAccountForm />
      <AccountsTable />
    </div>
  );
}

export default App;
