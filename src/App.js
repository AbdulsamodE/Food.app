import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Headlines from "./components/Headlines";
import Foods from "./components/Foods";
import Category from './components/Category';



function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Headlines/>
      <Foods/> 
      <Category/>
    </> 
  );
}

export default App;

