import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import NewsList from './components/NewsList';
import SubHeader from './components/SubHeader';


function App() {
  return (
    <div>
      <Header />
      <SubHeader />
      <NewsList />
      <Footer />
    </div>
  );
}

export default App;
