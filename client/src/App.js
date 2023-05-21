import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Main from './pages/Main';
// import Auth from './user/pages/Auth';

import './App.scss';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          {/* <Route path='/auth' element={<Auth />} /> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
