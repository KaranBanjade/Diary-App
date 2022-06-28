import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import DiariesContainer from './Components/DiariesContainer/DiariesContainer'
import DiaryPage from './Components/DiaryPage/DiaryPage'
import ErrorPage from './Components/ErrorPage/ErrorPage';
function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path = "/">
          <Route index element = {<Login />}/>
          <Route path ="register" element = {<Register />}/>
          <Route path ="home" element = {<DiariesContainer />}/>
          <Route path ="diary" element = {<DiaryPage />}/>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
