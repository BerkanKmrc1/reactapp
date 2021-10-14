
import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';
function App() {
  const test= 5;
  return (
    <div className="App">
    <Navbar title = "UserApp 2"/>
    <hr/>
    <User 
    name = "Berkan Kömürcü"
    salary = "5000"
    department = "Bilişim"
    />
    <User 
    name = "Ömer Kömürcü"
    salary = "6000"
    department = "Bilişim"
    />

    </div>
  );
}

export default App;
