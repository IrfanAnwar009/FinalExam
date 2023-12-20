import './App.css';
import "./assets/css/global.css";
import Navbar from './components/Navbar';
import HeroSection from "./components/HeroSection.jsx";
import Future from "./components/Future.jsx";
import {Footer} from "./components/Footer.jsx";


export default function App() {
    return (
        <div className='app-styled'>
            <Navbar/>
            <HeroSection />
            <Future/>
            <Footer/>
        </div>
    );
}
