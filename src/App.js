import './App.css';
import Navbar from './components/navbar';
import Home from './components/home'
import Categories from './components/categories';
import Feat from './components/feat'
import Article from './components/article';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Categories/>
      <Feat/>
      <Article/>
      <Footer/>
    </>
  );
}

export default App;
