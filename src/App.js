// import logo from './logo.svg';
import './App.css';
import Assignments from './Components/Assignments/Assignments';
// import NavPillsExample from './Components/Card';
import Navbar from './Components/Nabvar/Navbar';
import Phone from './Components/Phone/Phone';
import Pricing from './Components/Pricing/Pricing';


function App() {
  return (
    <div className="App">
      
      <Navbar></Navbar>

<Pricing></Pricing>
<Phone></Phone>

<Assignments></Assignments>


     
{/*    
      <NavPillsExample></NavPillsExample>     */}
    </div>
  );
}

export default App;
