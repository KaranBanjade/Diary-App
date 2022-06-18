import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import DiaryMultiple from './Components/Diaries/Diaries'
function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path = "/">
          <Route index element = {<Login />}/>
          <Route path ="register" element = {<Register />}/>
          <Route path ="home" element = {<DiaryMultiple />}/>
        </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
