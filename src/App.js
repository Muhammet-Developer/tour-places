import './App.css';
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Card from "./components/cards/card";
import Data from "./components/helper/data";
function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Card data={Data}/>
    </>
  );
}

export default App;
