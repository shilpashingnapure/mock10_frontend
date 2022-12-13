import logo from './logo.svg';
import './App.css';
import {store} from './Redux/store'
import {Allroutes} from './Component/Allroutes'
import {Navbar} from './Component/Navbar'

function App() {
  



  return (
    <div className="App">
      <Navbar />
      <Allroutes />

    </div>
  );
}

export default App;
