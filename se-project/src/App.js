import logo from './logo.svg';
import './App.css';
import Navbar from "./StudentDashboard/Navbar"
import Sidebar from "./StudentDashboard/Sidebar"
import Dashboard from './StudentDashboard/Dashboard';

function App() {
  return (
    <div>
    <Navbar/>
    <div class="container-fluid" id="main">
     <div class="row row-offcanvas row-offcanvas-left">
       <Sidebar/>
      <Dashboard/>
    
 </div>
</div>  
</div>  
  );
}

export default App;
