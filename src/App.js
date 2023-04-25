import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import BookFlight from "./routes/BookFlight";
import Login from "./routes/Login";
import Profile from "./routes/Profile";


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path ="/" element ={<Home/>}/>
      <Route path ="/bookflight" element ={<BookFlight/>}/>
      <Route path ="/login" element ={<Login/>}/>
      <Route path ="/profile" element ={<Profile/>}/>
    </Routes>
    </div>
  );
}

export default App;