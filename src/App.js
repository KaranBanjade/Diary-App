import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import DiariesContainer from './Components/DiariesContainer/DiariesContainer'
function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path = "/">
          <Route index element = {<Login />}/>
          <Route path ="register" element = {<Register />}/>
          <Route path ="home" element = {<DiariesContainer />}/>
          {/* <Route path ="diary" element = {<Diary />}/> */}
        </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
