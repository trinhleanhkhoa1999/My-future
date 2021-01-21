import Footer from "./components/Footer";
import Header from "./components/Header";
import Support from "./components/Support";
import "./App.css"
import SupportNext from "./components/SupportNext";
import Category from "./components/Category";
import ScrollTop from "./components/ScrrollTop";
import Card from "./components/Card"
import TitleProduct from "./components/TitleProduct";
import BestPrice from "./components/BestPrice";
import Testimony from "./components/Testimony"
import DemoRedux from "./components/DemoRedux";

function App() {
  return (
    <div>
    <Header/>
    <Support/>
    <SupportNext/>
    <Category/>
     <DemoRedux/>
    <TitleProduct/>
    <Card/>
    <BestPrice/>
    <Testimony/>
    <ScrollTop/>
    <Footer/>
    </div>
  );
}

export default App;
