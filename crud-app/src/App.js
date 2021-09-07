import './App.css';
import AddInvestorForm from './components/AddInvestorForm';
import InvestorsList from './components/InvestorsList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <AddInvestorForm />
      <InvestorsList />
    </div>
  );
}

export default App;
