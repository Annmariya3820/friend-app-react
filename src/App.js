import logo from './logo.svg';
import './App.css';
import AddFriend from './components/AddFriend';
import SearchFriend from './components/SearchFriend';
import Navbar from './components/Navbar';
import ViewFriend from './components/ViewFriend';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddFriend/>}/>
      <Route path='/search' element={<SearchFriend/>}/>
      <Route path='/view' element={<ViewFriend/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
