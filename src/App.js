import './App.css';
import Navigation from './components/navigation';
import Content from './components/content';
import Footer from './components/footer';
import Menu from './/components/menu';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Menu/>
      <Content />
      <Footer/>
    </div>
  );
}

export default App;
