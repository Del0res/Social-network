import React from 'react';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile/*"
              element={<Profile state={props.state.profilePage} />} />
            <Route path="/dialogs/*"
              element={<Dialogs state={props.state.dialogsPage} />} />
            {/* <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/setting" element={<Setting />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
