import './App.css';
import AddInvestorForm from './components/AddInvestorForm';
import InvestorsTable from './components/InvestorsTable';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <AddInvestorForm />
      <InvestorsTable />
    </div>
  );
}

export default App;
