import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersList from './pages/UsersList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UsersList/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
  
export default App;
