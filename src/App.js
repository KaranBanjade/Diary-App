import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Login from './Components/Login/Login'
function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path = "/">
          <Route index element = {<Login/>}/>
          <Route path ="Test" element = {<div><h1>Test</h1></div>}/>
        </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
