import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersList from './pages/UsersList';
import Sidebar from './components/sidebar';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex"}}>
        <Sidebar />
        <div style={{ marginLeft: "200px", padding: "20px" }}>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/users' element={<UsersList/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
  
export default App;
