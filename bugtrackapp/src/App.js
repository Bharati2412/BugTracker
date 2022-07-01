import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Mainn from './components/Mainn';
import Footer from './components/Footer';





function App() {
  return (
    <div>
       
       <Navigation/>
       <Header/>
       <Sidebar/>
       <Mainn/>
       <Footer/>
       
       
      
    </div>
  );
}

export default App;
