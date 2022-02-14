import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Vedio from './components/vedio/Vedio';
import Div3 from './components/div3/Div3';
import Div4 from './components/div4/Div4';
import Div5 from './components/Div5/Div5';
import Video2 from './components/video2/Video2';
import Div6 from './components/div6/Div6';
import Video3 from './components/video3/Video3';
import Footer from './components/footer/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Card from './components/cards/Card';
import Footer2 from './components/footer2/Footer2';
import Home from './Home';
import Popup from './components/popup/Popup';
import Card2 from './components/card2/Card2';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route />
        <Route path="/" element={
        <Home/>   
        } />
        <Route path="card" element={
        <Card />   
        } />
       
        
      </Routes>
    </BrowserRouter>

        <Popup/>
        <Card2/>



     
 
    </div>
  );
}

export default App;
