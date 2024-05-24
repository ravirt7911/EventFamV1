import './App.css';
import Links from './components/Links/Links';
import MainInvite from './components/MainInvite/MainInvite';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <MainInvite />
      <Events/>
      <Links/>
      <Footer/>
    </div>
  );
}

export default App;
