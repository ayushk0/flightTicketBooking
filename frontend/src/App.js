import './App.css';
import NavBar from './components/navbar/navbar';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import Search from './components/search/search';
import Info from './components/info/info';

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Search/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
